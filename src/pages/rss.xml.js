import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

export async function GET(context) {
  const posts = await getCollection('articleCollection');
  return rss({
    title: 'TAKAMATSU-NOTE | 高松市のイベント・グルメ・お出かけ情報を発信するローカルメディア',
    description:
      '高松市のイベント情報、グルメ、お出かけスポット、地域ニュース、暮らしに役立つ情報を発信するローカルメディア。高松の最新情報をわかりやすくお届けします。',
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/article/${post.id}/`,
    })),
  });
}
