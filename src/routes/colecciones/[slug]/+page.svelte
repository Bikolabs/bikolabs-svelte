<script>
  export let data;
  import { convertDateToString } from "$lib/utils.js";
  import { fade } from "svelte/transition";
  import Link from "$lib/components/Link/link.svelte";
</script>

<div class="m-5">
  <Link title="Ir a la home" link="/" />
</div>

<div class="container coleccion-post">
  <article
    in:fade={{ duration: 500 }}
    out:fade={{ duration: 0 }}
    class="mx-40 py-10"
  >
    <!-- Title, subtitle, fecha, categoria... -->
    <div class="mb-10">
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
    <div>
      <p><svelte:component this={data.content} /></p>
    </div>
    <!-- -->
  </article>
</div>
