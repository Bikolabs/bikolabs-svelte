<script>
  export let data;
  import { convertYearToString, getDoubleLine } from "$lib/utils.js";
  import { fade } from "svelte/transition";
  import Link from "$lib/components/Link/link.svelte";
</script>

<div class="m-5">
  <Link title="Ir a la home" link="/" />
</div>

<div class="container coleccion-post">
  <article in:fade={{ duration: 500 }} out:fade={{ duration: 0 }}>
    <div>
      <div
        class="flex flex-col desktop:flex-row justify-between mb-20 desktop:mb-40 desktop:pl-16"
      >
        <div class="w-4/6">
          <h1 class="text-5xl tablet:text-6xl font-primary font-semibold">
            {@html getDoubleLine(data.title)}
          </h1>
        </div>
        {#if data.titlelink}
          <div
            class="mt-5 desktop:mt-0 desktop:w-1/6 w-full flex items-center desktop:justify-end"
          >
            <Link title={data.titlelink} link={data.link} />
          </div>
        {/if}
      </div>
    </div>
    <div class="flex flex-col desktop:flex-row justify-between desktop:pl-16">
      <div class="desktop:w-1/6 flex flex-col">
        <p class="uppercase mb-1 text-sm font-light">Fecha lanzamiento</p>
        <p class="font-primary font-bold">{convertYearToString(data.date)}</p>
        <p class="uppercase mt-5 mb-1 text-sm font-light">Categoria</p>
        {#each data.tags as tag}
          <p class="font-primary font-bold mb-5">{tag}</p>
        {/each}
      </div>

      <div class="desktop:w-4/6">
        <img src={data.image} alt={data.alt} />
      </div>
    </div>
    <div class="desktop:pl-16 desktop:w-3/6 w-full mt-5 tablet:mt-20 mb-12">
      <h2 class="text-2xl font-light">{data.subtitle}</h2>
    </div>

    <!-- Texto MD -->
    <div>
      <div class="font-light desktop:pl-16 coleccion-post-text">
        <svelte:component this={data.content} />
      </div>
    </div>
    <!-- -->
  </article>
</div>
