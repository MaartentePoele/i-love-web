<script>
  import ThemeSwitch from "#lib/components/ThemeSwitch.svelte";
</script>

<header class="site-header">
  <nav>
    <a href="/">home</a>
    <a href="/about">about</a>
    <a href="/projects">projects</a>
    <a href="/garden">garden</a>
  </nav>

  <ThemeSwitch />
</header>

<style>
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
        background-color: var(--bg);
        padding: 0.25rem 0.5rem;

        &:hover {
          color: var(--content);
        }
      }
    }
  }
</style>
