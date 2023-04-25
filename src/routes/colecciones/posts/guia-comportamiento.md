---
title: "Guía sobre Diseño del <br> Comportamiento"
date: "2021-01-30"

link: "https://cables.gl/view/2ZQap5"
titlelink: "Leer guia"

image: "/images/poster-guia.jpg"
alt: "Guía sobre Diseño del Comportamiento"

subtitle: Libro online para comprender la inclusión de Behavioral Economics en tecnología

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

Esta exploración visual es la combinación de tres elementos: la sonoridad de los sintetizadores analógicos [Strega de MakeNoise](https://www.makenoisemusic.com/synthesizers/strega) y [Subharmoniconde Moog](https://www.moogmusic.com/products/subharmonicon) ; Los visuales creados [enCables.gl](https://cables.gl/home) ; y las imágenes de cielos estrellados generadas por el modelo neuronal de nuestro proyecto [Denbora Latente](https://bikolabs.biko2.com/collections/denboralatente/).

<Video srcmp4="https://bikolabs.biko2.com/assets/videos/colecciones/lucidreams.mp4" srcogg="https://bikolabs.biko2.com/assets/videos/colecciones/lucidreams.ogv" caption="Cielos creados por Lucid dreams y nuestro modelo de generación de cielos con Stylegan2
" />

Todo empieza con una canción.
La melodía generada por Subharmonicon es filtrada por Strega como si fuera el abrazo de una bruja. Uno aporta la base drone y el otro juega con los armónicos. Todo unido al módulo eurorack Crimen y ornamento que con sus envolventes dan sentido a esta pieza sonora analógica.

<ImageRow src="/images/strega.jpg" alt="Strega" lastsrc="/images/subharmonico.jpg" lastalt="image2" caption="Strega de Make noise y Subharmonicon de Moog son dos sintetizadores semimodulares usados en esta pieza sonora" captionposition="top" />

La base sonora ha sido combinada con nuestro modelo Stylegan 2 de generación de cielos y Lucid Sonic Dreams Con Lucid sincronizamos la musica y el movimiento por el espacio latente de la red neuronal que genera infinitos cielos. Lucid permite ajustar, en este caso, el movimiento en relación con los armónicos

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
