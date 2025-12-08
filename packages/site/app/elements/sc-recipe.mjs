import { toHTML } from '@portabletext/to-html';
import { urlFor } from '../sanityImageUrl.mjs';

/* @type {import('@enhance/types').EnhanceElemFn */
export default function RecipeElement({ html, state: { store } }) {
  const { recipe = {} } = store;

  console.log(recipe.poster);

  const introductionHtml = toHTML(recipe.introduction);
  const instructionsHtml = toHTML(recipe.instructions, {
    components: {
      types: {
        instruction: ({ value }) =>
          `<div class="instruction"><input type="checkbox" id="${value._key}" /><div>${toHTML(value.body)}</div></div>`,
        callout: ({ value }) => {
          return `<div class="callout ${value.level}">
          <p>${toHTML(value.body)}</p>
          </div>`;
        },
      },
    },
  });

  const posterSrcSet = [
    `${urlFor(recipe.poster).width(400).url()} 400w`,
    `${urlFor(recipe.poster).width(800).url()} 800w`,
    `${urlFor(recipe.poster).width(1200).url()} 1200w`,
  ].join(', ');

  return html`
    <style>
      header {
        display: grid;
        box-shadow: var(--shadow-neu-s);
        border-radius: 2rem;
        overflow: hidden;
        margin-block-end: 2rem;
      }

      header div:first-child {
        padding: 1rem 2rem;
      }
      header div:has(img) img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .content {
        display: grid;
        gap: 2rem;
      }

      @media (width >= 600px) {
        header {
          grid-template-columns: 0.4fr 0.6fr;
        }
        .content {
          grid-template-columns: 1.25fr 3fr;
        }
      }

      aside {
        padding: 0 1rem 2rem;
        border-radius: 1rem;
        box-shadow: var(--shadow-neu-s);
      }

      aside ul {
        list-style: none;
        margin: 0;
        padding: 0;
        gap: 0.25rem;
        display: flex;
        flex-direction: column;
      }
      aside ul li {
        padding: 0.5rem;
        background: var(--shadow-neu-hl);
        border-bottom: 1px solid var(--shadow-neu-ds);
        border-radius: 3px;
      }

      .callout {
        border-radius: 3px;
        padding: 0.5rem 1rem;
        border-bottom: 1px solid var(--shadow-neu-ds);
      }

      .callout.info {
        background-color: var(--cornflower-blue);
      }

      .callout.warning {
        background-color: var(--dusty-yellow);
      }

      .instruction {
        display: flex;
        padding: 0.5rem;
        background: var(--shadow-neu-hl);
        border-bottom: 1px solid var(--shadow-neu-ds);
        border-radius: 2px;
        gap: 0.5rem;
        margin-bottom: 1rem;
      }

      .instruction + .callout:not(:last-child) {
        margin-block-end: 1rem;
      }

      .instruction :checked + * {
        text-decoration: line-through;
      }

      .categories {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        gap: 1rem;
      }

      .category {
        display: block;
        border-radius: 0.5rem;
        box-shadow: var(--shadow-neu-s);
        padding: 0.5rem 1rem;
      }
    </style>
    <article>
      <header>
        <div>
          <h1>${recipe.title}</h1>
          ${introductionHtml}
          <ul class="categories">
            ${recipe.categories.map((x) => `<li class="category">${x}</li>`).join('')}
          </ul>
        </div>
        <div>
          <img
            src="${urlFor(recipe.poster).width(600).url()}"
            srcset="${posterSrcSet}"
            sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
            alt="${recipe.poster.caption}"
          />
        </div>
      </header>
      <div class="content">
        <aside>
          <h2>Ingredients</h2>
          <ul>
            ${recipe.ingredients
              .map((i) => `<li>${i.measure} ${i.unit || ''} ${i.name.toLowerCase()}</li>`)
              .join('')}
          </ul>
        </aside>
        <div>
          <h2>Instructions</h2>
          ${instructionsHtml}
        </div>
      </div>
    </article>
  `;
}
