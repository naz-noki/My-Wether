<template>
    <div class="searchCity">
        <input 
        v-model="cityName"
        type="text" 
        class="searchCity__inp"
        placeholder="Enter the name of the city..."
        >
        <button 
        @click="AddCityName"
        class="searchCity__button"
        >
            <img src="/img/searchCity.png" alt="" class="searchCity__button__img">
        </button>
    </div>
</template>

<script setup lang="ts">

    import { ref, } from 'vue';
    import { useStore } from  'vuex';

    const store = useStore();

    const cityName = ref<string>('');

    const AddCityName = ():void => {
        if(cityName.value !== '') store.dispatch('actAddCityName', cityName.value); 
    }

</script>

<style>
    @import url(../assets/mainPage/searchCity.css);
</style>