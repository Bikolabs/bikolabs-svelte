---
title: "Sebastian"

date: "2021-04-01"

link: ""
titlelink: ""

image: "/images/sebastian-hero.jpg"
alt: "Sebastian"

subtitle: El asistente que controla al asistente

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

Sebastian es un prototipo y a la vez una intervención para hacernos conscientes de cuáles son los límites de tu privacidad y control cuando usas un asistente de voz doméstico.

Se trata de un interruptor on/off del asistente de Google para permitir, a Google Home que escuche o no escuche. Si bien Google ya cuenta con un interruptor de apagado, esta acción implica accionar físicamente al dispositivo, por lo que más que una opción de control parece un elemento de diseño de fricción para prevenir que el asistente se apague.

Sebastian facilita que el control se pueda ejercer por la misma vía de interacción natural propia de un altavoz inteligente: la voz. Además, te informa del estado del sistema con un código de colores (apagado / escuchando).

<Embed type="youtube" src="https://www.youtube.com/embed/PH0PKbX-dio" styles="mb-4" />

Con el fin de evitar que el dispositivo se vuelva invisible y el estado “por defecto” de Google mantenga el altavoz en escucha de forma continua, Sebastian provoca momentos de consciencia o “puntos de decisión”, al recordarnos cada cierto tiempo que el dispositivo se encuentra activo y que es conveniente que decidamos cómo queremos que se comporte.

Además, a través de su pantalla de tinta y su aplicación móvil, es posible controlar qué conversaciones de las grabadas en el dispositivo queremos compartir y enviar a Google.

<ImageRow src="/images/sebastian-v.jpg" alt="image" lastsrc="/images/sebastian-h.jpg" lastalt="image2" />

### Materiales

<Materials category="Vídeo" links={[
['Aplicación para gestionar Sebastian', 'https://www.youtube.com/watch?v=33bK0_qtAxM'],
]}
/>

<Materials category="Artículos" links={[
['Cómo convivir con la tecnología', 'https://www.biko2.com/insights/'],
['El asistente que controla al asistente', 'https://www.xataka.com/accesorios/asistente-que-controla-al-asistente-este-interruptor-voz-genial-invento-para-decidir-cuando-queremos-ser-escuchados'],
]}
/>

<Materials category="Entrevista" links={[
['Hoy por hoy', 'https://play.cadenaser.com/audio/cadenaser_hoyporhoy_20200217_120000_122000/'],
]}
/>

<Materials category="RRSS" links={[
['Hilo en Twitter', 'https://twitter.com/patxangas/status/1200429815637131264'],
]}
/>
