<script>
  import TeaserList from "$lib/components/TeaserList/TeaserList.svelte";

  export let data;
</script>

<div class="w-full py-20 pb-0">
  <div class="container">
    <section class="py-10 text-white">
      {#each data.recentPosts as post, i}
        {#if i > 0}
          <TeaserList
            title={post.title}
            description={post.subtitle}
            imagesrc="/images/list-strega.jpg"
            category={post.tags[0]}
            linktext={post.titlelink}
            link={`/colecciones/${post.slug}`}
          />
        {/if}
      {/each}
    </section>
  </div>
</div>
