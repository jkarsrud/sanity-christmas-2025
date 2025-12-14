import { schemaTypes as recipeTypes } from './recipes';
import { schemaTypes as pageBuilderTypes } from './page';

export const schemaTypes = [...recipeTypes, ...pageBuilderTypes];
