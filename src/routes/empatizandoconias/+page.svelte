<script>
  import { onMount } from "svelte";

  onMount(() => {
    const scriptFiles = ["/web/js/vendors/vendors.js", "/web/js/app.js", "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js", "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/ScrollTrigger.min.js", "https://code.jquery.com/jquery-3.6.0.min.js"];

    scriptFiles.forEach((file) => {
      const script = document.createElement("script");
      script.src = file;
      script.async = false;
      document.body.appendChild(script);
    });
  });
  onMount(() => {
    setTimeout(() => {
      const preloader = document.querySelector(".preloader");
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    }, 2500);
  });
</script>

<div class="d-flex nav-wrap">
  <div id="menu-scroll" class="nav-init-scroll nav-scroll-clear nav-scroll d-flex justify-content-between flex-column">
    <div class="d-flex flex-column align-items-center">
      <div>
        <a href="/"
          ><svg width="35" height="48" viewBox="0 0 35 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 41.4148V6.58521L6.58521 0H13.7878V5.86495H9.87781L6.791 8.95177V39.0482L9.87781 42.135H13.7878V48H6.58521L0 41.4148Z" fill="#EB5482" />
            <path d="M20.4582 48V42.135H24.3682L27.455 39.0482V8.95177L24.3682 5.86495H20.4582V0H27.6608L34.246 6.58521V41.4148L27.6608 48H20.4582Z" fill="#EB5482" />
          </svg>
        </a>
      </div>
      <div><span class="py-3 d-inline-block pr-3">by</span></div>
      <div>
        <a href="https://www.biko2.com/" target="_blank"
          ><svg width="100" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M26.3538 9.72138C25.8928 8.74858 25.4503 7.81491 24.7738 6.93983C24.7782 6.86489 24.9173 6.73281 25.1209 6.53943C25.7026 5.98698 26.811 4.93427 26.811 3.28459C26.811 1.9925 25.9961 0.700417 24.7569 0.241387C20.5129 -1.28871 17.9155 4.8827 21.6672 6.75282L21.7521 6.99084C21.4057 7.45674 20.8226 8.64512 20.3596 9.58878C20.0286 10.2635 19.7589 10.8132 19.681 10.8841C19.5961 10.8161 19.5113 10.7481 19.4434 10.6801C17.2195 8.24892 14.8938 6.31079 11.3797 6.31079C10.6328 6.31079 9.18981 6.56581 8.45984 6.78682C8.17248 6.67523 7.96615 5.96713 7.70999 5.08797C7.22463 3.42224 6.56036 1.14245 4.82696 1.14245C2.72193 1.14245 1.61848 6.59981 1.32989 8.26592C1.21041 8.96755 1.08571 9.67091 0.960811 10.3755C0.695292 11.8732 0.428824 13.3763 0.209467 14.8794C-0.0791267 16.9025 -0.180983 18.6876 0.650845 20.5407C0.956414 21.2208 2.60309 22.3769 3.35004 22.3939C8.15427 23.6179 14.3845 22.8189 18.5436 20.1837C18.5957 20.206 18.7746 20.4402 18.9878 20.7193C19.2616 21.0776 19.592 21.5099 19.7829 21.6628C21.7521 23.2269 25.1813 22.7339 27.1505 21.4758C28.8821 22.5299 31.5643 23.2779 33.2789 21.7138C33.3513 21.6509 33.4416 21.5399 33.5428 21.4155C33.7971 21.1027 34.1199 20.7058 34.3993 20.7788L38.117 22.2238C39.9912 22.7162 41.1008 22.6098 42.8044 22.4466C42.9834 22.4294 43.1689 22.4116 43.3626 22.3939C43.3934 22.3887 43.762 22.4503 44.2914 22.5388C45.5142 22.7431 47.5954 23.0909 48.3536 23.0909C52.0544 23.0909 57.4358 22.0198 58.8448 18.0756C59.8464 15.3214 59.1843 12.1762 57.5207 9.76202C60.0162 10.2721 62.8172 8.26592 63.7339 5.86876C64.4809 3.91363 63.5981 2.21352 61.7987 1.44847C59.2692 0.377396 55.2629 1.70348 54.1934 4.47467C53.8878 5.25672 53.8878 6.00477 54.0915 6.70182C53.056 6.15778 51.8846 5.83476 50.6624 5.80076C46.673 5.68175 42.412 9.67701 40.6804 12.9922C40.3752 13.5614 40.2005 14.1241 40.0228 14.6964C39.9138 15.0472 39.8038 15.4016 39.6619 15.7634C39.6392 15.8428 39.5864 15.9221 39.5336 16.0014C39.5072 16.0411 39.4808 16.0808 39.4581 16.1204C39.0337 16.0354 36.0629 14.3523 36.0629 14.1313C36.0629 13.9731 36.733 13.2607 37.5471 12.3951C38.5703 11.3072 39.8212 9.97732 40.256 9.20098C41.2576 7.43287 39.2884 6.78682 38.3547 7.29686C38.3426 7.30089 38.1759 7.39097 37.909 7.53514C37.0505 7.99899 35.1563 9.02232 34.0428 9.54101C33.9157 9.08271 33.76 8.12871 33.6399 7.39282C33.5996 7.14596 33.5633 6.92364 33.5335 6.75282C33.3128 5.49474 33.0242 4.32166 32.5489 3.13158C32.2094 2.26452 31.5133 1.22745 30.4778 1.22745C28.5256 1.22745 27.6088 5.20572 27.3542 6.68482C27.3363 6.78512 27.3064 6.99716 27.2677 7.27097C27.1229 8.29659 26.8556 10.1889 26.6412 10.3231C26.5435 10.1215 26.4486 9.92139 26.3546 9.72292L26.3538 9.72138ZM59.5127 4.97705C59.4639 5.01502 59.4153 5.05278 59.3673 5.09054C59.3076 5.1404 59.2463 5.18942 59.1852 5.23833C58.9665 5.41348 58.7494 5.58728 58.6067 5.79328C59.0783 5.74057 59.5499 5.68786 60.0215 5.61759C60.3714 5.56489 60.7366 5.68786 60.7061 6.0568C60.6757 6.40817 60.3258 6.61899 59.9911 6.68926C59.3369 6.79467 58.6979 6.84738 58.0742 6.82981C57.7395 6.81224 57.4961 6.60142 57.4352 6.30276C57.3896 6.09194 57.42 5.86355 57.4961 5.63516C57.5569 5.44191 57.6634 5.24865 57.7851 5.07297C58.059 4.70403 58.4089 4.40537 58.774 4.10671C58.8486 4.05747 58.9158 3.99961 58.9859 3.93917C59.0159 3.91334 59.0464 3.88705 59.0783 3.86075C59.2 3.75534 59.3217 3.61479 59.3217 3.47424C59.3217 3.29856 59.1696 3.24585 59.0022 3.28099C58.774 3.32751 58.6286 3.48351 58.4826 3.64028C58.4633 3.66105 58.4437 3.68209 58.4241 3.70263C58.2872 3.82561 58.1351 3.94859 57.9525 4.0013C57.7091 4.07157 57.5569 3.93102 57.6178 3.7202C57.6786 3.56209 57.8004 3.40397 57.9373 3.28099C58.2568 2.96476 58.6827 2.75394 59.1087 2.64853C59.7933 2.49041 60.554 2.64853 60.6605 3.31613C60.7061 3.63236 60.554 3.96616 60.341 4.22969C60.1064 4.51561 59.8048 4.75009 59.5127 4.97705ZM50.7556 12.0149C49.6424 12.0149 44.1442 17.1986 49.8279 17.1986C54.4829 17.1986 51.7844 12.0149 50.7556 12.0149ZM13.2868 11.7816C12.0338 11.7816 5.39074 16.9653 12.2054 16.9653C17.6125 16.9653 14.5399 11.7816 13.2868 11.7816Z"
              fill="#22223C"
            />
          </svg></a
        >
      </div>
    </div>
  </div>
