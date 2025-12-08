import sanityClient from '../../sanity-client.mjs';
import groq from 'groq';

/** @type {import('@enhance/types').EnhanceApiFn */
export async function get(req) {
  const categoryAndRecipeQuery = groq`
  {
  "recipes": *[_type == "recipe" && select(defined($category) => $category in categories[]->name, true)]{
    _type,
    _id,
    _createdAt,
    title,
    slug,
    introduction,
    poster
  }[0...5] | order(_createdAt desc),
  "categories": *[_type == "category"]{name, _id, _type}
}`;

  const { categories, recipes } = await sanityClient.fetch(categoryAndRecipeQuery, {
    category: req.query.category || null,
  });

  const pageModel = {
    title: 'Recipes',
    recipes,
    categories,
    selectedCategory: req.query.category,
  };

  return {
    json: { pageModel },
  };
}
