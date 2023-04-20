<script>
  import Button from "$lib/components/Button/Button.svelte";
  import Nav from "$lib/components/Nav/Nav.svelte";
</script>

<div
  class="w-100 h-[700px] tablet:h-100vh border tablet:h-screen flex flex-col"
>
  <Nav />
  <div class="container mt-20">
    <h1
      class="text-5xl tablet:text-6xl font-primary desktop:w-[850px] desktop:leading-[67px]"
    >
      <span class=" text-primarycolor font-bold"
        >Investigamos y<br /> modelamos <br /> la interacción</span
      >
      <span class="">presente y futura entre personas y tecnología</span>
    </h1>
    <div class="flex justify-end my-10 desktop:my-0">
      <Button type="primary" href="/" text="Descubre como" />
    </div>
  </div>
</div>
