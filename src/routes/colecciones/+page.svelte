<script>
  import { goto } from "$app/navigation";
  import { convertDateToString } from "$lib/utils.js";
  export let data;
</script>

<div class="container">
  <section class="mx-40 py-10">
    {#each data.sortedPosts as post}
      <div class="mb-4 py-4 border-b border-b-gray-300" on:click={goto(`/colecciones/${post.slug}`)} on:keydown={goto(`colecciones/${post.slug}`)}>
        <p class="text-xs mb-2">{convertDateToString(post.date)}</p>
        <a class="text-2xl mb-3 text-pink-600 hover:text-gray-500" href={`/colecciones/${post.slug}`}>{post.title}</a>
        {#if post.image}
          <img src={`${post.image}`} alt="" />
        {:else}
          <p class="mb-2">{post.description}</p>
        {/if}
        <div class="text-sm">
          {#each post.tags as tag}
            <p class="tag">#{tag}</p>
          {/each}
        </div>
      </div>
    {/each}
    <div class="py-10"><a class="text-pink-500" href="/">&larr; Home</a></div>
  </section>
</div>

<style>
  section {
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  }
</style>
