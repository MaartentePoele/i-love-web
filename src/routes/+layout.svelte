<script>
  import "#lib/assets/styles/stylesheet.css";
  import favicon from "#lib/assets/favicon.svg";
  import Header from "#lib/components/Header.svelte";
  import Footer from "#lib/components/Footer.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Portfolio - Maarten te Poele</title>
</svelte:head>

<Header />
{@render children()}
<Footer />
