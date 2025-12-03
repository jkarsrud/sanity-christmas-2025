import { toHTML } from '@portabletext/to-html';

/* @type {import('@enhance/types').EnhanceElemFn */
export default function RecipeElement({ html, state: { store } }) {
  const { recipe = {} } = store;

  const introductionHtml = toHTML(recipe.introduction);
  const instructionsHtml = toHTML(recipe.instructions, {
    components: {
      types: {
        instruction: ({ value }) => {
          return `<p>${toHTML(value.body)}</p>`;
        },
        callout: ({ value }) => {
          return `<div class="callout ${value.level}">
          <p>${toHTML(value.body)}</p>
          </div>`;
        },
      },
    },
  });

  return html`
    <style>
      .callout {
        border-radius: 1rem;
        padding: 0.5rem 1rem;
      }
      .callout.info {
        background-color: var(--cornflower-blue);
      }
    </style>
    <article>
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
    </article>
  `;
}
