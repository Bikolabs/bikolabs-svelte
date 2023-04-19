<script>
  export let styles = "my-10 tablet:my-20";
  export let caption = "";
  export let srcogg = "";
  export let srcmp4 = "";
</script>

<div class={styles}>
  <div class="flex flex-col tablet:flex-row">
    <div class="w-full tablet:w-5/6">
      <video
        muted
        autoplay
        loop
        style="pointer-events: none;"
        class="video-aspect"
      >
        <source src={srcmp4} type="video/mp4" />
        <source src={srcogg} type="video/ogg" />
      </video>
    </div>

    <div
      class="flex flex-col justify-end w-full tablet:w-1/6 mt-3 tablet:mr-5 tablet:px-3 tablet:mb-10 text-tertiarycolor"
    >
      <p class="text-min">{caption}</p>
    </div>
  </div>
</div>

<style>
  .video-aspect {
    width: 100%;
    height: auto;
    aspect-ratio: 4/3;
    object-fit: cover;
    object-position: center;
  }
</style>
