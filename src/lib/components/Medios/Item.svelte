<script>
  export let title;
  export let logo;
  export let link;
  export let description;
</script>

<div class="item-wrap">
  <a href={link}>
    <div class="flex items-center justify-center">
      <div class="medios-item mb-5">
        <img class="bw" src={logo} alt={title} />
      </div>
    </div>
    <div>
      <p class="item-title font-semibold transition">
        {title}
      </p>
      <p class="text-min transition">{description}</p>
    </div>
  </a>
</div>

<style>
  img.bw {
    filter: grayscale(3);
    opacity: 0.6;

    object-fit: cover;
  }
  .medios-item {
    width: 100px;
    height: 50px;
    @apply flex items-center justify-center;
  }

  .item-wrap {
    @apply w-[230px] p-4 m-4;
  }

  .item-wrap:hover .item-title {
    @apply text-primarycolor;
  }
  .item-wrap:hover img.bw {
  }
</style>
