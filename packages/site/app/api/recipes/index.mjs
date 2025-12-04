import { createClient } from '@sanity/client';
import groq from 'groq';

export async function get(req) {
  const sanityClient = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production',
    useCdn: true,
    apiVersion: '2025-12-02',
    perspective: 'published',
    token: process.env.SANITY_API_TOKEN,
  });

  const latestRecipesQuery = groq`*[_type=="recipe"]{_id, _createdAt, title, slug, introduction} | order(_createdAt desc)[0...5]`;

  const recipes = await sanityClient.fetch(latestRecipesQuery);

  return {
    json: { recipes },
  };
}
