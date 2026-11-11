<script>
  import ThemeSwitch from "#lib/components/ThemeSwitch.svelte";
  import { page } from "$app/state";
</script>

<header class="site-header">
  <nav>
    <a href="/" class:active={page.url.pathname === "/"}>home</a>
    <a href="/about" class:active={page.url.pathname === "/about"}>about</a>
    <a href="/projects" class:active={page.url.pathname === "/projects"}>projects</a>
    <a href="/garden" class:active={page.url.pathname === "/garden"}>garden</a>
  </nav>

  <ThemeSwitch />
</header>

<style>
  .active {
    background-color: var(--bg);
    color: var(--content);

    &:hover {
      background-color: var(--bg-light);
    }
  }

  header {
    display: flex;
    align-items: center;

    nav {
      display: flex;
      flex-wrap: balance;
      /* gap: 1rem; */

      a {
        color: var(--content-muted);
        text-decoration: none;
        border-radius: 0.5rem;
        transition: var(--transition-fast);
        padding: 0.25rem 0.5rem;

        &:hover {
          background-color: var(--bg);
        }
      }
    }
  }
</style>
