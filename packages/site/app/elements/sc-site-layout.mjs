export default function SCSiteLayout({ html }) {
  return html`
    <header>
      <sc-nav></sc-nav>
    </header>
    <main><slot></slot></main>
    <footer></footer>
  `;
}
