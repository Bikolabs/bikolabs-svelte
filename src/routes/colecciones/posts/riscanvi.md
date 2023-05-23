---
title: "Algoritmos para presos: <br> El caso RisCanvi"
date: "2023-06-20"

link: "https://riscanvi.bikolabs.io/"
titlelink: "Entrar en la story"

image: "/images/riscanvi-h.png"
alt: "riscanvi"

subtitle: ¿Cómo medir si un algoritmo acierta cuando toma una decisión?

tags:
  - Story

layout: blog
---

<script>
  import Materials from "$lib/components/Materials/Materials.svelte";
</script>

Cuando se implementa un algoritmo para tomar decisiones importantes, presuponemos que es porque tiene un alto porcentaje de acierto. Pero no siempre conocemos este porcentaje, además de que son varias las medidas con las que se mide dicho acierto. Para que no haya engaños ni confusiones, es hora de comprender qué significan las medidas de acierto más usadas, con un ejemplo real: RisCanvi1.

## Proceso Investigador

Este trabajo se ha basado en el gran artículo de Garay (2016) 2 sobre el sistema de decisión automatizada RisCanvi, titulado "Errores conceptuales en la estimación de riesgo de reincidencia". Los datos utilizados en la story para ejemplificar las medidas pertenecen al único informe general publicado sobre RisCanvi hasta el momento sobre este sistema (del año 2015) 3. Los informes más actuales disponibles utilizan muestras muy específicas (sobre presos en libertad condicional, o de alto riesgo... ) que no permiten una evaluación más global del sistema.

## Nuevas formas de contar historias

Construir historias diferentes en un mundo donde lo homogéneo es casi la norma solo es posible si las propias herramientas permiten una dosis extra de singularidad. Para crear el caso de RisCanvi hemos usado Cables.gl un entorno de programación visual que nos ofrece esta singularidad tanto en el resultado como en la creación

1 Briz-Redón, A. & Montes, F. (2022). Análisis de los resultados del protocolo RisCanvi. Departament d'Estadística i Investigació Operativa. Universitat de València. https://www.uv.es/montes/informeriscanvi/informe.pdf

2 Garay, L. M. (2016). Errores conceptuales en la estimación de riesgo de reincidencia. Revista Española de Investigación Criminológica, 14, 1-31.

3 Capdevila, M., Ferrer, M., Blanch, M., Andrés, A., Framis, B., Comas, N., Garrigós, A. y Mora, J.(2015). Tasa de reincidencia Penitenciaria 2014.(Investigaciones CEJFE). Disponible en: http://cejfe.gencat.cat/ca/recerca/cataleg/crono/2015/reincidencia-2014/

### Materiales

<Materials category="Historia" links={[
['Algoritmos para presos: El caso RisCanvi', 'https://riscanvi.bikolabs.io/']
]}
/>

<Materials category="twitter" links={[
['Hilo sobre sistemas automatizados para tomar decisiones públicas de calado social', 'https://twitter.com/ujue/status/1613174680910761984']
]}
/>

<Materials category="Patch cables" links={[
['Acceso al Patch de cables.g', 'https://cables.gl/p/1AiNBm'],
]}
/>
