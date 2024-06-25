<template>
  <div id="app" class="container">
    <SearchBar v-model="city" @search="searchCity" />
    <WeatherInfo v-if="weather" :weather="weather" />
    <p v-if="error" class="error text-danger">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import WeatherInfo from './components/WeatherInfo.vue'
import SearchBar from './components/SearchBar.vue'
import { fetchWeather } from './services/WeatherService'
import type { WeatherInterface } from './models/WeatherInterface'

const city = ref('Bordeaux')
const weather = ref<WeatherInterface | null>(null)
const error = ref<string | null>(null)

onMounted(() => {
  searchCity()
})

const searchCity = async () => {
  if (city.value) {
    try {
      weather.value = await fetchWeather(city.value)
      error.value = null
    } catch (err) {
      console.error(err)
      weather.value = null
      error.value = "Les données météo n'ont pas pu être récupérées."
    }
  }
}
</script>
