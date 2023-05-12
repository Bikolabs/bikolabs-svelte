<script>
  import Mail from "$lib/icons/Mail.svelte";
</script>

<div class="w-full">
  <div class="container pb-32">
    <div class="w-full tablet:w-[670px]">
      <p class="text-tertiarycolor font-bold text-left mb-10 desktop:mb-3 text-4xl font-secondary">
        Bikolabs, el estudio<br /><span class="text-black">(de intervención)</span> <br /> de Biko
      </p>
    </div>
    <div class="flex flex-col tablet:flex-row gap-5 justify-end">
      <div class="w-full desktop:w-1/3 desktop:px-3">
        <p class="mb-2">La tecnología impacta en cómo percibimos la realidad y cómo nos comportamos. Por eso, el propósito de Bikolabs es contribuir a que ese impacto sea positivo para la sociedad y las organizaciones.</p>
        <p>Para lograrlo, investigamos, intervenimos y divulgamos sobre la interacción entre personas y tecnología.</p>
      </div>
      <div class="w-full desktop:w-1/3 desktop:px-3">
        <p class="">Si tu propósito se parece al nuestro, es probable que podamos entendernos:</p>
        <div class="flex gap-2 items-center mt-4">
          <Mail styles="fill-secondarycolor" size="24" />
          <p
            id="contacto"
            class="
         font-primary text-secondarycolor"
          >
            <span class="font-bold">bikolabs@biko2.com</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
