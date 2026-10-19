<section class="tech-stack">
  <h3 class="section-title">Tech stack</h3>
  <ul>
    <li>
      <img src="/assets/logos/html.png" alt="HTML logo" />
      HTML
    </li>
    <li>
      <img src="./assets/logos/css.png" alt="CSS logo" />
      CSS
    </li>
    <li>
      <img src="assets/logos/javascript.png" alt="JavaScript logo" />
      JavaScript
    </li>
    <li>
      <img src="/assets/logos/shopify.png" alt="Shopify logo" />
      Liquid
    </li>
    <li>
      <img src="/assets/logos/nodejs.png" alt="NodeJS logo" />
      NodeJS
    </li>
    <li>
      <div class="express-logo"></div>
      Express
    </li>
  </ul>
</section>

<style>
  /* TECH STACK */
  .tech-stack {
    display: grid;
    gap: 0.5rem;

    ul {
      display: grid;
      gap: 0.5rem;
      margin: 0;
      padding: 0;

      li {
        border-radius: 0.5rem;
        background-color: var(--bg);
        padding: 0.5rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        color: var(--content);
        font-weight: bold;

        img {
          width: 3rem;
          height: 3rem;
          border-radius: 0.25rem;
        }

        .express-logo {
          width: 3rem;
          height: 3rem;
          border-radius: 0.25rem;
          background-size: contain;
          background-image: light-dark(
            url("/assets/logos/express-black.png"),
            url("/assets/logos/express-white.png")
          );
        }
      }
    }
  }
</style>
