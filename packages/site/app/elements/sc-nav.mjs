export default function Nav({ html }) {
  return html`
    <style>
      :host {
        --nav-item-shadow: 8px 8px 16px #cccccc, -8px -8px 16px #f4f4f4;
        --nav-item-shadow-hover: -8px -8px 16px #cccccc, 8px 8px 16px #f4f4f4;

        border-radius: 1rem;

        display: block;
        padding: 1rem;
        box-shadow: var(--nav-item-shadow);
        background: #e0e0e0;
        border-radius: 5px;
      }
      ul {
        list-style: none;
        display: flex;
        gap: 1rem;
        margin: 0;
        padding: 0;
      }
      ul a {
        color: inherit;
        font-weight: 600;
        background: #e0e0e0;
        border-radius: 5px;
        text-decoration: none;
        padding: 0.5rem 1rem;
        transition: text-decoration;
      }

      ul a:hover {
        text-decoration: underline;
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
