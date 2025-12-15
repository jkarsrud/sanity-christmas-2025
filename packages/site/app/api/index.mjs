import sanityClient from '../sanity-client.mjs';
import groq from 'groq';

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(req) {
  const path = req.path;

  const query = groq`
*[_type == 'page' && urlPath == $path]{title, modules, content}[0]
`;

  const page = await sanityClient.fetch(query, { path });

  return {
    json: {
      page,
    },
  };
}
