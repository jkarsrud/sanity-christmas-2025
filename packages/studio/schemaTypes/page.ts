import { defineField, defineType } from 'sanity';

const Hero = defineType({
  type: 'object',
  title: 'Hero',
  name: 'hero',
  fields: [
    defineField({
      type: 'string',
      title: 'Title',
      name: 'title',
    }),
    defineField({
      type: 'array',
      title: 'Content',
      name: 'content',
      of: [{ type: 'block' }],
    }),
  ],
});

const Page = defineType({
  type: 'document',
  title: 'Page',
  name: 'page',
  fields: [
    defineField({
      type: 'string',
      title: 'Title',
      name: 'title',
    }),
    defineField({
      type: 'url',
      title: 'URL Path',
      name: 'urlPath',
      validation: (rule) =>
        rule.uri({
          allowRelative: true,
          relativeOnly: true,
        }),
    }),
    defineField({
      type: 'array',
      title: 'Modules',
      name: 'modules',
      of: [{ type: 'hero' }],
    }),
  ],
});

export const schemaTypes = [Page, Hero];
