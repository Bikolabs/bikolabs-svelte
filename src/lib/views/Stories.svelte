<script>
  import TeaserList from "$lib/components/TeaserList/TeaserList.svelte";
  import Buttom from "$lib/components/Button/Button.svelte";
  import ArrowLink from "$lib/icons/ArrowLink.svelte";
</script>

<div class="relative w-full min-h-[800px] tablet:min-h-[600px] desktop:min-h-[700px]">
  <video class="absolute top-0 left-0 w-full h-full object-cover" autoplay muted loop>
    <source src="videos/riscanvi.mp4" type="video/mp4" />
  </video>
  <div class="absolute top-0 left-0 w-full h-full opacity-80 bg-secondarycolor-dg" />
  <div class="absolute top-0 left-0 w-full tablet:h-full h-auto">
    <div id="stories" class="container pt-16">
      <div class="font-semibold mb-10 uppercase">
        <div class="hidden tablet:flex absolute top-[-230px] tablet:left-[8%] desktop:left-[18%] z-10"><img src="/images/web/bg-arrow.svg" alt="" /></div>
        <span class="text-primarycolor">Nuestras Stories</span>
      </div>
    </div>
    <div class="container relative tablet:mt-0 pt-1 tablet:py-14 flex text-white font-secondary">
      <div class="flex">
        <div class="desktop:w-[700px] pt-14">
          <p class="text-4xl font-bold leading-[45px] mb-5">¿Cómo medir si un algoritmo acierta cuando toma una decisión automatizada?</p>
          <div class="mb-10 text-xl text-tertiarycolor font-medium desktop:pr-5 font-secondary leading-[31.5px]">
            <p>Son varias las medidas con las que se mide el acierto algorítmico. Comprendemos las más usadas con un ejemplo real: RisCanvi</p>
          </div>
          <div class="flex justify-start mt-6 uppercase text-min">
            <div class="flex mt-10 justify-between">
              <div class="fill-white text-quaternarycolor hover:text-primarycolor hover:fill-primarycolor transition">
                <a href="/colecciones/riscanvi" target="_blank" class="flex gap-4 text-quaternary hover:text-primarycolor link-prim custom-link uppercase font-bold font-secondary text-base">
                  Radiografia de la storys
                  <ArrowLink styles="fill-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="btn-wrapp hidden desktop:flex desktop:w-[300px] justify-end items-center
          "
        >
          <Buttom type="rounded" href="https://riscanvi.bikolabs.io/" text="Entrar" />
        </div>
      </div>

      <div />
    </div>
  </div>
</div>

<div class="article-storybg-inverse w-full py-5">
  <div class="container">
    <section class="pt-12 pb-12 text-white w-full mx-auto">
      <div class="mb-20 border-b border-secondarycolor pb-20 hover:border-primarycolor">
        <TeaserList inverted title="Pretty Woman y la empanada de ChatGPT" description="Se ha dicho que ChatGPT sustituirá a buscadores como el de Google. Nosotros simplemente le hemos pedido que nos describa una escena de la película Pretty Woman… y la empanada de ChatGPT con esta tarea ha sido impactante" imagesrc="images/pretty.png" category="stories" link="/microstory/pretty-woman" linktitle="Ver la microstory" linkhistory="/microstory/pretty-woman" />
      </div>
      <div>
        <TeaserList
          inverted
          title="Empatizando con las IAs"
          description="Esta historia interactiva con cierta carga irónica permite comprender mejor cómo las IAs “ven” diferentes objetos cotidianos y cuál es su potencial capacidad de errar.
"
          imagesrc="/images/empatizando-ias.jpeg"
          category="stories"
          link="/colecciones/empatizando-con-ias"
          linktitle="Radiografia de la history"
          linkhistory="/empatizandoconias"
        />
      </div>
    </section>
  </div>
</div>

<style>
  .bg-secondarycolor-dg {
    background: linear-gradient(90deg, rgb(34, 34, 60, 1) 60%, rgb(34, 34, 60, 0.4) 100%);
  }
</style>
