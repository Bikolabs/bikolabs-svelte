<script>
  import Link from "$lib/components/Link/link.svelte";
  import Buttom from "$lib/components/Button/Button.svelte";
  import Video from "$lib/components/Video/Video.svelte";
  import ArrowLink from "lib/icons/ArrowLink.svelte";

  export let title;
  export let description;
  export let imagesrc = "";
  export let linktitle;
  export let link;
  export let videosrcmp4 = "";
  export let videosrcogg = "";
</script>

<div class="border-b border-color pb-10 tablet:pb-24 mb-10">
  <div class="relative desktop:w-[1000px] desktop:h-[500px] mb-10 debug">
    {#if imagesrc}
      <img class="objet-cover desktop:w-[1000px] desktop:h-[500px]" src={imagesrc} alt={title} />
    {:else}
      <Video srcmp4={videosrcmp4} srcogg={videosrcogg} />
    {/if}

    <div class="btn-wrapp hidden desktop:flex justify-end absolute">
      <Buttom type="rounded" text="Entrar" {link} styles="hover:fill-white" />
    </div>
  </div>

  <div class="w-full debug-2">
    <div>
      <h2 class="mb-5 text-4xl font-secondary font-bold">{title}</h2>
      <div class="text-base text-quaternarycolor desktop:pr-4 teaser-description">
        {@html description}
      </div>
    </div>
    <div class="flex justify-end mt-10 uppercase text-min">
      <Link title={linktitle} {link} styles="link-prim fill-white hover:text-primarycolor hover:fill-primarycolor" />ç
      <a href={link} class="flex gap-4 text-quaternary hover:text-primarycolor link-prim custom-link uppercase font-bold font-secondary text-base">
        {linktitle}
        <ArrowLink styles="fill-white" />
      </a>
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

  .border-color {
    border-color: #59596d;
  }
</style>
