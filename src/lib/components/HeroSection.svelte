<script>
  import profilePicture from "#lib/assets/images/profile-picture.jpg";
</script>

<section>
  <header>
    <img
      class="profile-picture"
      src={profilePicture}
      alt="Profielfoto van Maarten te Poele"
    />
    <h1>Maarten te Poele</h1>
    <h2>Frontend Developer</h2>
  </header>

  <p>
    I make RAPPE websites: Responsive, Accessible, Performant & Progressively
    Enhanced.
  </p>

  <nav>
    <a
      title="linkedin link"
      href="https://www.linkedin.com/in/maarten-te-poele-3a7a57332"
      target="_blank"
    >
      <svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        ><path
          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
        ></path><rect width="4" height="12" x="2" y="9"></rect><circle
          cx="4"
          cy="4"
          r="2"
        ></circle></svg
      >
      LinkedIn
    </a>
    <a title="github link" href="https://github.com/MaartentePoele">
      <svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        ><path
          d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
        ></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg
      >
      GitHub
    </a>
  </nav>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    container-type: inline-size;
    padding: 1.5rem 1rem;

    header {
      display: grid;
      grid-template-columns: max-content 1fr;

      grid-template-areas:
        "profile-picture name"
        "profile-picture job-title";

      @container (width > 281px) {
        column-gap: 1rem;
      }

      img {
        width: clamp(4rem, 20cqw, 8rem);
        aspect-ratio: 1;
        border-radius: 50%;
        grid-area: profile-picture;
        align-self: center;
      }

      h1 {
        font-size: var(--font-l);
        grid-area: name;
        color: var(--content);
        align-self: end;
      }

      h2 {
        font-size: var(--font-m);
        grid-area: job-title;
        align-self: start;
        font-weight: normal;
      }
    }

    nav {
      display: flex;
      align-items: center;
      gap: 1rem;

      a {
        color: var(--content-muted);
        text-decoration: none;
        display: flex;
        align-items: center;
        background-color: var(--bg);
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        gap: 0.5rem;

        &:hover {
          background-color: var(--bg-light);
        }

        svg {
          display: block;
        }
      }
    }
  }
</style>
