export default function SCCategories({ html, state: { store } }) {
  const { pageModel } = store;
  const { categories } = pageModel;

  return html`
    <style>
      :host {
        margin: 0;
      }

      fieldset {
        display: flex;
        gap: 1rem;
        margin: 0;
        padding: 0;
        border: none;
      }

      label {
        display: block;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        box-shadow: var(--shadow-neu-s);
      }

      input[type='radio'] {
        display: none;
      }

      label:has(:checked) {
        box-shadow: var(--shadow-neu-s-inset);
      }
    </style>
    <fieldset>
      ${categories
        .map(
          (x) =>
            `<label>
              <input
                type="radio"
                name="category"
                value="${x.name}"
                ${pageModel.selectedCategory === x.name ? 'checked' : ''}
              />
              ${x.name}
            </label>`
        )
        .join('')}
    </fieldset>
  `;
}
