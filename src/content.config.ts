import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const CategoryEnum = ['news', 'open', 'events', 'city', 'develop', 'others'] as const;
const SpotEnum = [
  'サンポート高松',
  'あなぶきアリーナ香川',
  '高松シンボルタワー',
  'JR高松駅',
  '高松オルネ',
  '玉藻公園',
  '丸亀町商店街',
  '丸亀町グリーン',
  '兵庫町商店街',
  'ライオン通商店街',
  '南新町商店街',
  '瓦町FLAG',
  '瓦町駅',
  'トキワ街',
  '栗林公園',
  '栗林駅',
  'レインボーロード',
  'サンフラワー通り',
  '屋島山上',
  '屋島寺',
  '仏生山温泉',
  '仏生山公園',
  '讃岐国分寺跡',
  '八栗駅',
  '庵治漁港',
  'その他',
] as const;

const articleCollection = defineCollection({
  loader: glob({ base: './src/content/article', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      thumbnail: z.optional(image()),
      category: z.enum(CategoryEnum),
      spot: z.enum(SpotEnum),
      publishDate: z.coerce.date(),
    }),
});

export const collections = { articleCollection };
