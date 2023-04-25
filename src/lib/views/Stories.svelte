<script>
  import Teaser from "$lib/components/Teaser/Teaser.svelte";
  import TeaserList from "$lib/components/TeaserList/TeaserList.svelte";

  export let data;
</script>

<div class="bg-secondarycolor aaa w-full py-20 pb-0">
        <div class="container pt-32 tablet:py-40 flex justify-start">
          <h1 class="text-5xl tablet:text-5xl font-primary desktop:w-[850px] desktop:leading-[67px] text-white"><span class="font-bold">Stories</span> <span class=""> son el presente y futura entre personas y tecnología</span></h1>
      </div>
  <div class="container">
    <section class="py-10 text-white dektop:pr-[200px]">
      <Teaser
        title="¿Cómo medir si un algoritmo acierta cuando toma una decisión automatizada?"
        description="Son varias las medidas con las que se mide el acierto algorítmico. Comprendemos las más usadas con un ejemplo real: RisCanvi."
        imagesrc="/images/square.png"
        linktitle="radiografía de la Story"
        link="/home"
      />
      {#each data.recentPosts as stories, i}
        {#if stories.tags == "Story" && i > 0}
          <TeaserList
            inverted
            title={stories.title}
            description={stories.subtitle}
            imagesrc={stories.image}
            category={stories.tags[0]}
            link={`/colecciones/${stories.slug}`}
          />
        {/if}
      {/each}
    </section>
  </div>
</div>
