export default function SCCategories({ html, state: { store } }) {
  const { pageModel } = store;
  const { categories } = pageModel;

  return html`
    <style>
      :host {
        margin: 0;
      }
      ul {
        list-style: none;
        display: flex;
        gap: 1rem;
        margin: 0;
        padding: 0;
      }

      a {
        display: block;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        box-shadow: var(--shadow-neu-s);
      }
      a.selected {
        box-shadow: var(--shadow-neu-s-inset);
      }
    </style>
    <ul>
      ${categories
        .map(
          (x) =>
            `<li>
              <a href="?category=${x.name}" class="${pageModel.selectedCategory === x.name ? 'selected' : ''}">${x.name}</a>
            </li>`
        )
        .join('')}
    </ul>
  `;
}
