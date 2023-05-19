<script>
  export let category;
  export let inverted = "";
</script>

{#if inverted}
  <div class="pill border border-white rounded-3xl text-min uppercase py-0 px-3">
    {category}
  </div>
{/if}

{#if !inverted}
  <div class="pill border border-secondarycolor dark:border-white rounded-3xl text-min uppercase py-0 px-3 text-black dark:text-white">
    {category}
  </div>
{/if}

<style>
  .pill {
    padding: 1px 11px;
  }
</style>
