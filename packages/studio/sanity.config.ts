import { defineConfig } from 'sanity';
import { StructureBuilder, structureTool, StructureToolOptions } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

const structure = (S: StructureBuilder) =>
  S.list()
    .title('Recipe website')
    .items([
      S.listItem()
        .title('Recipes')
        .child(
          S.documentTypeList('category')
            .title('Recipes by category')
            .child((categoryId) =>
              S.documentList()
                .title('Recipes')
                .filter(
                  '_type == "recipe" && select(defined($categoryId) => $categoryId in categories[]->_id, true)'
                )
                .params({ categoryId })
            )
        ),
      S.divider().title('All document types'),
      S.documentTypeListItem('category'),
      S.documentTypeListItem('recipe'),
    ]);

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
