<script>
  export let title;
  export let logo;
  export let link;
  export let description;
</script>

<div
  class="item-wrap text-center desktop:text-left w-full tablet:w-[300px] desktop:w-[215px]"
>
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
    @apply transition;
  }
  .medios-item {
    width: 100px;
    height: 50px;
    @apply flex items-center justify-center;
  }

  .item-wrap {
    @apply p-4 m-4;
  }

  .item-wrap:hover .item-title {
    @apply text-black;
  }
  .item-wrap:hover img.bw {
    filter: grayscale(0);
    opacity: 1;
  }
</style>
