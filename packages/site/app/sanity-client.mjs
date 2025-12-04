import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-12-02',
  perspective: 'published',
  token: process.env.SANITY_API_TOKEN,
});

export default sanityClient;
