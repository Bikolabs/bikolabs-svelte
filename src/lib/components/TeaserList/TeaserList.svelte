<script>
  import Pill from "$lib/components/Pill/Pill.svelte";
  import ArrowLink from "$lib/icons/ArrowLink.svelte";

  export let title;
  export let description;
  export let imagesrc = "";
  export let link;
  export let linktitle = "Radiografía de la story";
  export let category;
  export let inverted = "";
  export const imagestyles = "";

  export const isImage = (imagsrc) => {
    if (imagsrc) return "w-full tablet:w-[76%] flex flex-col justify-between";
    return "w-full flex flex-col justify-between";
  };
</script>

{#if inverted}
  <a
    href={link}
  >
    <div class="flex gap-14 flex-col tablet:flex-row">
      {#if imagesrc}
        <div class="w-full tablet:w-[395px] h-auto relative">
          <img class="image-teaser-inverted" src={imagesrc} alt={title} />
        </div>
      {/if}
      <div class={isImage(imagesrc)}>
        <div class="desktop:pr-28">
          <h2 class="mb-5 text-3xl font-secondary font-semibold">{title}</h2>
          <p class="text-xl text-tertiarycolor font-medium desktop:pr-24 font-secondary leading-[31.5px]">
            {description}
          </p>
        </div>
        <div class="flex mt-10 justify-between">
          <div class="fill-white hover:text-primarycolor hover:fill-primarycolor transition">
            <a href={link} class="link-prim flex gap-4 hover:text-primarycolor text-quaternarycolor uppercase font-bold font-secondary">
              {linktitle}
              <ArrowLink styles="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </a>
{/if}

{#if !inverted}
  <a href={link} class="list-teaser">
    <div class="flex tablet:gap-16 flex-col tablet:flex-row border-b border-tertiarycolor hover:border-primarycolor transition duration-350 ease-out hover:ease-in pb-10 mb-10">
      {#if imagesrc}
        <div class="w-full tablet:w-[395px] h-auto relative">
          <img class="image-teaser" src={imagesrc} alt={title} />
        </div>
      {/if}
      <div class={isImage(imagesrc)}>
        <div class="desktop:pr-28">
          <h2 class="mt-5 tablet:mt-0 mb-5 text-3xl font-secondary font-semibold text-black dark:text-white">
            {title}
          </h2>
          <p class="text-xl text-tertiarycolor font-medium desktop:pr-24 font-secondary leading-[31.5px]">
            {description}
          </p>
        </div>
        <div class="flex mt-10 justify-between">
          <div>
            <Pill {inverted} {category} />
          </div>
          <div class="">
            <a href={link} class="fill-secondarycolor hover:text-primarycolor hover:fill-primarycolor transition">
              <ArrowLink styles="dark:fill-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </a>
{/if}

<style>
  .border-color {
    border-color: #59596d;
  }
</style>
