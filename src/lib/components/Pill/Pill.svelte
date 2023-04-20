<script>
  export let category;
  export let inverted = "";
</script>

{#if inverted}
  <div
    class="pill border border-white rounded-3xl text-min uppercase py-0 px-3"
  >
    {category}
  </div>
{/if}

{#if !inverted}
  <div
    class="pill border border-secondarycolor rounded-3xl text-min uppercase py-0 px-3 text-black"
  >
    {category}
  </div>
{/if}

<style>
  .pill {
    padding: 1px 11px;
  }
</style>
