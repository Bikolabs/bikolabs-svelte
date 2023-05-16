<script>
  import Hero from "$lib/components/Hero/Hero.svelte";
  import Stories from "$lib/views/Stories.svelte";
  import Colections from "$lib/views/Colections.svelte";
  import Footer from "$lib/components/Footer/Footer.svelte";
  import Medios from "$lib/components/Medios/Medios.svelte";

  export let data;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Bikolabs - " />
</svelte:head>
<section>
  <Hero />
  <Stories />
  <div class="w-full">
    <div class="container pt-40 pb-40 flex justify-start">
      <div class="w-[570px]">
        <p class="text-5xl font-secondary text-tertiarycolor font-bold">
          Nuestra colección de <span class="text-black animate">intervenciones</span> sobre la tecnología
        </p>
      </div>
    </div>
    <Colections {data} />
  </div>
</section>
<Medios />

<Footer />

<style>
  .animate {
    background-image: linear-gradient(-250deg, #e2386b 9%, #e2386b 19%, #030304 67%, #eb5482 90%);
    background-size: auto auto;
    background-clip: border-box;
    background-size: 1000% auto;
    color: #fff;
    background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 12s linear infinite;
    display: inline-block;
  }

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
</style>
