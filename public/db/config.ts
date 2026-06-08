import { defineDb, defineTable, column } from 'astro:db';

export const ArticleTable = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    body: column.text(),
    category: column.number(),
    area: column.number(),
    spot: column.number(),
    publishedAt: column.text(),
  },
});

export const NavigationTable = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text({ unique: true }),
    description: column.text(),
    url: column.text({ unique: true }),
  },
});

export const CategoryTable = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    slug: column.text({ unique: true }),
  },
});

export const AreaTable = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    slug: column.text({ unique: true }),
  },
});

export const SpotTable = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    areaId: column.number(),
    name: column.text(),
    slug: column.text({ unique: true }),
  },
});

export const WeatherTable = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    code: column.number(),
    name: column.text(),
    image: column.text(),
  },
});

export default defineDb({
  tables: {
    CategoryTable,
    NavigationTable,
    AreaTable,
    SpotTable,
    ArticleTable,
    WeatherTable,
  },
});
