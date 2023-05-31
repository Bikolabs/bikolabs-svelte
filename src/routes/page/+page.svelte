<script>
  import VideoPlayer from "svelte-video-player";
  import Visorgpt from "$lib/components/VisorGpt/visorgpt.svelte";

  const source = ["/videos/croi.mp4", "/videoscroi.mp4", "/videos/croi.mp4"];
  const poster = "/images/croi.png";
</script>

<svelte:head>
  <title />
  <meta name="description" content="About this app" />
</svelte:head>
<article in:fade={{ duration: 500 }} out:fade={{ duration: 0 }}>
  <div class="container-center coleccion-post mt-10 desktop:mt-32">
    <div>
      <div class="flex flex-col desktop:flex-row justify-between mb-20 desktop:mb-20">
        <h1 class="text-5xl tablet:text-6xl font-primary font-semibold">Pretty Woman y la empandada de ChatGPT</h1>
      </div>
      <div class="mb-12">
        <h2 class="text-2xl font-light">Aqui subtitle</h2>
      </div>
    </div>
    <div>
      <div class="text-min flex">
        <p class="mb-1 font-light">Fecha:</p>
        <p class="font-primary font-bold ml-1">23/05/23</p>
        <p class="mb-1 font-light ml-7">Categoria:</p>
        <p class="font-primary font-bold mb-5 ml-1">Entretiempo</p>
      </div>

      <div class="mb-20">
        <img src="/images/pretty.png" alt="la empanada" />
      </div>
    </div>
  </div>

  <div class="container-center">
    <div class="font-lightcoleccion-post-text">
      <p class="mb-10">Se han escrito (casi) loas sobre las posibilidades de ChatGPT. Desde que nos permitirá identificar qué retos científicos deberíamos abordar en la próxima época hasta que sustituirá a buscadores como el de Google.</p>
      <p class="mb-10">Nosotros no hemos querido pedirle tanto. Simplemente que nos describa una escena de la película Pretty Woman sobre la que existen ríos de tinta en Internet. Es una escena especialmente curiosa porque contiene un error de continuidad o raccord, es decir, un error de discontinuidad en la acción o la posición de los personajes entre dos tomas consecutivas.</p>
      <p class="mb-10">En esta escena de Pretty Woman el error se produce cuando la protagonista, Vivian, se encuentra desayunando en una habitación de hotel. El croissant que le vemos comer se transforma en una tortita en un cambio de plano.</p>
      <p
        class="mb-10
        "
      >
        Así que le pedimos a ChatGPT que busque este error entre los datos de su entrenamiento y nos lo describa. ¿Y qué es lo que nos dice sobre él ChatGPT?
      </p>
    </div>
  </div>
  <div class="container-center px-10">
    <div>
      <Visorgpt>
        En la escena del desayuno en el hotel de "Pretty Woman", Vivian (interpretada por Julia Roberts) está sentada en la mesa del comedor junto a Edward (interpretado por Richard Gere). Durante esta escena, se produce un error de raccord relacionado con los alimentos que Vivian está comiendo. En una toma inicial, se muestra a Vivian sosteniendo un croissant completo en sus manos mientras habla con Edward. Sin embargo, en la siguiente toma, cuando la cámara cambia de ángulo, el croissant que Vivian está sosteniendo se ha reducido a la mitad. Parece que ha dado un mordisco y ha dejado solo
        una porción del croissant.
      </Visorgpt>
    </div>
    <div class="w-full bg-gray-100">
      <VideoPlayer {source} {poster} color="#19c37d" />
    </div>
  </div>
</article>

<style>
  .marker {
    background-color: blueviolet;
    display: inline-block;
    color: white;
    font-weight: bold;
    padding: 0 3px;
  }
</style>
