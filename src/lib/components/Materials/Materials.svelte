<script>
  export let category;
  export let links = [];
</script>

<div>
  <h3>{category}</h3>
  {#each links as link}
    <a href={link[1]}>{link[0]}</a>
  {/each}
</div>
