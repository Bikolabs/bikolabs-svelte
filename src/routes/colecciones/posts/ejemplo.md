---
title: "Ejemplo"

date: "1999-01-01"

link: "/colecciones/taller-dembora-latente"
titlelink:

image: "https://picsum.photos/1200/600"
alt: "riscanvi"

subtitle: Nam rick grimes malum cerebro.

tags:
  - formacion

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

<Embed type="youtube" src="https://www.youtube.com/watch?v=F_WC4UxStvs" styles="mt-20" />

<Embed type="cables" src="https://cables.gl/view/641d61206396c9c47b388a2e" styles="mt-30" />

<Image src="https://picsum.photos/600/600" alt="image" styles="my-5" caption='esto es un pie de foto en el top' captionposition="top" />

<Image src="https://picsum.photos/1200/500" alt="image" styles="border" />

<ImageRow src="https://picsum.photos/300/300" alt="image" lastsrc="https://picsum.photos/300/300" lastalt="image2" />

### Materiales

<Materials category="web" links={[
['Enlace 1', 'https://ejemplo.com/1'],
['Enlace 2', 'https://ejemplo.com/2'],
]}
/>

<Materials category="libros" links={[
['Enlace 1', 'https://ejemplo.com/1'],
]}
/>
