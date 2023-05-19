<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import Nav from "$lib/components/Nav/Nav.svelte";
  import ArrowLink from "$lib/icons/ArrowLink.svelte";
  import Mail from "$lib/icons/Mail.svelte";

  let show = false;
  let toggleDiv;

  onMount(() => {
    toggleDiv = () => {
      show = !show;
    };
  });
</script>

<div class="w-100 flex flex-col">
  <Nav />
  <div class="container mb-20 text-secondarycolor dark:text-white bg-decoration px-5 desktop:px-0">
    <div class="mb-10 font-secondary font-bold text-5xl desktop:leading-[57px] desktop:ml-64">
      <p class="mb-10 desktop:mb-5">Investigamos, intervenimos y divulgamos <br /> sobre la interacción entre personas y <br />tecnología.</p>
      <p classs="mb-10 desktop:mb-5">Y lo hacemos mediante <span class="animate ccc">stories</span> y nuestra <br /> colección de intervenciones <br /> tecnológicas.</p>
    </div>
    <p class="mb-5 text-3xl font-secondary pt-10 text-right desktop:leading-[45px] break-line">
      Las stories son nuestra respuesta a esas narraciones que exigen <br /> una
      <span class="underline decoration-primarycolor">visualización poderosa</span> y un proceso de <span class="underline decoration-primarycolor">investigación</span> <br /> <span class="underline decoration-primarycolor">riguroso</span> para poder ser divulgadas. Porque a veces las historias <br /> complejas necesitan más que palabras para ser contadas.
    </p>
    <div class="mt-10 flex justify-end icon-action">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="cursor-style flex gap-5 uppercase font-bold hover:fill-primarycolor hover:text-primarycolor allhover transition-all" on:click={toggleDiv}>
        {#if !show}
          Escríbenos si tienes alguna historia que divulgar <ArrowLink styles="fill-secondarycolor" />
        {/if}
        {#if show}
          <div class="cursor-context-menu" in:fade={{ duration: 800 }}>
            <div class="flex gap-2 items-center">
              <Mail styles="fill-secondarycolor mb-1" size="24" />
              <p
                class="
         font-primary text-secondarycolor"
              >
                <span class="font-bold lowercase hover:text-primarycolor">bikolabs@biko2.com</span>
              </p>
            </div>
          </div>
        {/if}
      </div>
    </div>
    <p class="mb-5" />
  </div>
</div>

<style type="text/scss">
  .cursor-style {
    cursor: pointer;
  }
  .bg-decoration {
    background-image: url("/images/web/bg-arrow-up.svg");
    background-repeat: no-repeat;
    background-position: 75% 38%;
    @media screen and (max-width: 1280px) {
      background: none;
    }
  }

  .animate {
    background-image: linear-gradient(-250deg, #e84072 10%, #eb5482 29%, #3e3e54 67%, #eb5482 100%);
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
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

  .ccc {
    background-image: src("");
  }
</style>
