import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../consts';

export async function GET(context) {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: post.data.permalink,
    })),
  });
}
