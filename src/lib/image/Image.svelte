<script>
  export let src;
  export let alt;
  export let styles;
  export let caption;
  export let captionposition;
  export let position;

  export const getPosition = () => {
    if (position === "right") return "flex flex-row-reverse";
    return "flex";
  };

  export const getCaptionPosition = () => {
    if (captionposition === "top") return "flex flex-col";
    return "flex flex-col justify-end";
  };
</script>

<div class={styles}>
  {#if caption}
    <div class={getPosition()}>
      <div class="flex flex-row border">
        <div><img {src} {alt} /></div>
        <div class={getCaptionPosition()}>
          <p class="text-sm">{caption}</p>
        </div>
      </div>
    </div>
  {:else}
    <div class={getPosition()}>
      <img {src} {alt} />
    </div>
  {/if}
</div>
