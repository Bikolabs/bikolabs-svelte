<script>
  export let src;
  export let alt;
  export let lastsrc;
  export let lastalt;
  export let styles = "my-20 tablet:my-20";
  export let caption = "";
  export let captionposition = "";

  import Image from "$lib/image/Image.svelte";
</script>

<div class={styles}>
  <div class="flex flex-col tablet:flex-row justify-center">
    <div class="w-full tablet:w-2/3 desktop:w-2/6">
      <Image {src} {alt} styles="in-row image-size" />
    </div>
    <div class="w-full tablet:w-2/3 desktop:w-2/6 mt-4 tablet:mt-0">
      <Image src={lastsrc} alt={lastalt} {caption} {captionposition} styles="image-size" />
    </div>
  </div>
</div>

<style>
  .image-size {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
</style>
