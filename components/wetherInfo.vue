<template>
  <section class="wrapper__info">
      <div class="info__currentTemp">
        {{ Wether.temp }}°C
      </div>
      <div class="info__additionallyTemp">
        <div class="additionallyTemp__item">
          H : {{ Wether.temp_max }}°
        </div>
        <div class="additionallyTemp__item">
          L : {{ Wether.temp_min }}°
        </div>
      </div>
      <div class="wrapper__position">
      <img src="/img/position__icon.png" alt="" class="position__icon">
      <div class="position__text">
        {{ Wether.name }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

    const { Wether } = defineProps(['Wether']);

</script>

<style scoped>
  @import url(@/assets/mainPage/wetherInfo.css);
</style>