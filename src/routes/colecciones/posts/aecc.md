---
title: "Aecc"

date: "2019-05-01"

link: ""
titlelink:

image: "/images/list-aecc.jpg"
alt: "El código como una forma de expresión"

subtitle: Triaje con IA en la Asociación Española Contra el Cáncer

tags:
  - Proyecto web

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

Proyecto para la AECC para reducir el distrés de los usuarios afectados por el cáncer en su búsqueda de la información o servicios que necesitan de la asociación. Utilizando un sistema de machine learning con procesamiento del lenguaje natural, se construyó una interfaz capaz de responder a las necesidades expresadas por los usuarios, simplificando y amabilizando los procesos para pacientes y familiares que necesitan ayuda.

<Image src="/images/aecc-h.jpg" alt="triaje mediante ia" caption="Formulario con machine learning para simplificar y amabilizar los procesos de pacientes y familiares que necesitan ayuda." styles="mb-6" />

Se conectaron Tensorflow, Dialogflow y Drupal para una mejor gestión del aprendizaje del modelo y una mayor conexión con los contenidos y la gestión de la web de la asociación.

<Image src="/images/aecc-h2.jpg" alt="triaje mediante ia" position="right" />

### Materiales

<Materials category="Artículo" links={[
['Asociación Española contra el Cáncer', 'https://www.contraelcancer.es/es/cuentanos-tu-situacion'],
]}
/>
