---
title: "Migrantes vs. IA"

date: "2018-02-04"

link: ""
titlelink:

image: "/images/migrantesIA.gif"
alt: "Migrantes vs. IA"

subtitle: Intervención para reflexionar sobre la confianza en las herramientas en temas de impacto social como la migración

tags:
  - Prototipo

layout: blog
---

<script>
  import Link from "$lib/components/Link/link.svelte";
  import ArrowLink from "$lib/icons/ArrowLink.svelte";
  import Image from "$lib/image/Image.svelte";
  import ImageRow from "$lib/layout/ImageRow/ImageRow.svelte";
  import Embed from "$lib/components/Embed/Embed.svelte";
  import Materials from "$lib/components/Materials/Materials.svelte";
  import Video from "$lib/components/Video/Video.svelte";
</script>

Este prototipo busca poner en cuestión la confianza ciega que se deposita en los modelos predictivos y la crudeza de algunos temas, como la de los procesos migratorios, que se deshumanizan al intervenir la IA. Y el vehículo para visibilizar esta cuestión es, precisamente, crear uno de estos modelos predictivos.

A partir de los los datos de procesos migratorios facilitados por las ONGs, entrenamos un modelo de machine learning que predice la muerte o desaparición de un migrante y la ubica en un punto concreto del mapa del mundo.

Este prototipo fue finalista en el Mozilla y se encuentra inacabado, a la espera de captar fondos para continuar con su desarrollo. Su propósito es concienciar sobre la aplicación de la tecnología en decisiones de carácter social y humanitario.

<Image src="/images/migrantesIA-h2.jpg" caption="
Mapa global con todos los puntos donde se ha reportado la muerte o desaparición de un migrante." />

### Materiales

<Materials category="web" links={[
['Prototipo online', 'https://migrantsvsia.interzonas.info/'],
]}
/>

<Materials category="github" links={[
['Código del proyecto', 'https://github.com/karlosgliberal/MigrantsVsIA'],
]}
/>
