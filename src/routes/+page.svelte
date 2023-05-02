<script>
  import Hero from "$lib/components/Hero/Hero.svelte";
  import Stories from "$lib/views/Stories.svelte";
  import Colections from "$lib/views/Colections.svelte";
  import Footer from "$lib/components/Footer/Footer.svelte";
  import AboutUs from "$lib/components/AboutUs/AboutUs.svelte";
  import Medios from "$lib/components/Medios/Medios.svelte";

  export let data;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Bikolabs - " />
</svelte:head>
<section>
  <Hero />
  <Stories {data} />
  <div class="w-full">
    <div class="container pt-32 tablet:pt-40 flex justify-end">
      <div class="w-[670px]">
        <p
          class="text-5xl font-primary text-tertiarycolor font-bold text-right"
        >
          Pre-cognitions son las <span class="text-secondarycolor fancy">
            intervenciones</span
          > que nos permiten adelantarnos al futuro.
        </p>
      </div>
    </div>
    <Colections {data} />
  </div>
</section>

<AboutUs />
<Medios />

<!-- new -->
<Footer />
