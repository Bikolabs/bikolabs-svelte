<script>
  import Link from "$lib/components/Link/link.svelte";
  import Image from "$lib/image/Image.svelte";
  import Pill from "$lib/components/Pill/Pill.svelte";

  export let title;
  export let description;
  export let imagesrc;
  export let link;
  export let linktext = "";
  export let category;
  export let inverted = "";
  export let fullsize = "";
  export const imagestyles = "";

  export const isImage = (imagsrc) => {
    if (imagsrc) return "w-full tablet:w-[76%] flex flex-col justify-between";
    return "w-full flex flex-col justify-between";
  };
</script>

{#if inverted && !fullsize}
  <div
    class="flex gap-7 flex-col tablet:flex-row border-b border-color pb-10 mb-10"
  >
    {#if imagesrc}
      <div class="w-full tablet:w-[240px] relative">
        <Image src={imagesrc} alt="" />
      </div>
    {/if}
    <div class={isImage(imagesrc)}>
      <div class="desktop:pr-28">
        <h2 class="mb-5 text-3xl font-secondary font-semibold">{title}</h2>
        <p class="text-base text-quaternarycolor desktop:pr-24">
          {description}
        </p>
      </div>
      <div class="flex mt-10 justify-between">
        <Pill {inverted} {category} />
        <Link
          {link}
          title={linktext}
          iconstyles="fill-white hover:text-primarycolor transition"
        />
      </div>
    </div>
  </div>
{/if}

{#if !inverted && !fullsize}
  <div
    class="flex gap-7 flex-col tablet:flex-row border-b border-tertiarycolor pb-10 mb-10"
  >
    {#if imagesrc}
      <div class="w-full tablet:w-[19%] relative border">
        <Image src={imagesrc} alt="" />
      </div>
    {/if}
    <div class={isImage(imagesrc)}>
      <div class="desktop:pr-28">
        <h2 class="mb-5 text-3xl font-secondary font-semibold text-black">
          {title}
        </h2>
        <p class="text-base text-secondarycolor desktop:pr-24">{description}</p>
      </div>
      <div class="flex mt-10 justify-between">
        <Pill {inverted} {category} />
        <Link
          {link}
          {linktext}
          iconstyles="fill-black hover:fill-primarycolor transition"
        />
      </div>
    </div>
  </div>
{/if}

{#if fullsize && !inverted}
  <div class="flex gap-7 flex-col border-b border-tertiarycolor pb-10 mb-10">
    {#if imagesrc}
      <div class="w-full relative border">
        <Image src={imagesrc} alt="" imagestyles="object-cover" />
      </div>
    {/if}
    <div class="w-full flex flex-col justify-between">
      <div class="desktop:pr-28">
        <h2 class="mb-5 text-4xl font-primary text-black">{title}</h2>
        <p class="text-base text-secondarycolor desktop:pr-24">{description}</p>
      </div>
      <div class="flex mt-10 justify-between">
        <Pill {inverted} {category} />
        <Link
          {link}
          {linktext}
          iconstyles="fill-black hover:fill-primarycolor transition"
        />
      </div>
    </div>
  </div>
{/if}

<style>
  .border-color {
    border-color: #59596d;
  }
</style>
