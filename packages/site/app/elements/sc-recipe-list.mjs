import { toHTML } from '@portabletext/to-html';
import { urlFor } from '../sanityImageUrl.mjs';

export default function SCRecipeList({ html, state: { store } }) {
  const { pageModel } = store;
  const { recipes } = pageModel;

  console.log({ store });

  return html`
    <style>
      h2 {
        margin-top: 0;
      }

      .categories {
        display: block;
        margin-block: 2rem;
      }

      .recipes {
        display: grid;
        gap: 3rem;
      }

      .card {
        box-shadow: var(--shadow-neu-s);
        border-radius: 1rem;
        overflow: hidden;
      }

      .card header img {
        width: 100%;
        height: 100%;
        object-fit: fit;
      }

      .card header h2 {
        margin-block-start: 1rem;
        margin-inline: 1rem;
      }

      .card article {
        padding-inline: 1rem;
      }

      @media (width >= 500px) {
        .recipes {
          grid-template-columns: 1fr 1fr;
        }
      }

      @media (width >= 700px) {
        .recipes {
          grid-template-columns: 1fr 1fr 1fr;
        }
      }
    </style>
    <h1>Recipes</h1>
    <sc-categories class="categories"></sc-categories>
    <div class="recipes">
      ${recipes
        .map((recipe) => {
          const introductionHtml = toHTML(recipe.introduction);
          const url = `/recipes/${recipe.slug.current}`;

          return `
            <section class="card">
              <header>
                <a href="${url}"
                  ><img
                    src="${urlFor(recipe.poster).width(300).height(300).url()}"
                    alt="${recipe.poster.caption}"
                  />
                  <h2>${recipe.title}</h2></a
                >
              </header>
              <article>${introductionHtml}</article>
            </section>
          `;
        })
        .join('')}
    </div>
  `;
}
