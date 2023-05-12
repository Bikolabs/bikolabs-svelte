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
    <div class="container pt-40 pb-40 flex justify-start">
      <div class="w-[570px]">
        <p class="text-4xl font-secondary text-tertiarycolor font-bold">
          Nuestra colección de <span class="text-black">intervenciones</span> sobre la tecnología
        </p>
      </div>
    </div>
    <Colections {data} />
  </div>
</section>
<Medios />
<AboutUs />
<Footer />
