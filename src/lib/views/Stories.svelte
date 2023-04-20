<script>
  import Teaser from "$lib/components/Teaser/Teaser.svelte";
  import TeaserList from "$lib/components/TeaserList/TeaserList.svelte";

  export let data;
  console.log(data.recentPosts);
</script>

<div class="bg-secondarycolor w-full py-20 pb-0">
  <div class="container">
    <section class="py-10 text-white dektop:pr-[200px]">
      {#each data.recentPosts as stories, i}
        {#if stories.tags == "Story"}
          {#if i == 0}
            <Teaser
              title="¿Cómo medir si un algoritmo acierta cuando toma una decisión automatizada?"
              description="Son varias las medidas con las que se mide el acierto algorítmico. Comprendemos las más usadas con un ejemplo real: RisCanvi."
              imagesrc="/images/square.png"
              linktitle="radiografía de la Story"
              link="/home"
            />
          {/if}
          {#if i > 0}
            <TeaserList
              inverted
              title={stories.title}
              description={stories.subtitle}
              imagesrc="/images/list-strega.jpg"
              category={stories.tags[0]}
              linktext={stories.titlelink}
              link={`/colecciones/${stories.slug}`}
            />
          {/if}
        {/if}
      {/each}
    </section>
  </div>
</div>
