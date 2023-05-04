<script>
  import TeaserList from "$lib/components/TeaserList/TeaserList.svelte";
  import Buttom from "$lib/components/Button/Button.svelte";
  import ArrowLink from "$lib/icons/ArrowLink.svelte";
  import BoopAction from "./BoopAction.svelte";
  import { linear } from "svelte/easing";
  import { fade, fly, blur } from "svelte/transition";

  let options = { duration: 2000, easing: linear };
  let btnoptions = { duration: 1000, easing: linear };

  export let y;
</script>

<svelte:window bind:scrollY={y} />

<div class="article-storybg w-full py-20 pb-0">
  <div class="container py-32 tablet:py-40 flex justify-end">
    {#if y > 266}
      <div
        class="w-[670px] text-white"
        transition:fly={{ ...options, opacity: 0.8, y: 300 }}
      >
        <p class="text-5xl font-secondary text-white font-bold text-right mb-4">
          Las historias complejas necesitan más que palabras.
        </p>
        <p class="text-right text-xl">
          <span class="font-bold text-3xl fancy">Stories</span>
          <span>
            es nuestra respuesta a esas historias que exigen una visualización
            poderosa y un proceso de investigación riguroso para poder ser
            divulgadas.
          </span>
        </p>
      </div>
    {/if}
  </div>
</div>
<div class="fixed top-0 left-0 text-red text-xl">
  <p class="text-secondaycolor">{y}</p>
</div>

<div class="relative w-full h-screen">
  <video
    class="absolute top-0 left-0 w-full h-full object-cover"
    autoplay
    muted
    loop
  >
    <source src="videos/riscanvi.mp4" type="video/mp4" />
  </video>
  <div
    class="absolute top-0 left-0 w-full h-full bg-secondarycolor opacity-80"
  />
  {#if y > 870}
    <div class="absolute top-0 left-0 w-full h-full">
      <div
        class="container relative pt-32 tablet:py-40 flex flex-col justify-start text-white"
        transition:fly={{ ...options, opacity: 0.8, y: 100 }}
      >
        <p
          class="desktop:w-[840px] text-5xl font-secondary font-bold desktop:leading-[50px] mb-10"
        >
          ¿Cómo medir si un algoritmo acierta cuando toma una decisión
          automatizada?
        </p>

        <div
          class="mb-10 text-2xl tablet:text-2xl font-primary desktop:w-[850px] text-white"
        >
          <p>
            Son varias las medidas con las que se mide el acierto algorítmico.
            Comprendemos las más usadas con un ejemplo real: <span
              class="font-bold">RisCanvi</span
            >
          </p>
        </div>

        <div
          class="flex justify-start mt-6 uppercase text-min desktop:w-[850px]"
        >
          <BoopAction boopParams={{ scale: 1.2, timing: 200 }}>
            <a
              class="uppercase flex gap-2 hover:text-primarycolor transition"
              href="/colecciones/riscanvi"
            >
              Radiografía de la story
              <ArrowLink
                styles="fill-white hover:fill-primarycolor transition"
              />
            </a>
          </BoopAction>
          {#if y > 1280}
            <div
              class="btn-position hidden desktop:flex justify-end"
              transition:blur={btnoptions}
            >
              <Buttom
                type="rounded"
                text="Entrar"
                link="http://riscanvi.bikolabs.io"
                styles="hover:fill-white"
              />
            </div>
          {/if}
        </div>
      </div>
    </div>
  {/if}
</div>

<div class="article-storybg-inverse w-full py-5">
  <div class="container">
    <section id="stories" class="py-10 text-white w-full mx-auto">
      {#if y > 1500}
        <div transition:fly={{ ...options, y: -25 }}>
          <TeaserList
            inverted
            title="Empatizando con las IAs"
            description="Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles."
            imagesrc="images/empatizando-ias.jpeg"
            category="stories"
            link="colecciones/empatizando-con-ias"
          />
        </div>
      {/if}
    </section>
  </div>
</div>

<style>
  .btn-position {
    position: absolute;
    right: 100px;
  }
</style>
