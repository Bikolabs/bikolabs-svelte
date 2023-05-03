<script>
  import Teaser from "$lib/components/Teaser/Teaser.svelte";
  import TeaserList from "$lib/components/TeaserList/TeaserList.svelte";

  export let data;
</script>

<div class="XXXbg-secondarycolor aaa w-full py-20 pb-0">
  <div
    class="container pt-32 tablet:py-40 flex flex-col justify-start text-white"
  >
    <p class="desktop:w-[850px] text-2xl mb-10">
      A veces no basta con tener buenas historias que contar. Porque las
      historias son, a veces, tan complejas y especializadas que las palabras
      por sí solas no cumplen bien su cometido.
    </p>
    <h1
      class="mb-10 text-2xl tablet:text-5xl font-primary desktop:w-[850px] desktop:leading-[67px] text-white"
    >
      <span class="font-bold text-6xl">Stories</span>
      <span class="">
        es nuestra respuesta a esas historias que exigen una visualización
        poderosa y un proceso de investigación riguroso para poder ser
        divulgadas.
      </span>
    </h1>
    <p>
      <a class="hover:text-primarycolor font-bold" href="#contactar"
        >Escríbenos</a
      > si tienes una historia que necesita ser contada
    </p>
  </div>
  <div class="container">
    <section id="stories" class="py-10 text-white dektop:pr-[200px]">
      <Teaser
        title="¿Cómo medir si un algoritmo acierta cuando toma una decisión automatizada?"
        description="<p>Son varias las medidas con las que se mide el acierto algorítmico. Comprendemos las más usadas con un ejemplo real: RisCanvi.</p> <p>Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles.</p>"
        imagesrc="/images/risca.gif"
        linktitle="radiografía de la Story"
        link="/home"
      />
      <TeaserList
        inverted
        title="Empatizando con las IAs"
        description="Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles."
        imagesrc="images/empatizando-ias.jpeg"
        category="stories"
        link="colecciones/empatizando-con-ias"
      />
    </section>
  </div>
</div>
