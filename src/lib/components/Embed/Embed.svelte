<script>
  export let src;
  export let type = "";
  export let styles = "";
</script>

<div class={styles}>
  {#if type === "cables"}
    <iframe class="iframe-code" {src} title="Cables.gl" style="width:100%;" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" />
  {:else if type === "youtube"}
    <iframe class="iframe-code" style="width:100%;height:100%;border:0px;" {src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen />
  {:else}
    <iframe class="iframe-code" {src} title="Embed" style="width:100%;" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" />
  {/if}
</div>

<style>
  .iframe-code {
    aspect-ratio: 16 / 9;
    height: 100%;
    width: 100%;
  }
</style>
