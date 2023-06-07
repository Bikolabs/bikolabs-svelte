<script>
  import VideoPlayer from "svelte-video-player";
  import Visorgpt from "$lib/components/VisorGpt/visorgpt.svelte";

  import { inview } from "svelte-inview";

  const options = {
    rootMargin: "-210px",
    unobserveOnEnter: true,
  };
  // const optionsOne = {
  //   rootMargin: "-110px",
  //   unobserveOnEnter: true,
  // };

  let isInView = "";

  const source = ["/videos/pizza.mp4"];
  const sourceOne = ["/videos/multicrois.mp4"];
  const sourceTwo = ["/videos/original.mp4"];
  const sourceBing = ["/videos/empanadas.mp4"];
  const sourceNaranja = ["/videos/naranja.mp4"];

  const poster = "/images/pizza.png";
  const posterOne = "/images/multicrosi.png";
  const posterTwo = "/images/desayuno.png";
  const posterBing = "/images/empa.png";
  const posterNaranja = "/images/naranja.png";
</script>

<svelte:head>
  <title />
  <meta name="description" content="About this app" />
</svelte:head>
<article class="coleccion-post">
  <div class="container-center coleccion-post mt-10 desktop:mt-32">
    <div>
      <div class="flex flex-col desktop:flex-row justify-between mb-20 desktop:mb-20">
        <h1 class="text-5xl tablet:text-6xl font-primary font-semibold">Pretty Woman y la empanada de ChatGPT</h1>
      </div>
    </div>
    <div>
      <div class="text-min flex">
        <p class="mb-1 font-light">Fecha:</p>
        <p class="font-primary font-bold ml-1">23/05/23</p>
        <p class="mb-1 font-light ml-7">Categoria:</p>
        <p class="font-primary font-bold mb-5 ml-1">Story</p>
      </div>

      <div class="mb-10">
        <img src="/images/pretty.png" alt="la empanada" />
      </div>
    </div>
  </div>
  <div class="debug fixed top-0">
    {isInView ? "Activo !!!!!!" : "Bye, Bye !!!!!!"}
  </div>

  <div class="container-center">
    <div class="font-light coleccion-post">
      <p class="mb-10">Se han escrito (casi) loas sobre las posibilidades de ChatGPT. Desde que nos permitirá identificar qué retos científicos deberíamos abordar en la próxima época hasta que <strong>sustituirá a buscadores</strong> como el de Google.</p>
      <p class="mb-10">Nosotros no hemos querido pedirle tanto. Simplemente que nos describa una escena de la película Pretty Woman sobre la que existen ríos de tinta en Internet. Es una escena especialmente curiosa porque contiene un error de continuidad o raccord, es decir, un error de discontinuidad en la acción o la posición de los personajes entre dos tomas consecutivas.</p>
      <p class="mb-10">En esta escena de Pretty Woman el error se produce cuando la protagonista, Vivian, se encuentra desayunando en una habitación de hotel. El croissant que le vemos comer se transforma en una tortita en un cambio de plano.</p>
      <div class="mb-2">
        <VideoPlayer source={sourceTwo} poster={posterTwo} color="#19c37d" />
      </div>
      <div class="mb-5 grid justify-items-end"><div><p class="text-min ">Escena original del Película Pretty Woman</p></div></div>
      <p class="mb-10 ">Así que le pedimos a ChatGPT que busque este error entre los datos de su entrenamiento y nos lo describa.</p>
      <h3 class="title-3 mb-10">Preguntamos a ChatGPT</h3>
    </div>
  </div>

  <div class="container-center chat-wrap">
    <div
      use:inview={options}
      on:inview_leave={(event) => {
        const { inView } = event.detail;
        isInView = inView;
      }}
      on:inview_enter={(event) => {
        const { inView } = event.detail;
        isInView = inView;
      }}
    >
      <div class="flex items-center gap-3 py-10 pl-3 bg-white">
        <div class="w-[31px] h-[31px] bg-slate-800 flex items-center justify-center p-2 ml-1"><img width="30" height="35" src="/images/web/menulogos.svg" alt="logo pregunta" /></div>
        <p class="font-bold">¿Cual es el error de raccord más conocido en la película Pretty Woman?</p>
      </div>
      <Visorgpt active={isInView}>En una escena, Vivian Ward (interpretada por Julia Roberts) está comiendo una <strong>pizza</strong> en la cama y, en una toma, se ve que tiene una porción en la mano derecha. En la siguiente toma, la porción de pizza cambia de mano y se encuentra en su mano izquierda. Este es un error de continuidad porque hay una discontinuidad en la posición de un objeto entre dos tomas consecutivas.</Visorgpt>
    </div>
    <div class="w-full bg-gray-100">
      <VideoPlayer {source} {poster} color="#19c37d" />
      <div class="py-3 px-3">
        <span class="text-xl pr-3">❌</span><span class="">Como vemos en la escena real de la pelicula en ningun momento come una Pizza</span>
      </div>
    </div>
  </div>

  <div class="container-center chat-wrap">
    <div
      use:inview={options}
      on:inview_leave={(event) => {
        const { inView } = event.detail;
        isInView = inView;
      }}
      on:inview_enter={(event) => {
        const { inView } = event.detail;
        isInView = inView;
      }}
    >
      <div class="flex items-center gap-3 py-10 pl-3 bg-white">
        <div class="w-[31px] h-[31px] bg-slate-800 flex items-center justify-center p-2 ml-1"><img width="30" height="35" src="/images/web/menulogos.svg" alt="logo pregunta" /></div>
        <p class="font-bold">El error de continuidad de Pretty Woman ocurre cuando Vivian desayuna</p>
      </div>
      <Visorgpt active={isInView}
        >Tiene razón, me equivoqué al mencionar la escena en la que ocurre el error de continuidad en "Pretty Woman". El error en realidad ocurre cuando Vivian está desayunando en la habitación del hotel. Gracias por señalarlo. En esa escena, Vivian está comiendo una croissant y en una toma se ve que tiene un bocado en la mano, pero en la siguiente toma, el <strong>croissant</strong> está intacto de nuevo. Luego, en otra toma, el croissant vuelve a tener un bocado. Este es un ejemplo claro de un error de continuidad debido a una discontinuidad en la posición de un objeto entre dos tomas consecutivas.
      </Visorgpt>
    </div>
    <div class="w-full bg-gray-100">
      <VideoPlayer source={sourceOne} poster={posterOne} color="#19c37d" />
      <div class="py-3 px-3">
        <span class="text-xl pr-3">❌</span><span class=""> No se Rick...</span>
      </div>
    </div>
  </div>

  <div class="container-center chat-wrap">
    <div
      use:inview={optionsOne}
      on:inview_change={(event) => {
        const { inView } = event.detail;
        isInView = inView;
      }}
      on:inview_enter={(event) => {
        const { inView } = event.detail;
        isInView = inView;
      }}
    >
      <div class="flex items-center gap-3 py-10 pl-4 bg-white">
        <div class="w-[31px] h-[31px] bg-slate-800 flex items-center justify-center p-2"><img width="30" height="35" src="/images/web/menulogos.svg" alt="logo pregunta" /></div>
        <p class="font-bold">Pero, entonces, en el desayuno, ¿qué es lo que comen los protagonistas?</p>
      </div>
      <Visorgpt active={isInView}
        >En la película "Pretty Woman", en la escena del desayuno, los personajes principales, Edward Lewis (interpretado por Richard Gere) y Vivian Ward (interpretado por Julia Roberts), disfrutan de un desayuno en el lujoso hotel Beverly Wilshire. En esta escena, Vivian muestra su inexperiencia en un entorno tan refinado, y Edward intenta ayudarla. En cuanto a la comida que se muestra en la escena, Vivian pide una <strong>variedad de platos</strong> poco comunes para ella, como fresas, croissant y jarabe de arce. Al principio, no sabe cómo comer los croissants y los sumerge en el jarabe de arce,
        algo que Edward le corrige con cortesía. Edward, por su parte, pide huevos revueltos, tocino y café negro.
      </Visorgpt>
    </div>
    <div class="w-full bg-gray-100">
      <div class="flex w-full items-center justify-center py-5">
        <div>
          <video muted autoplay loop style="pointer-events: none;" class="w-[385px] h-[350px]">
            <source src="/videos/chatruleta.mp4" type="video/mp4" />
            <source src="/videos/chatruleta.mp4" type="video/ogg" />
          </video>
        </div>
      </div>

      <div class="py-3 px-3">
        <span class="text-xl pr-3">❌</span><span class="">¿Podria ChatGPT darnos infinidad de alimentos?</span>
      </div>
    </div>
  </div>

  <div class="container-center chat-wrap">
    <div
      use:inview={optionsOne}
      on:inview_change={(event) => {
        const { inView } = event.detail;
        isInView = inView;
      }}
      on:inview_enter={(event) => {
        const { inView } = event.detail;
        isInView = inView;
      }}
    >
      <div class="flex items-center gap-3 py-10 pl-4 bg-white">
        <div class="w-[31px] h-[31px] bg-slate-800 flex items-center justify-center p-2"><img width="30" height="35" src="/images/web/menulogos.svg" alt="logo pregunta" /></div>
        <p class="font-bold">¿Oué bebe Julia Roberts es la escena del desayuno?</p>
      </div>
      <Visorgpt active={isInView}>En la famosa escena del desayuno en "Pretty Woman", Julia Roberts (que interpreta a Vivian Ward) está tomando <strong>jugo de naranja</strong>. Aunque el error de raccord con el croissant que se convierte en una <strong>baguette</strong> o en un panqueque es notable, su bebida se mantiene consistente durante la escena.</Visorgpt>
    </div>
    <div class="w-full bg-gray-100">
      <VideoPlayer source={sourceNaranja} poster={posterNaranja} color="#19c37d" />
      <div class="py-3 px-3">
        <span class="text-xl pr-3">❌</span><span class=""> ¿Zumo de Naranja? ¿Champán? </span>
      </div>
    </div>
  </div>

  <div class="container-center chat-wrap">
    <div
      use:inview={options}
      on:inview_leave={(event) => {
        const { inView } = event.detail;
        isInView = inView;
      }}
      on:inview_enter={(event) => {
        const { inView } = event.detail;
        isInView = inView;
      }}
    >
      <div class="flex items-center gap-3 py-10 pl-3 bg-white">
        <div class="w-[31px] h-[31px] bg-slate-800 flex items-center justify-center p-2 ml-1"><img width="30" height="35" src="/images/web/menulogos.svg" alt="logo pregunta" /></div>
        <p class="font-bold">F ---- ¿Seguro que bebe zumo de naranja?</p>
      </div>
      <Visorgpt active={isInView}>Lamento el error en mi respuesta anterior. En la famosa escena del desayuno de "Pretty Woman", Julia Roberts (interpretando a Vivian Ward) en realidad está bebiendo una copa de champán, no jugo de naranja. La película usa este desayuno con champán como una forma de ilustrar la opulencia y el estilo de vida lujoso que el personaje de Richard Gere (Edward Lewis) está introduciendo a Vivian. Lamento la confusión.</Visorgpt>
    </div>
    <div class="w-full bg-gray-100">
      <VideoPlayer source={sourceNaranja} poster={posterNaranja} color="#19c37d" />
      <div class="py-3 px-3">
        <span class="text-xl pr-3">❌</span><span class=""> falta video impaiting </span>
      </div>
    </div>
  </div>

  <div class="container-center">
    <h3 class="title-3 mb-5">Preguntamos a Bing por lo mismo y....</h3>
    <p class="mb-10">Decidimos probar el chat de Bing con IA para ver sus resultados preguntadole por la misma escena con fallos.</p>
    <div class="chat-wrap-bing">
    <div class="flex items-center gap-3 py-10 pl-3 bg-white">
      <div class="w-[31px] h-[31px] bg-slate-800 flex items-center justify-center p-2 ml-1"><img width="30" height="35" src="/images/web/menulogos.svg" alt="logo pregunta" /></div>
      <p class="font-bold">pretty woman escena con fallos de raccord</p>
    </div>
    <img src="/images/bing.png" alt="resultados en bing" class="" />
    <div class="pb-5 bg-[#f3f4f6]">
      <VideoPlayer source={sourceBing} poster={posterBing} color="#19c37d" />
    </div>
    </div>


    <p class="mb-10">Aqui no solo indica que esta comiendo hasta 3 cosas diferentes si no que hasta nos dice la referencia en el caso de la empanada. Si seguimos el enlace a <a class="underline" href="https://www.xatakaciencia.com/psicologia/ciegos-a-los-errores-de-continuidad-de-pretty-woman-a-star-wars" target="_blank">Xataka ciencia</a> vemos que en ningún momento se hace referencia a la "empanada"</p>
  </div>
  <div class="container-center coleccion-post">
    <h3 class="title-3 mb-10">Por qué se equivoca ChatGPT?</h3>
    <p class="mb-5">Nos equivocamos cuando confundimos buscar con generar. ChatGPT es un generador de textos. Google Search, DuckDuck Go, son buscadores. Sus funciones son diferentes, pero a veces no distinguimos entre ellas.</p>
    <p class="mb-5">Cuando preguntamos por la escena de Pretty Woman, ChatGPT genera, lo que implica invención. Si preguntamos a un buscador, busca, lo que implica rescatar información.
</p>
<img src="/images/fin.jpg" alt="fin imagen" />
    <p class="mb-5">Nota: En estos días, se ha lanzado en ChatGPT una función beta para usar Bing+ChatGPT como búsqueda. Habrá que esperar a ver cómo se resuelve este tema. 
</p>
  </div>
</article>

<style type="text/scss">
  .marker {
    background-color: blueviolet;
    display: inline-block;
    color: white;
    font-weight: bold;
    padding: 0 3px;
  }
  .title-3 {
    @apply font-bold text-4xl  mt-24;
  }
  .title-4 {
    @apply font-bold text-2xl mb-10 mt-20;
  }

  strong {
    font-weight: bold;
  }

  .chat-wrap {
    @apply border-[#f3f4f6] border-t-[15px] mb-12 rounded-[5px] border-l-[15px] border-r-[15px]  border-b-2 ;
    & strong {

      background-color: #1ac37e;
      display: inline-block;
      color: white;
      padding: 0 2px;
    }
  }
  .chat-wrap-bing {
    @apply border-[#f3f4f6] border-t-[15px] mb-12 rounded-[5px] border-l-[15px] border-r-[15px]  border-b-2 ;
  }
</style>
