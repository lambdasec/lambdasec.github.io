// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { visit } from 'unist-util-visit';
import { imageSize } from 'image-size';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const PUBLIC_DIR = new URL('./public/', import.meta.url);
const dimCache = new Map();

/**
 * rehype plugin: for markdown <img> that reference files in /public,
 * add intrinsic width/height (prevents CLS) plus lazy/async decoding.
 */
function rehypeImageAttrs() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'img') return;
      const props = node.properties || (node.properties = {});
      const src = props.src;

      props.loading ??= 'lazy';
      props.decoding ??= 'async';

      if (typeof src !== 'string' || !src.startsWith('/') || src.startsWith('//')) return;
      if (props.width || props.height) return;

      try {
        if (!dimCache.has(src)) {
          const filePath = fileURLToPath(new URL('.' + src, PUBLIC_DIR));
          const { width, height } = imageSize(readFileSync(filePath));
          dimCache.set(src, { width, height });
        }
        const dim = dimCache.get(src);
        if (dim?.width && dim?.height) {
          props.width = dim.width;
          props.height = dim.height;
        }
      } catch {
        // file missing or unreadable — skip dimensions, keep lazy/async
      }
    });
  };
}

// https://astro.build
export default defineConfig({
  site: 'https://lambdasec.github.io',
  trailingSlash: 'always',
  integrations: [sitemap()],
  // Inline the (small) global stylesheet so first paint needs no extra round-trip.
  build: { inlineStylesheets: 'always' },
  markdown: {
    rehypePlugins: [rehypeImageAttrs],
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});
