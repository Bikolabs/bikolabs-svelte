<script>
  export let styles = "my-20";
  export let caption = "";
  export let srcogg = "";
  export let srcmp4 = "";
</script>

<div class={styles}>
  <div class="flex flex-row">
    <div class="w-5/6">
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
      class="flex flex-col justify-end w-1/6 mr-[8%] px-3 mb-10 text-tertiarycolor"
    >
      <p class="text-min leading-7">{caption}</p>
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
