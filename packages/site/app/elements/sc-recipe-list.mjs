import { toHTML } from '@portabletext/to-html';

export default function SCRecipeList({ html, state: { store } }) {
  const { recipes = [] } = store;

  return html`
    <style>
      h2 {
        margin-top: 0;
      }

      .recipes {
        display: grid;
        gap: 3rem;
      }

      .card {
        box-shadow: var(--shadow-neu-s);
        border-radius: 1rem;
        padding: 20px;
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
    <div class="recipes">
      ${recipes
        .map((recipe) => {
          const introductionHtml = toHTML(recipe.introduction);
          const url = `recipes/${recipe.slug.current}`;

          return `
        <section class="card">
          <header>
          <picture></picture>
            <h2><a href="${url}">${recipe.title}</a></h2>
          </header>
          <article>${introductionHtml}</article>
        </section>
      `;
        })
        .join('')}
    </div>
  `;
}