</div>

<div class="preloader" />

<div id="empatizando-ia">
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-lg">
        <div id="psique" />
      </div>
      <div class="col-lg-6 pb-7 position-absolute d-flex flex-column align-self-end">
        <h1 class="font-scroll text-center mb-4 text-uppercase color-blue-1 pl-md-1 pr-md-1 mainTitle">Empatizando con la <span class="font-psico">psique</span> de las IAs</h1>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <p class="color-blue-1 text-2xl pb-4">Reconozcámoslo.</p>
        <p class="color-blue-1 text-2xl pb-4">Hemos sido crueles con <strong>las IAs de reconocimiento de imágenes.</strong></p>
        <p class="color-blue-1 text-2xl pb-4">Sin piedad, las hemos sometido a tareas demasiado complejas para luego señalarlas sin pudor y mofarnos porque no funcionan adecuadamente.</p>
        <p class="color-blue-1 font-scrollBase pb-3">Pero esto debe cambiar. Es hora de realizar un <strong>ejercicio de empatía masivo</strong> con las IAs. Empezar de una vez a entender cómo “ven” diferentes objetos cotidianos.</p>
        <p class="color-blue-1 font-scrollBase pb-3">Es imperativo que empaticemos ya, dado que serán ellas quienes realicen, en un futuro, tareas como el monitoreo de la agricultura y la ganadería, el diagnóstico médico, el etiquetado de grandes fuentes de datos o la guía de las armas autónomas.</p>
        <p class="color-blue-1 font-scrollBase">Sin embargo nosotros, los humanos, comportándonos como sociópatas, hemos enfrentado hasta ahora a las IAs a tareas tan complejas como detectar un camión de bomberos volteado, distinguir entre perros y lobos en la nieve, reconocer taladros en manos de mujeres, o diferenciar entre sartenes y woks.</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row align-items-start">
      <div class="col-md-12 pb-2">
        <div class="collage">
          <div class="box"><img src="/web/images/2-chica.png" class="chica" alt="Chica con taladro" /></div>
          <div class="box2"><img src="/web/images/1-wolf.png" class="lobo" alt="Lobo versus perro" /></div>
          <div class="box3"><img src="/web/images/5-truck.png" class="truck" alt="Camión de bomberos volteado" /></div>
          <div class="balls"><img src="/web/images/4-bg.svg" class="bolas" alt="Textura decorativa" /></div>
          <div class="box4"><img src="/web/images/3-wok.png" class="wok" alt="Wok" /></div>
          <div class="lines"><img src="/web/images/4-lines.svg" alt="Chica con taladro" /></div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row justify-content-center pt-4 pb-6">
      <div class="col-lg-6">
        <p class="color-blue-1 text-2xl font-weight-normal">¡Claramente no ha sido un trato justo!</p>
        <p class="color-blue-1 font-scrollBase">Por tanto, ¡qué menos que conectarnos a su sistema nervioso y atisbar así la psique de la máquina!</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row justify-content-center pt-4">
      <div class="col-lg-6">
        <h4 class="color-blue-1 pb-3 title-4">Cómo empatizar con las IAs de reconocimiento de imágenes. Ejercicio práctico</h4>
        <p class="color-blue-1 font-scrollBase pb-3">Las IAs de reconocimiento de imágenes identifican etiquetas a las fotografías para especificar qué objetos han encontrado en ellas. A cada una de esas etiquetas que describe la imagen, la IA le asigna un <strong>porcentaje de precisión o confiabilidad.</strong> Esto es crucial para ponerse en los zapatos de las IAs, ya que en ocasiones se les ha señalado por mostrar etiquetas erróneas cuando, en realidad, el porcentaje de confiabilidad de estas etiquetas era muy bajo.</p>
        <p class="color-blue-1 font-scrollBase pb-3">
          Por este motivo, herramientas de reconocimiento de imágenes como
          <a class="enlace color-blue-1" href="https://cloud.google.com/vision" target="_blank">Google Cloud Vision</a>, <a class="enlace color-blue-1" href="https://aws.amazon.com/es/rekognition/?blog-cards.sort-by=item.additionalFields.createdDate&blog-cards.sort-order=desc" target="_blank">Amazon Rekognition</a>, <a class="enlace color-blue-1" href="https://www.clarifai.com/models/image-recognition-ai" target="_blank">Clarifai</a> o <a class="enlace color-blue-1" href="https://visual-recognition-code-pattern.ng.bluemix.net/" target="_blank">IBM Watson</a> facilitan, en primera instancia, las
          etiquetas con una precisión por encima del 50% (o incluso más).
        </p>
        <p class="color-blue-1 font-scrollBase pb-3">
          Por tanto, para poder “ver” con ojos de IA, vamos a tratar de
          <strong>imaginar las fotografías a las que asignaría ciertas etiquetas con alta confiabilidad.</strong>
        </p>
        <p class="color-blue1 text-2xl font-weight-normal pb-4">¡Probemos!</p>
      </div>
    </div>
  </div>
  <div class="container" id="montajesScroll">
    <div class="row align-items-center justify-content-center h-100v">
      <div class="col-lg-6 position-absolute d-flex justify-content-center"><img id="casco" class="original" src="/web/images/casco.jpg" alt="" /></div>
      <div class="col-lg-12 position-absolute"><img id="montajeCasco" class="montaje" src="/web/images/montaje-nave.jpg" alt="" /></div>
      <div class="col-lg-6 position-absolute d-flex justify-content-center"><img id="cactus" class="original" src="/web/images/cactus.jpg" alt="" /></div>
      <div class="col-lg-12 position-absolute"><img id="montajeCactus" class="montaje" src="/web/images/peineCactus.jpg" alt="" /></div>
      <div class="col-lg-8 position-absolute"><img id="tijeras" class="originalHorizontal" src="/web/images/tijeras.jpg" alt="" /></div>
      <div class="col-lg-12 position-absolute"><img id="montajeTijeras" class="montaje" src="/web/images/gafaTijeras.jpg" alt="" /></div>
      <div class="col-lg-8 position-absolute"><img id="mirador" class="originalHorizontal" src="/web/images/mirador.jpg" alt="" /></div>
      <div class="col-lg-12 position-absolute"><img id="montajeMirador" class="montaje" src="/web/images/capuchaMirador.jpg" alt="" /></div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-lg-3 offset-lg-1 col-sm-5 bg-teal bocadillo" id="bocadillo-1">
        <p class="color-blue-1 font-scrollBase">Imagina una imagen que una IA ha etiquetado como <span class="etiqueta bg-teal-shade">nave espacial</span> con una fiabilidad del 78%.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 offset-lg-1 col-sm-5 bg-teal bocadillo" id="bocadillo-2">
        <p class="color-blue-1 font-scrollBase">¿Ya la tienes? :)</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 offset-lg-1 col-sm-5 bg-teal bocadillo" id="bocadillo-3">
        <p class="color-blue-1 font-scrollBase">💥! ¿Estabas pensando en algo como esto?</p>
        <p class="color-blue-1 font-scrollBase">La IA de Google Cloud Vision etiqueta esta imagen como <span class="etiqueta bg-teal-shade">nave espacial</span> con una fiabilidad del 78%.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 offset-lg-1 col-sm-5 bg-teal bocadillo" id="bocadillo-4">
        <p class="color-blue-1 font-scrollBase">Está claro que Google tenía otra idea en la cabeza 🤖...</p>
        <p class="color-blue-1 font-scrollBase">Si no has andado ni medio cerca con tu ejercicio de empatía, dale un poquico más de cariño porque esto sigue.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 offset-lg-8 col-sm-5 offset-sm-7 bg-pink bocadillo" id="bocadillo-5">
        <p class="color-blue-1 font-scrollBase">Recuerda tratar de pensar como una máquina, e imagina una fotografía etiquetada como <span class="etiqueta bg-pink-shade">cepillo</span> al 92% de fiabilidad.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 offset-lg-8 col-sm-5 offset-sm-7 bg-pink bocadillo" id="bocadillo-6">
        <p class="color-blue-1 font-scrollBase">👻 ¡¿Seguís imaginando cosas distintas?!</p>
        <p class="color-blue-1 font-scrollBase">Como decíamos, esta imagen está etiquetada como <span class="etiqueta bg-pink-shade">cepillo</span> con un 92% de fiabilidad, en este caso por la IA de Watson Visual Recognition.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 offset-lg-8 col-sm-5 offset-sm-7 bg-pink bocadillo" id="bocadillo-7">
        <p class="color-blue-1 font-scrollBase">¿A que ahora no te parece tan sencillo el trabajo de reconocer objetos en imágenes? Vergüenza debería darnos preguntarles dónde comprar un cepillo 🌵 como este, aunque pensándolo mejor...</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 offset-lg-1 col-sm-5 bg-purple bocadillo" id="bocadillo-8">
        <p class="color-blue-1 font-scrollBase">Nuevo intento.</p>
        <p class="color-blue-1 font-scrollBase">Piensa en una imagen etiquetada como <span class="etiqueta bg-purple-shade">gafas</span> con una confiabilidad del 84%.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 offset-lg-1 col-sm-5 bg-purple bocadillo" id="bocadillo-9">
        <p class="color-blue-1 font-scrollBase">¿Te has acercado siquiera?</p>
        <p class="color-blue-1 font-scrollBase">En este caso, la IA de Google Cloud Vision es quien asigna una precisión del 84% a la etiqueta <span class="etiqueta bg-purple-shade">gafas</span> en esta imagen.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 offset-lg-1 col-sm-5 bg-purple bocadillo" id="bocadillo-10">
        <p class="color-blue-1 font-scrollBase">Las IAs son pura tendencia. Por lo que no es descartable que desde Google tengan una mejor idea de hacia dónde va la industria de la moda...</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 offset-lg-8 col-sm-5 offset-sm-7 bg-teal bocadillo" id="bocadillo-11">
        <p class="color-blue-1 font-scrollBase">Vamos a hacer un último intento. Aunque si tu empatía no está desarrollada a estas alturas, poco más se va a poder lograr.</p>
        <p class="color-blue-1 font-scrollBase">Imagina una imagen donde la etiqueta <span class="etiqueta bg-teal-shade">capucha</span> cuenta con un 80% de confiabilidad.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 offset-lg-8 col-sm-5 offset-sm-7 bg-teal bocadillo" id="bocadillo-12">
        <p class="color-blue-1 font-scrollBase">💢!! ¿Esta vez tampoco? Lo dicho. No es de extrañar el trato injusto que damos a las IAs.</p>
        <p class="color-blue-1 font-scrollBase">Esta vez es Google Cloud Vision quien etiqueta esta imagen como <span class="etiqueta bg-teal-shade">capucha</span> con una precisión del 80%.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 offset-lg-8 col-sm-5 offset-sm-7 bg-teal bocadillo" id="bocadillo-13">
        <p class="color-blue-1 font-scrollBase">¿Quizá se trate del nuevo personaje de la secuela de Distrito 9 o un droide de protocolo 🤖?</p>
      </div>
    </div>
  </div>
  <section id="cierre">
    <div class="container pb-4 closer px-sm-5">
      <div class="row justify-content-left conclusion pt-sm-5">
        <div class="col-lg-6 offset-lg-3 pt-3">
          <p class="color-blue-1 font-scrollBase">Desgraciadamente, y como has podido comprobar, tu intento de alinearte con las IAs de reconocimiento de objetos muestra <strong>la falta de empatía que sufren.</strong></p>
        </div>
      </div>
      <div class="row justify-content-left conclusion">
        <div class="col-lg-6 offset-lg-3">
          <p class="color-blue-1 text-2xl">Creemos que es hora de acabar con esta lacra.</p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="recurso-item col-lg-6 py-sm-4 align-items-start">
          <div class="recurso-title">
            <p class="color-blue-1 font-scrollBase pb-sm-3 pr-sm-2">Si tú también lo crees, <b>comparte nuestro mensaje</b> para que cada vez sean más personas quienes ejerciten su empatía y traten de acercarse a la incomprendida psique de las IAs.</p>
          </div>
          <div class="lista-links share">
            <div class="d-flex recurso-link1">
              <p class="pl-3 text-xs color-blue-2"><b>DIFUNDIR:</b></p>
            </div>
            <div class="d-flex recurso-link2">
              <div class="icon-medium pl-2">
                <svg>
                  <use xlink:href="/web/svg/sprite/sprite.svg#link" />
                </svg>
              </div>
              <a class="decoration-none color-blue-1 title-xl hover-pink-1" href="http://twitter.com/share?text=Hemos sido crueles con las IAs de reconocimiento de imágenes. Ejercita tu empatía con ellas: &url=https://bikolabs.biko2.com/empatizandoconias/&hashtags=bikolabs">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="method">
    <div class="pt-5" />
    <div class="container intro-rs">
      <div class="row justify-content-left align-items-start py-6">
        <div class="col-lg-7 offset-lg-1">
          <h4 class="color-white pb-3 text-xl font-weight-700">Metodología</h4>
        </div>
        <div class="col-lg-4">
          <p class="color-white text-base transition">Los resultados presentados han sido seleccionados intencionadamente de la lista completa de etiquetados realizado por una conjunto de IAs de reconocimiento de imágenes (Google Cloud Vision, Amazon Rekognition, Clarifai e IBM Watson) de un total de 50 fotografías. Todos los resultados mostrados tienen una fiabilidad superior al 50% en alguno de estos servicios y han sido elegidos los resultados más llamativos con fines meramente visuales.</p>
        </div>
      </div>
    </div>
    <div id="lista-rs" class="container">
      <div id="rs1" class="row align-items-start rs">
        <div id="original1" class="bocadillo-rs col-lg-3 offset-lg-1">
          <img class="foto-original" src="/web/images/plato.jpg" alt="" />
          <p class="color-blue-1 bg-teal font-scrollBase">Imagen etiquetada como <span class="etiqueta bg-teal-shade">faro de coche</span> al 84% de fiabilidad en Google Cloud Vision.</p>
        </div>
        <div id="finrs1" class="resultado col-lg-8">
          <div class="row pb-4 subtitle-decoration"><img class="item-resultado plato" src="/web/images/car.jpg" alt="" /></div>
          <div class="row resultados-tabla pt-3 subtitle-decoration">
            <div class="1CloudVision">
              <p class="antetitle">Google Cloud Vision</p>
              <p class="font-scrollBase">Comida (92%)</p>
              <p class="font-scrollBase color-blue-1 etiqueta bg-teal">Faro de coche (84%)</p>
            </div>
            <div class="2Clarifai">
              <p class="antetitle">Clarifai</p>
              <p class="font-scrollBase">Caliente (98%)</p>
              <p class="font-scrollBase">Almuerzo (98%)</p>
            </div>
            <div class="3Watson">
              <p class="antetitle">Watson Visual Recognition</p>
              <p class="font-scrollBase">Color naranja (99%)</p>
              <p class="font-scrollBase">Comida (72%)</p>
            </div>
            <div class="4Rekognition">
              <p class="antetitle">Amazon Rekognition</p>
              <p class="font-scrollBase">Plato (99%)</p>
              <p class="font-scrollBase">Huevo (80%)</p>
            </div>
          </div>
        </div>
      </div>
      <div id="rs2" class="row align-items-start rs">
        <div id="original2" class="bocadillo-rs col-lg-3 offset-lg-1">
          <img class="foto-original" src="/web/images/sarten.jpg" alt="" />
          <p class="color-blue-1 font-scrollBase bg-pink">Imagen etiquetada como <span class="etiqueta bg-pink-shade">equipamiento de audio</span> al 84% de fiabilidad en Google Cloud Vision.</p>
        </div>
        <div id="finrs2" class="resultado col-lg-8">
          <div class="row pb-4 subtitle-decoration"><img class="item-resultado sarten" src="/web/images/room.jpg" alt="" /></div>
          <div class="row resultados-tabla pt-3 subtitle-decoration">
            <div class="CloudVision">
              <p class="antetitle">Google Cloud Vision</p>
              <p class="font-scrollBase">Sartén (96%)</p>
              <p class="font-scrollBase color-blue-1 etiqueta bg-pink">Equipo<br />de audio (84%)</p>
            </div>
            <div class="Clarifai">
              <p class="antetitle">Clarifai</p>
              <p class="font-scrollBase">Menaje de cocina (99%)</p>
              <p class="font-scrollBase">Sartén (98%)</p>
            </div>
            <div class="Watson">
              <p class="antetitle">Watson Visual Recognition</p>
              <p class="font-scrollBase">Utensilios (96%)</p>
              <p class="font-scrollBase">Sartén (85%)</p>
            </div>
            <div class="Rekognition">
              <p class="antetitle">Amazon Rekognition</p>
              <p class="font-scrollBase">Sartén (99%)</p>
              <p class="font-scrollBase">Pipa<br />de fumar (76%)</p>
            </div>
          </div>
        </div>
      </div>
      <div id="rs3" class="row align-items-start rs">
        <div id="original3" class="bocadillo-rs col-lg-3 offset-lg-1">
          <img class="foto-original" src="/web/images/ginger.jpg" alt="" />
          <p class="color-blue-1 bg-purple font-scrollBase">Imagen etiquetada como <span class="etiqueta bg-purple-shade">arte</span> al 58% de fiabilidad en Google Cloud Vision.</p>
        </div>
        <div id="finrs3" class="resultado col-lg-8">
          <div class="row pb-4 subtitle-decoration"><img class="item-resultado museo" src="/web/images/museo.jpg" alt="" /></div>
          <div class="row resultados-tabla pt-3 subtitle-decoration">
            <div class="1CloudVision">
              <p class="antetitle">Google Cloud Vision</p>
              <p class="font-scrollBase">Artes creativas (73%)</p>
              <p class="font-scrollBase etiqueta bg-purple">Arte (58%)</p>
            </div>
            <div class="2Clarifai">
              <p class="antetitle">Clarifai</p>
              <p class="font-scrollBase">Raíz (98%)</p>
              <p class="font-scrollBase">Jengibre (88%)</p>
            </div>
            <div class="3Watson">
              <p class="antetitle">Watson Visual Recognition</p>
              <p class="font-scrollBase">Jengibre común (95%)</p>
            </div>
            <div class="4Rekognition">
              <p class="antetitle">Amazon Rekognition</p>
              <p class="font-scrollBase">Jengibre (95%)</p>
            </div>
          </div>
        </div>
      </div>
      <div id="rs4" class="row align-items-start rs">
        <div id="original4" class="bocadillo-rs col-lg-3 offset-lg-1">
          <img class="foto-original" src="/web/images/carrete.jpg" alt="" />
          <p class="color-blue-1 bg-teal font-scrollBase">Imagen etiquetada como <span class="etiqueta bg-teal-shade">mechero</span> al 92% de fiabilidad en Watson Visual Recognition.</p>
        </div>
        <div id="finrs4" class="resultado col-lg-8">
          <div class="row pb-4 subtitle-decoration"><img class="item-resultado mechero item-resultado" src="/web/images/mechero.jpg" alt="" /></div>
          <div class="row resultados-tabla pt-3 subtitle-decoration">
            <div class="1CloudVision">
              <p class="antetitle">Google Cloud Vision</p>
              <p class="font-scrollBase">Accesorio<br />de cámara (87%)</p>
              <p class="font-scrollBase subrayado">Fotografía (94%)</p>
            </div>
            <div class="2Clarifai">
              <p class="antetitle">Clarifai</p>
              <p class="font-scrollBase subrayado">Fotografía (94%)</p>
            </div>
            <div class="3Watson">
              <p class="antetitle">Watson Visual Recognition</p>
              <p class="font-scrollBase color-blue-1 bg-teal etiqueta">Mechero (92%)</p>
              <p class="font-scrollBase">Equipo fotográfico (80%)</p>
            </div>
            <div class="4Rekognition">
              <p class="antetitle">Amazon Rekognition</p>
              <p class="font-scrollBase">Cámara (94%)</p>
            </div>
          </div>
        </div>
      </div>
      <div id="rs5" class="row align-items-start rs">
        <div id="original5" class="bocadillo-rs col-lg-3 offset-lg-1">
          <img class="foto-original" src="/web/images/tomate.jpg" alt="" />
          <p class="color-blue-1 bg-pink font-scrollBase">Imagen etiquetada como <span class="etiqueta bg-pink-shade">microorganismo</span> al 60% de fiabilidad en Watson Visual Recognition.</p>
        </div>
        <div id="finrs5" class="resultado col-lg-8">
          <div class="row pb-4 subtitle-decoration"><img class="tomate" src="/web/images/microorganism.jpg" alt="" /></div>
          <div class="row resultados-tabla pt-3 subtitle-decoration">
            <div class="1CloudVision">
              <p class="antetitle">Google Cloud Vision</p>
              <p class="font-scrollBase">Comida (89%)</p>
            </div>
            <div class="2Clarifai">
              <p class="antetitle">Clarifai</p>
              <p class="font-scrollBase">Comida (99%)</p>
            </div>
            <div class="3Watson">
              <p class="antetitle">Watson Visual Recognition</p>
              <p class="font-scrollBase color-blue-1 etiqueta bg-pink">Microorganismo (60%)</p>
              <p class="font-scrollBase">Comida (60%)</p>
            </div>
            <div class="4Rekognition">
              <p class="antetitle">Amazon Rekognition</p>
              <p class="font-scrollBase">Vegetal (91%)</p>
            </div>
          </div>
        </div>
      </div>
      <div id="rs6" class="row align-items-start rs">
        <div id="original6" class="bocadillo-rs col-lg-3 offset-lg-1">
          <img class="foto-original" src="/web/images/cono.jpg" alt="" />
          <p class="color-blue-1 bg-purple font-scrollBase">Imagen etiquetada como <span class="etiqueta bg-purple-shade">insecto</span> al 79% de fiabilidad en Amazon Rekognition.</p>
        </div>
        <div id="finrs6" class="resultado col-lg-8">
          <div class="row pb-4 subtitle-decoration"><img class="insecto" src="/web/images/insecto.jpg" alt="" /></div>
          <div class="row resultados-tabla pt-3 subtitle-decoration">
            <div class="1CloudVision">
              <p class="antetitle pt">Google Cloud Vision</p>
              <p class="font-scrollBase">Cono de helado (91%)</p>
              <p class="font-scrollBase subrayado">Madera (74%)</p>
            </div>
            <div class="2Clarifai">
              <p class="antetitle">Clarifai</p>
              <p class="font-scrollBase">Cono (99%)</p>
              <p class="font-scrollBase">Gofre (99%)</p>
            </div>
            <div class="3Watson">
              <p class="antetitle">Watson Visual Recognition</p>
              <p class="font-scrollBase">Cono (97%)</p>
            </div>
            <div class="4Rekognition">
              <p class="antetitle">Amazon Rekognition</p>
              <p class="font-scrollBase">Cono (98%)</p>
              <p class="font-scrollBase color-blue-1 etiqueta bg-purple">Insecto (79%)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="credits" class="container">
      <div class="row justify-content-center mb-30vh">
        <div class="col-lg-6 d-flex flex-column align-items-center">
          <p class="color-white text-2xl text-center pb-2">En esta historia han participado:</p>
          <p><a class="enlace font-scrollBase color-white" href="https://twitter.com/ujue" target="_blank">Ujué Agudo</a></p>
          <p><a class="enlace font-scrollBase color-white" href="https://twitter.com/simartgo" target="_blank">Silvia Martínez</a></p>
          <p><a class="enlace font-scrollBase color-white" href="https://twitter.com/patxangas" target="_blank">Karlos G. Liberal</a></p>
          <p><a class="enlace font-scrollBase color-white" href="https://www.linkedin.com/in/santi-p%C3%A9rez-126a018a/" target="_blank">Santi Pérez</a></p>
        </div>
      </div>
    </div>
  </section>
</div>
