<script>
  import Hero from "$lib/components/Hero/Hero.svelte";
  import Stories from "$lib/views/Stories.svelte";
  export let data;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte starter Kit" />
</svelte:head>
<section>
  <Hero />
  <Stories {data} />
</section>
