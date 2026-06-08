import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORY_TABLE, SPOT_TABLE } from './consts';

const CategoryNames = CATEGORY_TABLE.map((category) => category.slug);
const SpotNames = SPOT_TABLE.map((spot) => spot.name);

const CategoryEnum = [...CategoryNames] as const;
const SpotEnum = [...SpotNames] as const;

const articleCollection = defineCollection({
  loader: glob({ base: './src/content/article', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      thumbnail: z.union([image(), z.url()]).optional(),
      category: z.enum(CategoryEnum),
      spot: z.enum(SpotEnum),
      publishDate: z.coerce.date(),
    }),
});

export const collections = { articleCollection };
