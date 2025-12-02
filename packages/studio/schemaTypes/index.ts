import { defineField, defineType } from 'sanity';

const IngredientUnits: Record<string, string> = {
  ml: 'ml',
  cl: 'cl',
  dl: 'dl',
  l: 'l',
  mg: 'mg',
  g: 'g',
  kg: 'kg',
};

const Ingredient = defineType({
  type: 'object',
  title: 'Ingredient',
  name: 'ingredient',
  fields: [
    defineField({
      type: 'string',
      title: 'Name',
      name: 'name',
    }),
    defineField({
      type: 'number',
      title: 'Measure',
      name: 'measure',
    }),
    defineField({
      type: 'string',
      title: 'Unit',
      name: 'unit',
      options: {
        list: Object.entries(IngredientUnits).map(([key, value]) => ({
          title: key,
          value: value,
        })),
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      measure: 'measure',
      unit: 'unit',
    },
    prepare: ({ title, measure, unit }) => ({
      title: `${title} - ${measure} ${IngredientUnits[unit]}`,
    }),
  },
});

const Recipe = defineType({
  title: 'Recipe',
  name: 'recipe',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      title: 'Ingredients',
      name: 'ingredients',
      type: 'array',
      of: [{ type: 'ingredient' }],
    }),
    defineField({
      title: 'Introduction',
      name: 'introduction',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      title: 'Instructions',
      name: 'instructions',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});

export const schemaTypes = [Recipe, Ingredient];
