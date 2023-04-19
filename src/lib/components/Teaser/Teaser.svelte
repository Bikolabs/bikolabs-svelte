<script>
  import Link from "$lib/components/Link/link.svelte";
  import Buttom from "$lib/components/Button/Button.svelte";
  import Image from "$lib/image/Image.svelte";

  export let title;
  export let description;
  export let imagesrc;
  export let linktitle;
  export let link;
</script>

<div
  class="flex gap-7 flex-col-reverse tablet:flex-row border-b border-tertiarycolor pb-24 mb-10"
>
  <div class="w-full tablet:w-[400px] relative">
    <Image src={imagesrc} alt="" styles="img-square" />
    <div class="btn-wrapp hidden desktop:flex justify-end absolute">
      <Buttom type="rounded" text="Entrar" {link} styles="hover:fill-white" />
    </div>
  </div>
  <div class="w-full tablet:w-[560px]">
    <div class="desktop:pr-28">
      <h2 class="mb-5 text-4xl font-primary">{title}</h2>
      <p class="text-base text-quaternarycolor desktop:pr-24">{description}</p>
    </div>
    <div class="flex justify-end mt-10 uppercase text-min">
      <Link
        title={linktitle}
        {link}
        styles="fill-white hover:text-primarycolor hover:fill-primarycolor"
      />
    </div>
  </div>
</div>

<style>
  .btn-wrapp {
    transform: translate(50%, 50%);
    transition: width 0.5s, height 0.5s;
    right: 0px;
    bottom: 0px;
  }
</style>
