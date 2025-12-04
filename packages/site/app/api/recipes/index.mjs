import sanityClient from '../../sanity-client.mjs';
import groq from 'groq';

export async function get(req) {
  const latestRecipesQuery = groq`*[_type=="recipe"]{_id, _createdAt, title, slug, introduction, poster} | order(_createdAt desc)[0...5]`;

  const recipes = await sanityClient.fetch(latestRecipesQuery);

  return {
    json: { recipes },
  };
}
