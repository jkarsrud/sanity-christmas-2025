export default function Nav({ html }) {
  return html`
    <style>
      :host {
        border-radius: 1rem;
        display: block;
        padding: 1rem 2rem;
        box-shadow: var(--shadow-neu-s);
        background: var(--bg);
        border-radius: 0.5rem;
      }

      ul {
        list-style: none;
        display: flex;
        gap: 2rem;
        margin: 0;
        padding: 0;
      }

      ul a {
        color: inherit;
        font-weight: 700;
        text-shadow: var(--shadow-neu-s);
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: border-color 0.25s ease;
      }

      ul a:hover {
        text-decoration: none;
        border-color: currentColor;
      }
    </style>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/recipes">Recipes</a></li>
      </ul>
    </nav>
  `;
}
