import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../consts';

// llms.txt — a concise, LLM-friendly map of the site (see https://llmstxt.org).
// Kept in sync with the blog collection at build time.
export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const lines: string[] = [];
  lines.push(`# ${SITE.name}`);
  lines.push('');
  lines.push(`> ${SITE.description}`);
  lines.push('');
  lines.push(
    'Lambda Security publishes research and writing on static analysis, formal methods, ' +
      'LLMs for security, vulnerability detection, and secure software development.'
  );
  lines.push('');
  lines.push('## Writing');
  lines.push('');
  for (const p of posts) {
    const url = new URL(p.data.permalink, SITE.url).href;
    const desc = (p.data.description ?? '').trim().replace(/\s+/g, ' ');
    lines.push(`- [${p.data.title}](${url})${desc ? `: ${desc}` : ''}`);
  }
  lines.push('');
  lines.push('## Resources');
  lines.push('');
  lines.push(`- [Projects](${SITE.url}/projects/): Open-source security research tools.`);
  lines.push(`- [RSS feed](${SITE.url}/rss.xml): Full-text feed of new writing.`);
  lines.push(`- [GitHub](${SITE.github}): Source for Frame, Autogrep, AutoFix, and more.`);
  lines.push(`- [Hugging Face](${SITE.huggingface}): Models and datasets.`);
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
