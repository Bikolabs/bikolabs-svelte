<script>
  export let src;
  export let alt;
  export let styles = "";
  export let imagestyles = "";
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
      <div class="flex flex-col desktop:flex-row">
        <img class={imagestyles} {src} {alt} />
        <div class={getCaptionPosition()}>
          <p class="text-min text-tertiarycolor mt-3 desktop:ml-7 desktop:mt-0 desktop:w-[175%]">
            {caption}
          </p>
        </div>
      </div>
    </div>
  {:else}
    <div class={getPosition()}>
      <img class={imagestyles} {src} {alt} />
    </div>
  {/if}
</div>

<style>
  .caption-size {
    @apply w-[175%];
  }
</style>
