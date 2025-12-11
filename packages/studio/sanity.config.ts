import { defineConfig } from 'sanity';
import { StructureBuilder, structureTool, StructureToolOptions } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

const structure = (S: StructureBuilder) =>
  S.list()
    .title('Recipes')
    .items([...S.documentTypeListItems().reverse()]);

export default defineConfig({
  name: 'default',
  title: 'Sopra Christmas 2025',

  projectId: '9zx6lchr',
  dataset: 'production',

  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
