<script>
  import ArrowLink from "$lib/icons/ArrowLink.svelte";
  export let category;
  export let links = [];
</script>

<div class="desktop:w-3/6 mx-auto">
  <h4 class="uppercase mb-2 text-min font-light">{category}</h4>
  <div class="text-bold">
    <div
      class="flex flex-col w-full border-b border-b-secondarycolor mb-10 transition"
    >
      {#each links as link}
        <a
          class="font-bold text-xl flex justify-between gap-7 flex-1 mb-5 hover:text-primarycolor"
          href={link[1]}
          >{link[0]}
          <div>
            <ArrowLink styles="hover:fill-primarycolor" />
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>
