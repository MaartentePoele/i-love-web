<section>
  <h3>Projects</h3>
  <article>
    <div class="project-preview"></div>
    <h4>Project title</h4>
    <p>Description made a little bit longer so that it spans multiple lines.</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
    <div class="project-link-wrapper">
      <a href="">
        <svg class="website-icon">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
          <path d="M2 12h20"></path>
        </svg>
        Website
      </a>
      <a href="">
        <svg class="github-icon">
          <path
            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
          >
          </path>
          <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
        Github
      </a>
    </div>
  </article>
</section>

<style>
  section {
    display: grid;
    gap: 0.5rem;
    padding: 1.5rem 0;

    h3 {
      font-size: var(--font-l);
      color: var(--content);
      margin-left: 1rem;
    }

    article {
      border-radius: 0.5rem;
      display: grid;
      grid-template-columns: 1rem 1fr 1rem;
      row-gap: 0.5rem;
      cursor: pointer;
      transition: var(--transition-fast);

      /* Puts everything in the center column */
      & > * {
        grid-column: 2;
      }

      .project-preview {
        aspect-ratio: 16 / 9;
        background-color: var(--bg-light);
        grid-column: 1 / -1;
        /* border: 1px solid red; */
      }

      h4 {
        color: var(--content);
        font-size: var(--font-m);
      }

      ul {
        display: flex;
        gap: 0.5rem;
        list-style: none;

        li {
          background-color: var(--bg-light);
          border-radius: 99rem;
          padding: 0.25rem 0.5rem;
          font-size: var(--font-xs);
        }
      }

      .project-link-wrapper {
        display: flex;
        gap: 1rem;

        a {
          display: flex;
          gap: 0.5rem;
          text-decoration: none;
          color: var(--content);
        }
      }
    }
  }
</style>
