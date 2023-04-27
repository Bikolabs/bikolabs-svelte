<script>
  import TeaserList from "$lib/components/TeaserList/TeaserList.svelte";

  import { removeTag } from "$lib/utils.js";
  export let data;
</script>

<div id="colecciones" class="w-full py-20 pb-0">
  <div class="container">
    <section class="py-10 text-white">
      {#each data.recentPosts as post}
        {#if post.tags[0] !== "Story"}
          <TeaserList
            title={removeTag(post.title)}
            description={post.subtitle}
            imagesrc={post.image}
            category={post.tags[0]}
            linktext={post.titlelink}
            link={`/colecciones/${post.slug}`}
          />
        {/if}
      {/each}
    </section>
  </div>
</div>
