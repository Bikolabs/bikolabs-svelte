<script>
  import "../app.css";
</script>

<svelte:head>
  <title>Title</title>
  <meta name="title" content="Title | Bikolabs" />
  <meta name="description" content="Description" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&family=Permanent+Marker&family=Raleway:wght@400;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main>
  <slot />
</main>
