export default function SCFormFilters({ html }) {
  return html`
    <form action="/recipes" method="get">
      <sc-categories></sc-categories>
      <sc-sorting></sc-sorting>
    </form>
    <script type="module">
      class SCFormFilter extends HTMLElement {
        constructor() {
          super();
          console.log('SCFormFilters mounted');
          this.form = this.querySelector('form');
        }
        connectedCallback() {
          this.form.addEventListener('change', (e) => {
            console.log(e);
            e.preventDefault();
            this.form.submit();
          });
        }
      }

      customElements.define('sc-form-filter', SCFormFilter);
    </script>
  `;
}
