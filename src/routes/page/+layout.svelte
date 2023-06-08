<script>
  import "../../app.css";
</script>

<svelte:head>
  <title>La empanada de ChatGPT</title>
  <meta name="title" content="Title | Bikolabs" />
  <meta name="description" content="Description" />
  <!-- Twitter Card data -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="Bikolabs, el estudio (de intervención) de Biko" />
  <meta
    name="twitter:title"
    content="Investigamos, intervenimos y divulgamos
sobre la interacción entre personas y
tecnología."
  />
  <meta name="twitter:description" content="Bikolabs, el estudio (de intervención) de Biko" />
  <meta name="twitter:creator" content="@biko2" />
  <!-- Las imágenes de sumario de Twitter deben ser de al menos 200x200px -->
  <meta name="twitter:image:src" content="/images/web/redes/home.png" />

  <!-- Open Graph data -->
  <meta property="og:title" content="Bikolabs, el estudio (de intervención) de Biko" />
  <meta
    property="og:description"
    content="Investigamos, intervenimos y divulgamos
sobre la interacción entre personas y
tecnología."
  />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://bikolabs.biko2.com/" />
  <meta property="og:site_name" content="Bikolabs, el estudio (de intervención) de Biko" />
  <meta property="og:image" content="/images/web/redes/home.png" />
  <meta property="og:locale" content="ES_es" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;600;700&family=Permanent+Marker&family=Raleway:wght@400;500;700&display=swap" rel="stylesheet" />
</svelte:head>

<main>
  <slot />
</main>
