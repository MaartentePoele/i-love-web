<section>
  <h3 class="section-title">Tech stack</h3>
  <ul>
    <li>
      <div></div>
      HTML
    </li>
    <li>
      <div></div>
      CSS
    </li>
    <li>
      <div></div>
      JavaScript
    </li>
    <li>
      <div></div>
      Liquid
    </li>
    <li>
      <div></div>
      Svelte
    </li>
  </ul>
</section>

<style>
  section {
    display: grid;
    gap: 0.5rem;
    padding: 1.5rem 1rem;
    container-type: inline-size;

    h3 {
      color: var(--content);
      font-size: var(--font-l);
    }

    ul {
      display: grid;
      gap: 0.5rem;
      margin: 0;
      padding: 0;

      @container(width > 400px) {
        grid-template-columns: 1fr 1fr;
      }

      li {
        border-radius: 0.5rem;
        background-color: var(--bg);
        /* padding: 0.5rem; */
        display: flex;
        align-items: center;
        gap: 1rem;
        font-weight: bold;

        div {
          width: 3.5rem;
          aspect-ratio: 1;
          border-radius: 0.25rem;
          background-color: var(--bg-light);
        }
      }
    }
  }
</style>
