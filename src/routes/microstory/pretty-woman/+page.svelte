<script>
  import { onMount } from "svelte";
  import Visorgpt from "$lib/components/VisorGpt/visorgpt.svelte";
  import Nav from "$lib/components/Nav/Nav.svelte";
  import Footer from "$lib/components/Footer/Footer.svelte";

  import { inview } from "svelte-inview";
  import { MetaTags } from "svelte-meta-tags";

  const options = {
    threshold: "1",
  };

  let isInView = "";
  let VideoPlayer;

  const source = ["/videos/2xpizza.mp4"];
  const sourceOne = ["/videos/2xmulticrois.mp4"];
  const sourceTwo = ["/videos/original.mp4"];
  const sourceBing = ["/videos/2xempanadas.mp4"];
  const sourceNaranja = ["/videos/naranja.mp4"];
  const sourceChampan = ["/videos/champan.mp4"];

  const poster = "/images/pizza.png";
  const posterOne = "/images/multicrosi.png";
  const posterTwo = "/images/desayuno.png";
  const posterBing = "/images/empa.png";
  const posterNaranja = "/images/naranja.png";
  const posterChampan = "/images/champan.png";

  onMount(async () => {
    const component = await import("svelte-video-player");
    VideoPlayer = component.default;
  });
</script>

<MetaTags
  title="Bikolabs"
  titleTemplate="%s | Pretty Woman y la empanada de ChatGPT"
  description="Se ha dicho que ChatGPT sustituirá a buscadores como el de Google. Nosotros simplemente le hemos pedido que nos describa una escena de la película Pretty Woman"
  canonical="/microstory/pretty-woman"
  openGraph={{
    url: "/microstory/pretty-woman",
    title: "Pretty Woman y la empanada de ChatGPT",
    description: "Se ha dicho que ChatGPT sustituirá a buscadores como el de Google. Nosotros simplemente le hemos pedido que nos describa una escena de la película Pretty Woman… y la empanada de ChatGPT con esta tarea ha sido impactante",
    images: [
      {
        url: "/images/pretty.png",
        alt: "Pretty Woman",
      },
    ],
    site_name: "Bikolabs",
    type: "article",
  }}
  twitter={{
    site: "@biko2",
    cardType: "summary",
    title: "Pretty Woman y la empanada de ChatGPT",
    description: "Se ha dicho que ChatGPT sustituirá a buscadores como el de Google. Nosotros simplemente le hemos pedido que nos describa una escena de la película Pretty Woman… y la empanada de ChatGPT con esta tarea ha sido impactante",
    image: "https://www.bikolabs.io/images/twitter-pretty.png",
    imageAlt: "Pretty Woman",
  }}
/>

