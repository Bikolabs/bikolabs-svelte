<script>
  import Button from "$lib/components/Button/Button.svelte";
  import Nav from "$lib/components/Nav/Nav.svelte";
</script>

<div class="w-100 h-100vh border h-screen flex flex-col">
  <Nav />
  <div class="container mt-20">
    <h1 class="text-6xl font-primary title-wrapper">
      <span class=" text-primarycolor font-bold"
        >Investigamos,<br /> invertimos y <br /> divulgamos</span
      >
      <span class="">sobre la interacción entre personas y tecnología</span>
    </h1>
    <div class="flex justify-end">
      <Button type="primary" href="/" text="Descubre como" />
    </div>
  </div>
</div>

<style>
  .title-wrapper {
    @apply w-[850px] leading-[67px];
  }
</style>
