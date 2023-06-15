<script>
  import TeaserList from "$lib/components/TeaserList/TeaserList.svelte";

  import { removeTag } from "$lib/utils.js";
  export let data;
</script>

<div class="w-full pb-20">
  <div class="container">
    <section class="w-full desktop:w-[1000px] mx-auto text-white">
      {#each data.recentPosts as post}
        {#if post.tags[0] !== "Story"}
          <TeaserList title={removeTag(post.title)} description={post.subtitle} imagesrc={post.image} category={post.tags[0]} linktitle={post.titlelink} link={`/collections/${post.slug}`} />
        {/if}
      {/each}
    </section>
  </div>
</div>
