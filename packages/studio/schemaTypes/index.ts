import { defineField, defineType } from 'sanity';
import { DocumentIcon } from '@sanity/icons';

const IngredientUnits: Record<string, string> = {
  ml: 'ml',
  cl: 'cl',
  dl: 'dl',
  l: 'l',
  mg: 'mg',
  g: 'g',
  kg: 'kg',
  ts: 'ts',
  ss: 'ss',
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
    defineField({
      type: 'string',
      title: 'Category',
      name: 'category',
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

const Instruction = defineType({
  type: 'object',
  title: 'Instruction step',
  name: 'instruction',
  fields: [
    defineField({
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});

const Callout = defineType({
  type: 'object',
  title: 'Callout',
  name: 'callout',
  fields: [
    defineField({
      title: 'Level',
      name: 'level',
      type: 'string',
      options: {
        list: [
          { title: 'Info', value: 'info' },
          { title: 'Warning', value: 'warning' },
        ],
      },
    }),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  preview: {
    select: {
      title: 'body',
      subtitle: 'level',
    },
  },
});

const Category = defineType({
  type: 'document',
  title: 'Category',
  name: 'category',
  fields: [
    defineField({ title: 'Name', name: 'name', type: 'string' }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});

const iso8601TimeDurationRegex = /^PT(?:[0-9]+H)?(?:[0-9]+M)?(?:[0-9]+(\.[0-9]+)?S)?$/;

const Recipe = defineType({
  title: 'Recipe',
  name: 'recipe',
  type: 'document',
  icon: DocumentIcon,
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
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    }),
    defineField({
      title: 'Duration',
      name: 'duration',
      type: 'string',
      validation: (rule) =>
        rule.required().custom((val) => {
          if (val == null || iso8601TimeDurationRegex.test(val)) return true;

          return 'Duration does not match ISO 8601 duration';
        }),
    }),
    defineField({
      type: 'image',
      title: 'Poster Image',
      name: 'poster',
      fields: [
        defineField({
          name: 'caption',
          type: 'string',
        }),
      ],
      options: {
        hotspot: {
          previews: [
            { title: '2:1', aspectRatio: 2 / 1 },
            { title: '4:5', aspectRatio: 4 / 5 },
            { title: '9:16', aspectRatio: 9 / 16 },
            { title: '16:9', aspectRatio: 16 / 9 },
          ],
        },
      },
    }),
    defineField({
      title: 'Introduction',
      name: 'introduction',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      title: 'Ingredients',
      name: 'ingredients',
      type: 'array',
      of: [{ type: 'ingredient' }],
    }),
    defineField({
      title: 'Instructions',
      name: 'instructions',
      type: 'array',
      of: [{ type: 'block' }, { type: 'instruction' }, { type: 'callout' }],
    }),
  ],
});

export const schemaTypes = [Recipe, Ingredient, Instruction, Callout, Category];
