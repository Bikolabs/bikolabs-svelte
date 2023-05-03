<script>
  import Item from "./Item.svelte";
</script>

<div class="container mb-40">
  <div>
    <h3 class="font-bold text-3xl font-primary text-secondarycolor mb-3">
      Se dice, se comenta...
    </h3>
    <p class="">Entrevistas en Radio y Tv</p>
  </div>
  <div class="flex flex-row flex-wrap mt-10">
    <Item
      title="Zoom.net"
      description="Entrevista a Ujue y Karlos en el podcast eduHacking"
      logo="/images/web/logos/rtve.jpg"
      link="/"
    />
    <Item
      title="Xataka artículo"
      description="Nuestro proyecto Sebastian en Xataka"
      logo="/images/web/logos/xataka.jpeg"
      link="/"
    />
    <Item
      title="Entrevista en Eitb"
      description="Entrevista a Ujue y Karlos en el podcast eduHacking"
      logo="/images/web/logos/eitb.png"
      link="/"
    />
    <Item
      title="Elconfidencial"
      description="Entrevista a Ujue y Karlos en el podcast eduHacking"
      logo="/images/web/logos/elconfidencial.svg"
      link="/"
    />
    <Item
      title="eduHacking Podcast"
      description="Entrevista a Ujue y Karlos en el podcast eduHacking"
      logo="/images/web/logos/eduhacking.png"
      link="/"
    />
  </div>
</div>
