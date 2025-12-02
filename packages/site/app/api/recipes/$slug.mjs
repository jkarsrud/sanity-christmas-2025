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

  const query = groq`
  *[_type=="recipe" && slug.current == $slug][0]
`;

  const recipe = await sanityClient.fetch(query, req.params);

  console.log(recipe);

  return {
    json: { recipe },
  };
}
