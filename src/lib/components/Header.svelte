<script>
  import ThemeSwitch from "./ThemeSwitch.svelte";
</script>

<header class="site-header">
  <nav>
    <a href="">home</a>
    <a href="">about</a>
    <a href="">projects</a>
    <a href="">garden</a>
  </nav>

  <ThemeSwitch />
</header>

<style>
  header {
    display: flex;
    align-items: center;
    
    nav {
      display: flex;
      gap: 1rem;

      a {
        color: var(--content-muted);
        text-decoration: none;
        border-radius: 0.5rem;
        transition: var(--transition-fast);

        &:hover {
          color: var(--content);
        }
      }
    }
  }
</style>
