import { createImageUrlBuilder } from '@sanity/image-url';
import sanityClient from './sanity-client.mjs';

const builder = createImageUrlBuilder(sanityClient);

/**
 * @param {import('@sanity/image-url').SanityImageSource} source
 */
export function urlFor(source) {
  return builder.image(source);
}
