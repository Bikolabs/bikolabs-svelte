---
title: "Sesgo en la IA de <br> reconocimiento de objetos"

date: "2020-10-01"

link: "https://medium.com/bikolabs/el-automagico-traje-del-emperador-c2a0bbf6187b"
titlelink: "Visitar la web"

image: "/images/sesgos-hero.jpg"
alt: "Sesgos en IA"

subtitle: Investigación exploratoria para entender cómo la IA de reconocimiento de objetos etiqueta las imágenes

tags:
  - Experimento

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

Este proyecto surgió al descubrir, casi por casualidad, que Google Images etiquetaba de forma diferente las fotografías de hombres y mujeres, utilizando una categorización mucho más pobre para las imágenes de mujeres que para las de hombres. Tratando de comprender por este comportamiento, desde Bikolabs ahondamos en el funcionamiento de diferentes modelos de IA (como img2txt) y herramientas del mercado (como Amazon Rekognition).

Según nuestros resultados, parece que los modelos de IA para el reconocimiento de imágenes se utilizan con propósitos demasiado amplios, por lo que su fiabilidad y desempeño son peores de lo esperado.

Los experimentos sobre la IA de reconocimiento nos permitieron también confirmar el etiquetado sexista en herramientas como Amazon Rekognition. Al analizar con Rekognition fotografías de hombres y mujeres (en idéntica posición) que portaban objetos que históricamente se han entendido como estereotipados (escobas, taladros, martillos…), encontramos que el etiquetado cambiaba según el género. Nuestros experimentos y los resultados obtenidos pueden consultarse con detalle en el artículo extendido [“El automágico traje del emperador”](https://medium.com/bikolabs/el-automagico-traje-del-emperador-c2a0bbf6187b).

### Materiales

<Materials category="Artículo" links={[
['“El automágico traje del emperador”', 'https://medium.com/bikolabs/el-automagico-traje-del-emperador-c2a0bbf6187b'],
['"The Emperor’s automagical suit"', 'https://medium.com/bikolabs/the-emperors-automagical-suit-769079287f9f'],
]}
/>

<Materials category="Prensa" links={[
['Eldiario.es', 'https://www.eldiario.es/tecnologia/si-hombre-lleva-martillo-si-mujer-secador-actuan-sesgos-inteligencia-artificial_1_6210120.html'],
['Abc.es', 'https://www.abc.es/tecnologia/informatica/soluciones/abci-funcionan-sesgos-inteligencia-artificial-202009130134_noticia.html'],
['Elobservador.com.uy', 'https://www.elobservador.com.uy/nota/asi-un-experimento-desvela-sesgos-de-genero-en-la-inteligencia-artificial-20209111562'],
['Tn.com.ar (TodoNoticias)', 'https://tn.com.ar/tecno/los-sistemas-de-inteligencia-artificial-son-machistas-afirma-un-estudio/2020/09/14/254LA3RNZFEWZFF4XJHM6LJ5BA_story/'],
['Artículo especial en tn.com.ar (TodoNoticias)', 'https://tn.com.ar/tecno/2020/10/10/inteligencia-artificial-y-machismo-como-deconstruir-a-la-tecnologia/'],
['Estadored.mx', 'https://estadored.mx/2020/09/laboratorio-de-inteligencia-artificial-identifica-sesgos-de-genero-misoginia-y-machismo-en-tecnologias-de-reconocimiento-de-imagenes/'],
]}
/>

<Materials category="Medios especializados" links={[
['Computerhoy.com', 'https://computerhoy.com/noticias/tecnologia/estudio-machismo-sistemas-inteligencia-artificial-715235'],
['Maldita.es', 'https://maldita.es/malditatecnologia/2020/09/12/leer-algoritmos-sexistas-apps-peligrosas-ninos-tiktok/'],
['Agendasenior.com', 'https://agendasenior.com/futuro-inteligencia-artificial/'],
['Maldita tecnología', 'https://maldita.es/malditatecnologia/2020/10/21/algoritmo-sesgos-maldita-tecnologia-investigadores-inteligencia-artificial/'],
]}
/>

<Materials category="Radio" links={[
['Mención en el programa “Raíz de 5” de Radio5', 'https://computerhoy.com/noticias/tecnologia/estudio-machismo-sistemas-inteligencia-artificial-715235'],
['Entrevista en Radio 3 (transcripción Parte I)', 'https://blog.biko2.com/actualidad-biko/hacia-la-singularidad-o-hacia-un-nuevo-invierno-en-la-ia-una-entrevista-en-radio-3-i/'],
['Entrevista en Radio 3 (transcripción Parte II)', 'https://blog.biko2.com/actualidad-biko/hacia-la-singularidad-o-hacia-un-nuevo-invierno-en-la-ia-una-entrevista-en-radio-3-ii/'],
]}
/>

<Materials category="Audiovisual" links={[
['Programa Zoom Net de RTVE', 'https://www.rtve.es/alacarta/videos/zoom-net/irisbond-mascarilla-lg-bikolabs/5776985/'],
['Entrevista Maldita.es', 'https://maldita.es/malditatecnologia/2020/10/21/algoritmo-sesgos-maldita-tecnologia-investigadores-inteligencia-artificial/'],
]}
/>
