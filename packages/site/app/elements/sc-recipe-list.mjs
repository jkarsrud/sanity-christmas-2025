import { toHTML } from '@portabletext/to-html';

export default function SCRecipeList({ html, state: { store } }) {
  const { recipes = [] } = store;

  return html`
  <h1>Recipes</h1>
  ${recipes
    .map((recipe) => {
      const introductionHtml = toHTML(recipe.introduction);
      const url = `recipes/${recipe.slug.current}`;

      return `
        <h2><a href="${url}">${recipe.title}</a></h2>
        <time datetime="${recipe._createdAt}">
          ${new Date(recipe._createdAt).toLocaleDateString()}
        </time>
        ${introductionHtml}
      `;
    })
    .join('')}

  </ul>
`;
}
