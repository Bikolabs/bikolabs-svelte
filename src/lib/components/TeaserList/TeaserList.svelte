<script>
  import Link from "$lib/components/Link/link.svelte";
  import Pill from "$lib/components/Pill/Pill.svelte";
  import ArrowLink from "$lib/icons/ArrowLink.svelte";

  export let title;
  export let description;
  export let imagesrc = "";
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
  <a href="/" class="list-teaser">
    <div
      class="flex gap-7 flex-col tablet:flex-row border-b border-color pb-10 mb-10"
    >
      {#if imagesrc}
        <div class="w-full tablet:w-[240px] relative">
          <img class="image-teaser" src={imagesrc} alt={title} />
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
          <div>
            <Pill {inverted} {category} />
          </div>
          <div
            class="fill-white hover:text-primarycolor hover:fill-primarycolor transition"
          >
            <a
              href={link}
              class="flex gap-3 hover:text-primarycolor custom-link"
            >
              Entra en la story
              <ArrowLink styles="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </a>
{/if}

{#if !inverted && !fullsize}
  <a href="/" class="list-teaser">
    <div
      class="flex gap-7 flex-col tablet:flex-row border-b border-tertiarycolor hover:border-primarycolor transition duration-350 ease-out hover:ease-in pb-10 mb-10"
    >
      {#if imagesrc}
        <div class="w-full tablet:w-[19%] relative border">
          <img class="image-teaser" src={imagesrc} alt={title} />
        </div>
      {/if}
      <div class={isImage(imagesrc)}>
        <div class="desktop:pr-28">
          <h2 class="mb-5 text-3xl font-secondary font-semibold text-black">
            {title}
          </h2>
          <p class="text-base text-secondarycolor desktop:pr-24">
            {description}
          </p>
        </div>
        <div class="flex mt-10 justify-between">
          <div>
            <Pill {inverted} {category} />
          </div>
          <div class="">
            <a
              href={link}
              class="fill-secondarycolor hover:text-primarycolor hover:fill-primarycolor transition"
            >
              <ArrowLink styles="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </a>
{/if}

{#if fullsize && !inverted}
  <div class="flex gap-7 flex-col border-b border-tertiarycolor pb-10 mb-10">
    {#if imagesrc}
      <div class="w-full relative border">
        <img class="image-teaser" src={imagesrc} alt={title} />
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
