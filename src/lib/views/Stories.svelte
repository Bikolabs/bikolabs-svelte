<script>
  export let data;
  import Teaser from "$lib/components/Teaser/Teaser.svelte";
</script>

<div class="bg-secondarycolor w-full py-20 pb-0">
  <div class="container">
    <section class="py-10 text-white">
      {#each data.recentPosts as stories, i}
        {#if stories.tags == "Story"}
          {#if i == 0}
            <!-- <a href={`/colecciones/${stories.slug}`}>
              <h3 class="text-3xl mb-5">{stories.title}</h3>
            </a> -->
            <Teaser
              title="¿Cómo medir si un algoritmo acierta cuando toma una decisión automatizada?"
              description="Son varias las medidas con las que se mide el acierto algorítmico. Comprendemos las más usadas con un ejemplo real: RisCanvi."
              imagesrc="/images/square.png"
              linktitle="radiografía de la Story"
              link="/home"
            />
          {/if}
          {#if i > 0}
            <a href={`/colecciones/${stories.slug}`}>
              <p>{stories.title}</p>
            </a>
          {/if}
        {/if}
      {/each}
    </section>
  </div>
</div>
