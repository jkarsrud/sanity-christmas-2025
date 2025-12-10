export default function SCSorting({ html, state }) {
  const { store } = state;

  const { pageModel } = store;
  console.log(pageModel);
  return html`
    <select name="sort">
      <option value="title-asc" ${pageModel.selectedSort === 'title-asc' ? 'selected' : ''}>
        Title ascending
      </option>
      <option value="title-desc" ${pageModel.selectedSort === 'title-desc' ? 'selected' : ''}>
        Title descending
      </option>
      <option value="duration-asc" ${pageModel.selectedSort === 'duration-asc' ? 'selected' : ''}>
        Duration short to long
      </option>
      <option value="duration-desc" ${pageModel.selectedSort === 'duration-desc' ? 'selected' : ''}>
        Duration long to short
      </option>
      <option value="date-asc" ${pageModel.selectedSort === 'date-asc' ? 'selected' : ''}>
        Created date ascending
      </option>
      <option value="date-desc" ${pageModel.selectedSort === 'date-desc' ? 'selected' : ''}>
        Created date descending
      </option>
    </select>
  `;
}
