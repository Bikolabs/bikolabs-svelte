<script>
  import ArrowLink from "$lib/icons/ArrowLink.svelte";
  export let type = "primary";
  export let text = "";
  export let href = "";
</script>

{#if type === "primary"}
  <div class="bg-primarycolor hover:fill-white">
    <a {href} class="flex flex-row gap-5 items-center p-5 bg-primarycolor text-base font-bold font-secondary uppercase text-secondarycolor transition">
      {text}
      <ArrowLink styles="hover:fill-white" />
    </a>
  </div>
{/if}

{#if type === "rounded"}
  <a {href} class="link-rounded flex flex-col justify-center items-center w-[162px] h-[162px] text-base font-secondary uppercase text-center transition-all bg-primarycolor rounded-full text-black font-bold hover:text-white">
    <div>{text}</div>
    <ArrowLink styles="ffffhover:fill-white" />
  </a>
{/if}

<style>
  .link-rounded:hover {
    fill: white;
    border: 75px solid rgb(235 84 130);
    transition: all ease-out 1s;
  }
</style>
