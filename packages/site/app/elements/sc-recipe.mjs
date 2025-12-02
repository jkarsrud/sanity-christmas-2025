import { toHTML } from '@portabletext/to-html';

/* @type {import('@enhance/types').EnhanceElemFn */
export default function RecipeElement({ html, state: { store } }) {
  const { recipe = {} } = store;

  const introductionHtml = toHTML(recipe.introduction);
  const instructionsHtml = toHTML(recipe.instructions);

  return html`
    <h1>${recipe.title}</h1>
    ${introductionHtml}
    <h2>Ingredients</h2>
    <ul>
      ${recipe.ingredients
        .map((i) => {
          return `<li>${i.measure} ${i.unit} ${i.name}</li>`;
        })
        .join('')}
    </ul>
    <h2>Instructions</h2>
    ${instructionsHtml}
  `;
}