<Nav />
<article class="coleccion-post text-[#3e3e54]} mb-32 text-lg">
  <div class="container-center coleccion-post mt-10 desktop:mt-12">
    <div>
      <div class="flex flex-col desktop:flex-row justify-between mb-10 desktop:mb-10">
        <h1 class="text-5xl tablet:text-6xl font-primary font-semibold">Pretty Woman y la empanada de ChatGPT</h1>
      </div>
    </div>
    <div>
      <div class="flex text-base">
        <p class="mb-1 font-light">Fecha:</p>
        <p class="font-primary font-bold ml-1">13/06/23</p>
        <p class="mb-1 font-light ml-7">Categoría:</p>
        <p class="font-primary font-bold mb-5 ml-1">MicroStory</p>
      </div>

      <div class="mb-10">
        <img src="/images/pretty.png" alt="la empanada" />
      </div>
    </div>
  </div>

  <div class="container-center">
    <div class="font-light coleccion-post text-lg">
      <p class="mb-10">Se han escrito (casi) loas sobre las posibilidades de ChatGPT. Desde que nos permitirá identificar qué retos científicos deberíamos abordar en la próxima época hasta que <strong>sustituirá a buscadores</strong> como el de Google.</p>
      <p class="mb-10">Nosotros no hemos querido pedirle tanto. Simplemente que <strong>nos describa una escena de la película Pretty Woman </strong> sobre la que existen ríos de tinta en Internet. Es una escena especialmente curiosa porque <strong>contiene un error de continuidad o raccord</strong>, es decir, un error de discontinuidad en la acción entre dos tomas consecutivas.</p>
      <p class="mb-10">En esta escena que nos interesa de Pretty Woman, el error se produce cuando la protagonista, Vivian, se encuentra desayunando en una habitación de hotel. <strong>El croissant que le vemos comer se transforma en una tortita</strong> en un cambio de plano.</p>
      <div class="mb-2">
        <svelte:component this={VideoPlayer} source={sourceTwo} poster={posterTwo} color="#19c37d" />
      </div>
      <div class="mb-5 grid justify-items-end"><div><p class="text-min">Escena original de la película Pretty Woman</p></div></div>
      <p class="mb-10">Así que le pedimos a ChatGPT que busque este error entre los datos de su entrenamiento y nos lo describa.</p>
      <h2 class="title-3 mb-10">Preguntamos a ChatGPT</h2>
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
        <p class="font-bold">¿Cuál es el error de raccord más conocido en la película Pretty Woman?</p>
      </div>
      <Visorgpt active={isInView}>
        En una escena, Vivian Ward (interpretada por Julia Roberts) está comiendo una <strong>pizza</strong> en la cama y, en una toma, se ve que tiene una porción en la mano derecha. En la siguiente toma, la porción de pizza cambia de mano y se encuentra en su mano izquierda. Este es un error de continuidad porque hay una discontinuidad en la posición de un objeto entre dos tomas consecutivas.
      </Visorgpt>
    </div>
    <div class="w-full bg-gray-100">
      <svelte:component this={VideoPlayer} {source} {poster} color="#19c37d" />
      <div class="py-3 px-3">
        <span class="text-xl pr-3">❌</span><span class="">¿Pizza? En ninguna escena de Pretty Woman comen pizza</span>
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
        <p class="font-bold">Te equivocas. El error de continuidad de Pretty Woman ocurre cuando Vivian desayuna.</p>
      </div>
      <Visorgpt active={isInView}>
        Tiene razón, me equivoqué al mencionar la escena en la que ocurre el error de continuidad en "Pretty Woman". El error en realidad ocurre cuando Vivian está desayunando en la habitación del hotel. Gracias por señalarlo. En esa escena, Vivian está comiendo una croissant y en una toma se ve que tiene un bocado en la mano, pero en la siguiente toma, el <strong>croissant</strong> está intacto de nuevo. Luego, en otra toma, el croissant vuelve a tener un bocado. Este es un ejemplo claro de un error de continuidad debido a una discontinuidad en la posición de un objeto entre dos tomas consecutivas.
      </Visorgpt>
    </div>
    <div class="w-full bg-gray-100">
      <svelte:component this={VideoPlayer} source={sourceOne} poster={posterOne} color="#19c37d" />
      <div class="py-3 px-3">
        <span class="text-xl pr-3">❌</span><span class=""> No sé Rick...</span>
      </div>
    </div>
  </div>

  <div class="container-center chat-wrap">
    <div
      use:inview={options}
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
        <span class="text-xl pr-3">❌</span><span class="">¿La capacidad de ChatGPT para sugerir alimentos es infinita? </span>
      </div>
    </div>
  </div>

  <div class="container-center chat-wrap">
    <div
      use:inview={options}
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
        <p class="font-bold">Me has generado curiosidad. ¿Qué bebe Julia Roberts en la escena del desayuno?</p>
      </div>
      <Visorgpt active={isInView}>En la famosa escena del desayuno en "Pretty Woman", Julia Roberts (que interpreta a Vivian Ward) está tomando <strong>jugo de naranja</strong>. Aunque el error de raccord con el croissant que se convierte en una <strong>baguette</strong> o en un panqueque es notable, su bebida se mantiene consistente durante la escena.</Visorgpt>
    </div>
    <div class="w-full bg-gray-100">
      <svelte:component this={VideoPlayer} source={sourceNaranja} poster={posterNaranja} color="#19c37d" />
      <div class="py-3 px-3">
        <span class="text-xl pr-3">❌</span><span class=""> ¿Zumo de Naranja? ¿Baguette? </span>
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
        <p class="font-bold">¿Seguro que bebe zumo de naranja?</p>
      </div>
      <Visorgpt active={isInView}>Lamento el error en mi respuesta anterior. En la famosa escena del desayuno de "Pretty Woman", Julia Roberts (interpretando a Vivian Ward) en realidad está bebiendo una <strong>copa de champán</strong>, no jugo de naranja. La película usa este desayuno con champán como una forma de ilustrar la opulencia y el estilo de vida lujoso que el personaje de Richard Gere (Edward Lewis) está introduciendo a Vivian. Lamento la confusión.</Visorgpt>
    </div>
    <div class="w-full bg-gray-100">
      <svelte:component this={VideoPlayer} source={sourceChampan} poster={posterChampan} color="#19c37d" />
      <div class="py-3 px-3">
        <span class="text-xl pr-3">❌</span><span class=""> Si ChatGPT dice que beben champán... </span>
      </div>
    </div>
  </div>

  <div class="container-center">
    <h3 class="title-3 mb-5">Preguntamos a Bing por lo mismo</h3>
    <p class="mb-10">Decidimos probar el chat de Bing con IA para comprobar si el problema estaba en la falta de conexión a Internet del ChatGPT y le preguntamos de nuevo por la misma escena con fallo de continuidad. Ahora sin amabilidad. Al grano.</p>
    <div class="chat-wrap-bing">
      <div class="flex items-center gap-3 py-10 pl-3 bg-white">
        <div class="w-[31px] h-[31px] bg-slate-800 flex items-center justify-center p-2 ml-1"><img width="30" height="35" src="/images/web/menulogos.svg" alt="logo pregunta" /></div>
        <p class="font-bold">pretty woman escena con fallos de raccord</p>
      </div>
      <img src="/images/bing.jpg" alt="resultados en bing" />
      <div class="pb-5 bg-[#f3f4f6]">
        <svelte:component this={VideoPlayer} source={sourceBing} poster={posterBing} color="#19c37d" />
      </div>
    </div>
    <p class="mb-10">
      ¡Por fin ChatGPT acierta! <strong>¿O no?</strong> Porque nos dice que el fallo de raccord está en el cambio del croissant a la tortita… pero luego a <strong>¡una empanada!</strong> Y no solo es eso, ya que hasta nos facilita la referencia donde supuestamente <a class="underline" href="https://www.xatakaciencia.com/psicologia/ciegos-a-los-errores-de-continuidad-de-pretty-woman-a-star-wars" target="_blank">Xataka ciencia</a> acredita que esto es así. Lo cual no es cierto. <strong>¡En Xataka no se menciona ninguna empanada!</strong>
    </p>
  </div>
  <div class="container-center coleccion-post">
    <h3 class="title-3 mb-10">¿Por qué se equivoca ChatGPT?</h3>

    <p class="mb-5">En Bikolabs tenemos la hipótesis de que el error se puede deber a que estamos pidiendo una tarea a ChatGPT para la que esperamos que, antes de generar, primero realice una búsqueda. ChatGPT es un generador, a diferencia de herramientas como Google Search, DuckDuck Go y similares que son buscadores.</p>

    <p class="mb-5">Las funciones precisas para generar o para buscar son diferentes, pero a veces las personas no distinguimos entre ellas cuando hacemos una petición a ChatGPT, por lo que creemos que ese podría ser el problema.</p>

    <p class="mb-5">Cuando preguntamos por la escena de Pretty Woman, ChatGPT genera, lo que implica cierto grado de invención. Una invención que estará más o menos cercana a la realidad, a pero invención a fin de cuentas: a diferencia de lo que ocurre cuando preguntamos a un buscador, cuya función va a ser rescatar información.</p>

    <img src="/images/fin.jpg" alt="fin imagen" />
    <p class="mb-16"><strong>Nota:</strong> En estos últimos días, se ha lanzado en ChatGPT una función beta para usar Bing+ChatGPT como búsqueda. Habrá que esperar si este tema implica un cambio de paradigma y resuelve errores como el presentado en esta microhistoria.</p>

    <p class="mb-5 text-base"><strong>En esta historia han participado:</strong> 
      <a class="underline" href="https://twitter.com/aitor_rl" target="_blank">Aitor Resano</a>,
      <a class="underline" href="https://twitter.com/ujue" target="_blank">Ujué Agudo</a>,
      <a class="underline" href="https://twitter.com/patxangas" target="_blank">Karlos G. Liberal</a>,
      <a class="underline" href="https://twitter.com/simartgo" target="_blank">Silvia Martínez</a>
    </p>
  </div>
</article>
<Footer />

<style type="text/scss">
  .title-3 {
    @apply font-bold text-4xl  mt-12;
  }

  strong {
    font-weight: bold;
  }

  .chat-wrap {
    @apply border-[#f3f4f6] border-t-[15px] mb-12 rounded-[5px] border-l-[15px] border-r-[15px]  border-b-2 leading-[22px];
    & strong {
      background-color: #1ac37e;
      display: inline-block;
      color: white;
      padding: 0 2px;
    }
  }
  .chat-wrap-bing {
    @apply border-[#f3f4f6] border-t-[15px] mb-12 rounded-[5px] border-l-[15px] border-r-[15px]  border-b-2;
  }
</style>
