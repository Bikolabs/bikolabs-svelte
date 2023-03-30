<script>
  export let data;
  import { convertDateToString } from "$lib/utils.js";
  import { fade } from "svelte/transition";
  console.log("data:", data.materials);
</script>

<div class="container">
  <article
    in:fade={{ duration: 500 }}
    out:fade={{ duration: 0 }}
    class="mx-40 py-10"
  >
    <!-- Title, subtitle, fecha, cataegoria... -->
    <div>
      <p>{convertDateToString(data.date)}</p>
      <h1 class="bold text-4xl mb-5">{data.title}</h1>
      <div><img src="https://picsum.photos/1200/600" alt={data.alt} /></div>
      <p>
        {#each data.tags as tag}
          {tag}
        {/each}
      </p>
      <p>{data.titlelink} {data.link}</p>
    </div>
    <!-- -->

    <!-- Texto MD -->
    <div class="super-text">
      <p><svelte:component this={data.content} /></p>
    </div>
    <!-- -->

    <!-- Materiales -->
    <div class="my-9 py-9">
      <h2 class="bold text-2xl mb-5">Materiales</h2>
      {#each data.materials as material}
        <p>{material.category}</p>
        <p><a href={material.link}>{material.titlelink}</a></p>
      {/each}
    </div>
    <!-- -->
  </article>
</div>
