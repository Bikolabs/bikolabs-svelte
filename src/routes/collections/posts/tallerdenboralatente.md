---
title: "¿Podemos los <br> humanos ser creativos<br> (o artistas) cuando usamos la IA?"
date: "2022-04-01"

link: ""
titlelink: ""

image: "/images/podemos-ser-creativos.png"
alt: "¿Podemos los humanos ser creativos o artista cuando usamos la IA?"

subtitle: Un taller para explorar la relación entre la Inteligencia Artificial y los procesos creativos o artísticos

tags:
  - Formación

layout: blog
---

<script>
  import Image from "$lib/image/Image.svelte";
  import ImageRow from "$lib/layout/ImageRow/ImageRow.svelte";
  import Materials from "$lib/components/Materials/Materials.svelte";
  import Video from "$lib/components/Video/Video.svelte"
</script>

¿Podemos los humanos ser creativos (o artistas) cuando usamos la IA? Con esta pregunta y nuestro proyecto Denbora Latente preparamos un taller para explorar la relación entre la Inteligencia Artificial y los procesos creativos o artísticos. La aproximaciones a un taller práctico sobre IA para artistas (más concretamente, sobre Machine Learning) puede ser muy variadas. Tanto en el enfoque como en las herramientas.

Nuestro taller es un tanto especial ya que empezamos por lo que suele ser la segunda parte de este tipo de formaciones, o incluso de la que no se habla. Primero hablamos de ética, de política, de tecnología y de arte. Para eso intentaremos responder a estos impedimentos que vemos cuando como artistas/creativos trabajamos en una pieza con Inteligencia Artificial.

El segundo bloque del taller (segundo día) nos referimos a la obra Denbora Latente que se proyectó en la fachada del Kursaal durante Diciembre de 2021, para reflexionar sobre estos impedimentos pero también poder ver técnicamente y conceptualmente cómo se ha trabajado en la obra.
Tanto en la obra como en el taller empleamos Runway y python (mediante Colab) ya que nos permite comprender el concepto de espacio latente fundamental en los sistemas generativos tipo GANs.

### Materiales

<Materials category="Actividad" links={[
['Comunicación del taller en Tabakalera', 'https://www.tabakalera.eus/es/podemos-los-humanos-ser-creativos-o-artistas-cuando-usamos-la-ia/'],
]}
/>

<Materials category="Twitter" links={[
['Hilo explicativo sobre el taller', 'https://bikolabs.biko2.com/collections/tallerdenboralatente/#:~:text=Hilo%20explicativo%20sobre%20el%20taller'],
]}
/>

<Materials category="Apuntes" links={[
['Guía sobre el taller y materiales para los modelos GANs en Runway y cuadernos Codelab', 'https://talleresbikolabs.notion.site/talleresbikolabs/Denbora-Latente-Taller-fabf620939034815ac4be16a7c06f76e'],
]}
/>

<Materials category="Instalación" links={[
['Información sobre la obra artística Denbora Latente', 'https://bikolabs.biko2.com/collections/denboralatente/'],
]}
/>

<Video srcmp4="https://bikolabs.biko2.com/assets/videos/colecciones/lucidreams.mp4" srcogg="https://bikolabs.biko2.com/assets/videos/colecciones/lucidreams.ogv" caption="Cielos creados por Lucid dreams y nuestro modelo de generación de cielos con Stylegan2
" />

Para la visualización y para la unión de todas estas partes (audio, vídeo, IA) usamos Cables.gl. Cables.gl es una herramienta para crear contenido interactivo en la WebGL en tiempo real. Es un entorno orientada a nodos que permite "programar" con otros paradigmas visuales basados en conexiones.
Strega Soinu Latente es una nube de partículas que bailan por un espacio latente.

<Image src="/images/cables.jpg" alt="" position="right" styles="my-20" />

### Materiales

<Materials category="web" links={[
['Strega Make Noise.', 'https://ejemplo.com/1'],
['Subharmonicon Moog.', 'https://ejemplo.com/2'],
['Módulo ornament & crime', 'https://ejemplo.com/2'],
]}
/>

<Materials category="cables.gl" links={[
['Cables.gl', 'https://ejemplo.com/1'],
['Patch de Strega soniu lantente en Cables.gl', 'https://ejemplo.com/1'],
]}
/>

<Materials category="IA COLAB" links={[
['Cuaderno colab para crear vídeos con Lucid Dreams', 'https://ejemplo.com/1'],
]}
/>
