<script>
  import Hero from "$lib/components/Hero/Hero.svelte";
  import Stories from "$lib/views/Stories.svelte";
  import Colections from "$lib/views/Colections.svelte";
  import TeaserList from "$lib/components/TeaserList/TeaserList.svelte";
  import Footer from "$lib/components/Footer/Footer.svelte";

  export let data;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte starter Kit" />
</svelte:head>
<section>
  <Hero />
  <Stories {data} />
  <div class="w-full">
    <div class="container pt-32 tablet:pt-40 flex justify-end">
      <div class="w-[670px]">
        <p
          class="text-5xl font-primary text-tertiarycolor font-bold text-right"
        >
          Pre-cognitions son las <span class="text-secondarycolor fancy">
            intervenciones</span
          > que nos permiten adelantarnos al futuro.
        </p>
      </div>
    </div>
    <Colections {data} />
    <div class="w-full">
      <div class="container pt-32 tablet:py-40 flex justify-start">
        <div class="w-[670px]">
          <p
            class="text-5xl font-primary text-tertiarycolor font-semibold text-left"
          >
            En Bikolabs siempre tenemos diversas <span
              class="text-secondarycolor">líneas de investigación abiertas</span
            > sobre la relación entre personas y tecnología.
          </p>
        </div>
      </div>
      <!-- list -->
      <div class="w-full">
        <div class="container">
          <section class="py-10 text-white">
            <TeaserList
              title="Strega Soniu Latente"
              description="Una exploración visual de música generativa e inteligencia Artificial y Cables.gl"
              category="Pieza artística"
              link={`/colecciones/aaa`}
            />
            <TeaserList
              title="Strega Soniu Latente"
              description="Una exploración visual de música generativa e inteligencia Artificial y Cables.gl"
              category="Pieza artística"
              link={`/colecciones/aaa`}
            />
            <TeaserList
              title="Strega Soniu Latente"
              description="Una exploración visual de música generativa e inteligencia Artificial y Cables.gl"
              category="Pieza artística"
              link={`/colecciones/aaa`}
            />
          </section>
        </div>
      </div>
      <!-- ./list -->
    </div>
  </div>
</section>
<Footer />

<style>
  .fancy {
    @supports (background-clip: text) or (-webkit-background-clip: text) {
      background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjEwODAiIGZpbGw9IiNkZjY2ODgiLz48cGF0aCBkPSJNIDAsMTA4MCBDIDAsMTA4MCAwLDU0MCAwLDU0MCBDIDExMi43OTk5OTk5OTk5OTk5OCw0NjUuNDAwMDAwMDAwMDAwMDMgMjI1LjU5OTk5OTk5OTk5OTk3LDM5MC44MDAwMDAwMDAwMDAwNyAzMTcsNDA2IEMgNDA4LjQwMDAwMDAwMDAwMDAzLDQyMS4xOTk5OTk5OTk5OTk5MyA0NzguNCw1MjYuMTk5OTk5OTk5OTk5OSA2MDIsNTU2IEMgNzI1LjYsNTg1LjgwMDAwMDAwMDAwMDEgOTAyLjgwMDAwMDAwMDAwMDIsNTQwLjQwMDAwMDAwMDAwMDEgMTAxOCw1NjIgQyAxMTMzLjE5OTk5OTk5OTk5OTgsNTgzLjU5OTk5OTk5OTk5OTkgMTE4Ni4zOTk5OTk5OTk5OTk5LDY3Mi4yIDEyODUsNjg0IEMgMTM4My42MDAwMDAwMDAwMDAxLDY5NS44IDE1MjcuNiw2MzAuOCAxNjQxLDU5NCBDIDE3NTQuNCw1NTcuMiAxODM3LjIsNTQ4LjYgMTkyMCw1NDAgQyAxOTIwLDU0MCAxOTIwLDEwODAgMTkyMCwxMDgwIFoiIGZpbGw9IiMzZDEwNTMiIG9wYWNpdHk9IjAuMyIvPjwvc3ZnPg==");
      background-position: center;
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
    }
  }
</style>
