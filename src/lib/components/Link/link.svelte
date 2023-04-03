<script>
  export let title;
  export let link;
  export let styles = "";
  export let iconstyles = "";

  import ArrowLink from "$lib/icons/ArrowLink.svelte";
</script>

<div class={styles}>
  <a class="flex items-center" href={link}
    >{title}<ArrowLink styles={iconstyles} /></a
  >
</div>
