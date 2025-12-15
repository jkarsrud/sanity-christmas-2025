import { toHTML } from '@portabletext/to-html';

/** @type {import('@enhance/types').EnhanceElemFn} */
export default function FrontPage({ html, state }) {
  const { store } = state;
  const { page } = store;

  return html`
    ${page.modules
      .map((module) => {
        if (module._type === 'hero') {
          return html`
            <div class="hero">
              <h1>${module.title}</h1>
              ${toHTML(module.content)}
            </div>
          `;
        }
      })
      .join('')}
  `;
}
