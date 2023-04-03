<script>
  export let src;
  export let alt;
  export let lastsrc;
  export let lastalt;
  export let styles = "";
  export let caption = "";
  export let captionposition = "";

  import Image from "$lib/image/Image.svelte";
</script>

<div class={styles}>
  <div class="flex justify-center">
    <Image {src} {alt} styles="in-row" />
    <Image src={lastsrc} alt={lastalt} {caption} {captionposition} />
  </div>
</div>
