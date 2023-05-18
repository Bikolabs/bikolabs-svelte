---
title: "Sumalim <br> NodeST"
date: "2022-06-20"

image: "/images/nodo.gif"
alt: "riscanvi"

subtitle: Una herramienta de enseñanza creada para que educadoras y educadores faciliten el aprendizaje y la práctica de disciplinas STEM.

tags:
  - Proyecto

layout: blog
---

<script>
  import Image from "$lib/image/Image.svelte";
  import ImageRow from "$lib/layout/ImageRow/ImageRow.svelte";
  import Embed from "$lib/components/Embed/Embed.svelte";
  import Video from "$lib/components/Video/Video.svelte"
  import Materials from "$lib/components/Materials/Materials.svelte";
</script>

Una propuesta educativa en el ambito STEAM, que combina elementos físicos, como el kit de programación, con elementos digitales; ejercicios para practicar en un editor de código. Esta combinación pretende facilitar la comprensión de los conceptos abstractos de la programación, trasladándolos al plano físico de una forma directa e intuitiva.

Este proyecto de prototipo es una colaboración con Sumalim. Con este prototipo buscamos comprobar la viabilidad de transformar el nodo del parque interactivo de Sumalim en un proyecto educativo STEAM

El prototipo ha constado de varias partes, hemos usado la Raspberry pico como pieza de electrónica creativa, conectándola al nodo y mediante el entorno educativo de Adafruit Circuit python poder crear unas unidades de introducción a la programación

<ImageRow src="/images/codeSumalim.png" alt="Code" lastsrc="/images/kitSumalim2-h.jpg" lastalt="Kit" />
<Image src="/images/packSumalim-h.jpg" alt="Code"  />

### Materiales

<Materials category="Documentación" links={[
['Guía NodeST', 'https://sumalim.notion.site/sumalim/NodeST-9e1385c68a3a4a869c7d9437d585b600']
]}
/>
