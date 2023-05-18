---
title: "Generación de imágenes con IA a partir de texto"
date: "2021-02-01"

link: ""
titlelink: ""

image: "/images/generacion.png"
alt: "generación de imágenes mediante IA"

subtitle: Utilización de la red neuronal CLIP con propósito generativo

tags:
  - Exploración

layout: blog
---

<script>
  import Image from "$lib/image/Image.svelte";
  import ImageRow from "$lib/layout/ImageRow/ImageRow.svelte";
  import Materials from "$lib/components/Materials/Materials.svelte";
  import Video from "$lib/components/Video/Video.svelte"
</script>

Iniciativa exploratoria para descubrir las posibilidades de la generación de imágenes a partir de texto. Para ello, usamos la red neuronal CLIP de OpenIA, que permite la clasificación de imágenes usando procesamiento de lenguaje natural, pero para un propósito distinto, inspirados por la iniciativa del artista generativo @advadnoun.

A partir de un texto (por ejemplo, "Cabaña en un prado con estilo 8bits"), la parte generadora del modelo inicia un espacio latente aleatorio que funciona a modo de coordenadas, para que CLIP "busque" en ese espacio latente el par imagen+texto. Para forzar el estilo gráfico deseado, determinamos como semilla una imagen propia y, al finalizar la generación, pasamos el resultado por un modelo de super resolución.

<Image src="/images/generacionImg-sq.jpg" alt="" position="right" />
<Video srcmp4="/videos/generacionImg-h3.mp4" srcogg="/videos/generacionImg-h3.ogv" caption="Vídeo generado de la suma de las distintas transformaciones de la imagen original." />
<Image src="/images/generacionImg-sq.png" position="right" />

### Materiales

<Materials category="Rrss" links={[
['Hilo en Twitter', 'https://twitter.com/patxangas/status/1394414864488075266?s=20'],
]}
/>
