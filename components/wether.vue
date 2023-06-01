<template>
  <section 
  :class="{
    container__background_1: BackgroundCount === 1,
    container__background_2: BackgroundCount === 2,
    container__background_3: BackgroundCount === 3,
    container__background_4: BackgroundCount === 4,
    container__background_5: BackgroundCount === 5,
  }"
  class="container"
  >
    <div class="wrapper">

      <searchCity />
      
      <img
        :src="`/img/bg${BackgroundCount}.png`" 
        alt="" 
        class="bg-img"
      >
  
      <wetherInfo :Wether="Wether" />
  
      <additionally :Wether="Wether" />

    </div>
  </section>
</template>
    
  <script setup lang="ts">
    
    import { useStore } from 'vuex';
    import { computed, ref, onMounted, watch, } from 'vue';
    import Iwether from '../types/Iwether';
    import getTemp from '../mixins/getTemp';
    import getTime from '../mixins/getTime';
    import getBackground from '../mixins/getBackground';
  
    const store = useStore();
  
    const WetherLink = computed<string>(()=>store.getters.getWetherLink);
  
    const Wether = ref<Iwether>({} as Iwether);
    const BackgroundCount = ref<number>(getBackground(Wether.value));
  
    const getWether = async ():Promise<void> => {
      const answer =  await fetch(`${WetherLink.value}`);
      const data = await answer.json();
      Wether.value = {
        name: data.name,
        clouds: data.clouds.all,
        temp: getTemp(data.main.temp),
        temp_max: getTemp(data.main.temp_max)+1,
        temp_min: getTemp(data.main.temp_min)-1,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        wind_speed: data.wind.speed,
        deg: data.wind.deg,
        time: getTime(data.timezone),
      }
      BackgroundCount.value = getBackground(Wether.value);
    }
  
    watch(WetherLink, getWether);
    onMounted(getWether);
  
  </script>