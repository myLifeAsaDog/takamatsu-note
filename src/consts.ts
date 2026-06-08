// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Astro Blog';
export const SITE_DESCRIPTION = 'Welcome to my website!';
export const CATEGORY_TABLE = [
  { id: 1, name: 'ニュース', slug: 'news' },
  { id: 2, name: '開店・閉店', slug: 'open' },
  { id: 3, name: 'イベント', slug: 'events' },
  { id: 4, name: '行政・暮らし', slug: 'city' },
  { id: 5, name: '再開発・まちづくり', slug: 'develop' },
  { id: 6, name: 'その他', slug: 'others' },
] as const;
export const SPOT_TABLE = [
  // サンポート
  {
    id: 1,
    areaId: 1,
    name: 'サンポート高松',
    slug: 'sunport-takamatsu',
  },
  {
    id: 2,
    areaId: 1,
    name: 'あなぶきアリーナ香川',
    slug: 'anabuki-arena-kagawa',
  },
  {
    id: 3,
    areaId: 1,
    name: '高松シンボルタワー',
    slug: 'symbol-tower',
  },

  // 高松駅前
  {
    id: 4,
    areaId: 2,
    name: 'JR高松駅',
    slug: 'jr-takamatsu-station',
  },
  {
    id: 5,
    areaId: 2,
    name: '高松オルネ',
    slug: 'takamatsu-orne',
  },
  {
    id: 6,
    areaId: 2,
    name: '玉藻公園',
    slug: 'tamamo-park',
  },

  // 中央商店街
  {
    id: 7,
    areaId: 3,
    name: '丸亀町商店街',
    slug: 'marugamemachi',
  },
  {
    id: 8,
    areaId: 3,
    name: '丸亀町グリーン',
    slug: 'marugamemachi-green',
  },
  {
    id: 9,
    areaId: 3,
    name: '兵庫町商店街',
    slug: 'hyogomachi',
  },
  {
    id: 10,
    areaId: 3,
    name: 'ライオン通商店街',
    slug: 'lion-dori',
  },
  {
    id: 11,
    areaId: 3,
    name: '南新町商店街',
    slug: 'minamishinmachi',
  },

  // 瓦町
  {
    id: 12,
    areaId: 4,
    name: '瓦町FLAG',
    slug: 'kawaramachi-flag',
  },
  {
    id: 13,
    areaId: 4,
    name: '瓦町駅',
    slug: 'kawaramachi-station',
  },
  {
    id: 14,
    areaId: 4,
    name: 'トキワ街',
    slug: 'tokiwa-street',
  },

  // 栗林
  {
    id: 15,
    areaId: 5,
    name: '栗林公園',
    slug: 'ritsurin-garden',
  },
  {
    id: 16,
    areaId: 5,
    name: '栗林駅',
    slug: 'ritsurin-station',
  },

  // レインボーロード
  {
    id: 17,
    areaId: 6,
    name: 'レインボーロード',
    slug: 'rainbow-road-main',
  },
  {
    id: 18,
    areaId: 6,
    name: 'サンフラワー通り',
    slug: 'sunflower-road',
  },

  // 屋島
  {
    id: 19,
    areaId: 7,
    name: '屋島山上',
    slug: 'yashima-mountain',
  },
  {
    id: 20,
    areaId: 7,
    name: '屋島寺',
    slug: 'yashimaji',
  },

  // 仏生山
  {
    id: 21,
    areaId: 8,
    name: '仏生山温泉',
    slug: 'busshozan-onsen',
  },
  {
    id: 22,
    areaId: 8,
    name: '仏生山公園',
    slug: 'busshozan-park',
  },

  // 国分寺
  {
    id: 23,
    areaId: 9,
    name: '讃岐国分寺跡',
    slug: 'sanuki-kokubunji',
  },

  // 牟礼・庵治
  {
    id: 24,
    areaId: 10,
    name: '八栗駅',
    slug: 'yakuri-station',
  },
  {
    id: 25,
    areaId: 10,
    name: '庵治漁港',
    slug: 'aji-fishing-port',
  },
  {
    id: 99,
    areaId: 99,
    name: 'その他',
    slug: 'others',
  },
] as const;
