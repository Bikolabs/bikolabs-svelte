<script>
  export let src;
  export let alt;
  export let styles = "";
  export let caption = "";
  export let captionposition = "";
  export let position = "";

  export const getPosition = () => {
    if (position === "right") return "flex flex-row-reverse";
    return "flex";
  };

  export const getCaptionPosition = () => {
    if (captionposition === "top") return "flex flex-col";
    return "flex flex-col justify-end ";
  };
</script>

<div class={styles}>
  {#if caption}
    <div class={getPosition()}>
      <div class="flex flex-row">
        <img {src} {alt} />
        <div class={getCaptionPosition()}>
          <p class="text-min text-tertiarycolor ml-7 caption-size">{caption}</p>
        </div>
      </div>
    </div>
  {:else}
    <div class={getPosition()}>
      <img {src} {alt} />
    </div>
  {/if}
</div>

<style>
  .in-row {
    @apply mt-40 pr-5;
  }
  .caption-size {
    @apply w-[175%];
  }
</style>
