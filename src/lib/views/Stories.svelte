<script>
  export let data;
</script>

<div class="bg-secondarycolor w-full h-screen">
  <div class="container">
    <section class="py-10 text-white">
      {#each data.recentPosts as stories, i}
        {#if stories.tags == "Story"}
          {#if i == 0}
            <a href={`/colecciones/${stories.slug}`}>
              <h3 class="text-3xl mb-5">{stories.title}</h3>
            </a>
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
