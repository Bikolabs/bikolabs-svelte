<script>
  import Nav from "$lib/components/Nav/Nav.svelte";
  import ArrowLink from "$lib/icons/ArrowLink.svelte";
  
</script>

<div class="w-100 flex flex-col">
  <Nav />
  <div class="container mb-20 text-secondarycolor bg-decoration">
    <div class="mb-10 font-secondary font-bold break-line text-5xl desktop:leading-[57px] ml-64">
     <p class="mb-5">Investigamos, intervenimos y divulgamos  <br /> sobre la interacción entre personas y  <br />tecnología.</p>
      <p classs="mb-5">Y lo hacemos mediante stories y nuestra  <br /> colección de intervenciones <br /> tecnológicas.</p>
    </div>
    <p class="mb-5 text-3xl font-secondary pt-10 text-right desktop:leading-[45px]">
      Las stories son nuestra respuesta a esas narraciones que exigen <br> una
      <span class="underline decoration-primarycolor">visualización poderosa</span> y un proceso de <span class="underline decoration-primarycolor">investigación</span> <br> <span class="underline decoration-primarycolor">riguroso</span> para poder ser divulgadas. Porque a veces las historias <br> complejas necesitan más que palabras para ser contadas.
    </p>
  <div class="mt-10 flex justify-end">
  
      <a href="#contacto" class="flex gap-5 uppercase font-bold hover:fill-primarycolor hover:text-primarycolor allhover"> Escríbenos si tienes alguna historia que divulgar <ArrowLink styles="fill-secondarycolor hover:fill-primarycolor" /> </a>

    </div>
    <p class="mb-5" />
  </div>
</div>


<style>
.bg-decoration {
	background-image: url('/images/web/stories-b.svg');
  background-repeat: no-repeat;
  background-position: 75% 35%;
}

</style>
