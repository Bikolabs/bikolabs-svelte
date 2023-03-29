<script>
  export let src;
  export let alt;
  export let styles;
  export let caption;
</script>

<div class={styles}>
  {#if caption}
    <div class="flex flex-row border">
      <div><img {src} {alt} /></div>
      <div class="flex flex-col items-end">
        <p class="text-sm">{caption}</p>
      </div>
    </div>
  {:else}
    <img src={src} alt={alt} />
  {/if}
</div>
