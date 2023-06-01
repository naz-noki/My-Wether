<template>
    <div class="wrapper__additionally">
      <div class="additionally__item">
        <div class="additionally__item__title">Cloud cover</div>
        <img src="/img/Cloud.png" alt="" class="additionally__item__img">
        <div class="additionally__item__info">{{ Wether.clouds }}</div>
      </div>
      <div class="additionally__item">
        <div class="additionally__item__title">Humidity</div>
        <img src="/img/Humidity.png" alt="" class="additionally__item__img">
        <div class="additionally__item__info">{{ Wether.humidity }}</div>
      </div>
      <div class="additionally__item">
        <div class="additionally__item__title">Pressure</div>
        <img src="/img/Pressure.png" alt="" class="additionally__item__img">
        <div class="additionally__item__info">{{ Wether.pressure }}</div>
      </div>
      <div class="additionally__item">
        <div class="additionally__item__title">Wind speed</div>
        <img src="/img/Wind.png" alt="" class="additionally__item__img">
        <div class="additionally__item__info">{{ Wether.wind_speed }}</div>
      </div>
      <div class="additionally__item">
        <div class="additionally__item__title">Deg</div>
        <img src="/img/Deg.png" alt="" class="additionally__item__img">
        <div class="additionally__item__info">{{ Wether.deg }}</div>
      </div>
    </div>
</template>

<script setup lang="ts">

  const { Wether } = defineProps(['Wether']);

</script>

<style scoped>
  @import url(@/assets/mainPage/additionally.css);
</style>