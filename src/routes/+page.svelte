<script>
  import { onMount } from "svelte";
  import { MetaTags } from "svelte-meta-tags";

  import Hero from "$lib/components/Hero/Hero.svelte";
  import Stories from "$lib/views/Stories.svelte";
  import Colections from "$lib/views/Colections.svelte";
  import Footer from "$lib/components/Footer/Footer.svelte";
  import Medios from "$lib/components/Medios/Medios.svelte";
  import Canvas from "$lib/components/Canvas/Canvas.svelte";

  export let data;

  let glitch = false;
  let show = false;
  let toogle = false;

  function toggle() {
    glitch = !glitch;
    window.document.body.classList.toggle("glitch");
  }

  function toggleMode() {
    show = !show;
    window.document.body.classList.toggle("dark");
  }

  function checkDarkMode() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      window.document.body.classList.add("dark");
    } else {
      window.document.body.classList.remove("dark");
    }
  }

  onMount(checkDarkMode);
</script>

<MetaTags
  title="Bikolabs"
  titleTemplate="%s | Home"
  description="Bikolabs, el estudio (de intervención) de Biko"
  canonical="/"
  openGraph={{
    url: "https://www.url.ie/a",
    title: "Bikolabs, el estudio (de intervención) de Biko",
    description: "Investigamos, intervenimos y divulgamos sobre la interacción entre personas y tecnología",
    images: [
      {
        url: "/images/web/redes/home.png",
        alt: "Bikolabs",
      },
    ],
    site_name: "Bikolabs",
    type: "article",
  }}
  twitter={{
    // handle: '@handle',
    site: "@biko2",
    cardType: "summary_large_image",
    title: "Bikolabs",
    description: "Investigamos, intervenimos y divulgamos sobre la interacción entre personas y tecnología.",
    image: "/images/web/redes/home.png",
    imageAlt: "Bikolabs",
  }}
/>
<!-- svelte-ignore a11y-click-events-have-key-events -->

{#if glitch}
  <div class="bg-white w-full h-screen">
    <Canvas patch="glich" width="960px" height="1500px" />
  </div>
{/if}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="text-xl flex position absolute top-[0px] right-[20px]">
  {#if glitch}
    <div class="flex flex-row justify-center align-center">
      <div class="flex items-center vibrate-1"><input type="checkbox" class="toggle toggle-sm" bind:checked={toogle} on:change={toggleMode} /></div>
    </div>
    <div class="p-2 cursor-pointer vibrate-1">☠️</div>
  {:else}
    <div class="flex flex-row justify-center align-center">
      <div class="flex items-center"><input type="checkbox" class="toggle toggle-sm" bind:checked={toogle} on:change={toggleMode} /></div>
    </div>
    {#if !show}
      <div class="py-2 pl-1 mr-3 cursor-pointer" on:click={toggleMode}>🌙</div>
    {:else}
      <div class="py-2 pl-1 mr-3 cursor-pointer" on:click={toggleMode}>🌞</div>
    {/if}
    <div class="p-2 cursor-pointer" on:click={toggle}>☠️</div>
  {/if}
</div>
<section>
  <Hero />
  <Stories />
  <div id="colecciones" class="w-full">
    <div class="container pt-40 pb-40 flex justify-start">
      <div class="w-[570px]">
        <p class="text-5xl font-secondary text-tertiarycolor dark:text-white font-bold">
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

  :global(body.dark) {
    background-color: #000000;
    color: white;
    transition: all ease-in-out 1s;
  }

  :global(body) {
    transition: all ease-in-out 1s;
  }

  :global(body.glitch) {
    /* cursor: url("images/G8X.gif"), progress; */
    cursor: zoom-in;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .vibrate-1 {
    -webkit-animation: vibrate-1 0.3s cubic-bezier(0.6, 0.04, 0.98, 0.335) infinite reverse backwards;
    animation: vibrate-1 0.3s cubic-bezier(0.6, 0.04, 0.98, 0.335) infinite reverse backwards;
  }

  @-webkit-keyframes vibrate-1 {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
    20% {
      -webkit-transform: translate(-2px, 2px);
      transform: translate(-2px, 2px);
    }
    40% {
      -webkit-transform: translate(-2px, -2px);
      transform: translate(-2px, -2px);
    }
    60% {
      -webkit-transform: translate(2px, 2px);
      transform: translate(2px, 2px);
    }
    80% {
      -webkit-transform: translate(2px, -2px);
      transform: translate(2px, -2px);
    }
    100% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }
  @keyframes vibrate-1 {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
    20% {
      -webkit-transform: translate(-32px, 122px);
      transform: translate(-143px, 22px);
    }
    40% {
      -webkit-transform: translate(-22px, -2px);
      transform: translate(-2px, -2px);
    }
    60% {
      -webkit-transform: translate(2px, 2px);
      transform: translate(2px, 2px);
    }
    80% {
      -webkit-transform: translate(2px, -2px);
      transform: translate(2px, -2px);
    }
    100% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }
</style>
