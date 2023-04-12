<script>
  import ArrowLink from "$lib/icons/ArrowLink.svelte";
  export let category;
  export let links = [];
</script>

<div class="desktop:w-3/6 mx-auto">
  <h4 class="uppercase mb-1 text-sm font-light">{category}</h4>
  <div class="text-bold">
    {#each links as link}
      <div
        class="flex w-full border-b border-b-secondarycolor mb-10 transition"
      >
        <a
          class="font-bold text-xl flex justify-between gap-7 flex-1 pb-4 hover:text-primarycolor"
          href={link[1]}
          >{link[0]}
          <div>
            <ArrowLink styles="hover:fill-primarycolor" />
          </div>
        </a>
      </div>
    {/each}
  </div>
</div>
