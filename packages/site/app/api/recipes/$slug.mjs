import sanityClient from '../../sanity-client.mjs';
import groq from 'groq';

export async function get(req) {
  const currentRecipeQuery = groq`*[_type=="recipe" && slug.current == $slug]{
  ..., 
  "categories": categories[]->name
  }[0]`;

  const recipe = await sanityClient.fetch(currentRecipeQuery, req.params);

  return {
    json: { recipe },
  };
}
