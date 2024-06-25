<template>
  <div class="container position-absolute top-50 start-50 translate-middle">
    <div class="row justify-content-center text-center">
      <div class="col-md-8">
        <div class="card" v-if="weather">
          <div class="card-body row justify-content-center">
            <h3 class="card-title fs-1">{{ weather.cityName }}</h3>
            <img :src="weather.icon" alt="Weather Icon" v-if="weather.icon" />
            <p class="card-text">{{ weather.description }}</p>
            <p class="card-text">{{ weather.temperature }}°C</p>
          </div>
          <div class="card-footer">
            <div class="row marquee">
              <span class="col-4">Ressentie : {{ weather.feelslike }}°</span>
              <span class="col-4">Humiditée : {{ weather.humidity }}%</span>
              <span class="col-4">Pression : {{ weather.pressure }} hPa</span>
            </div>
          </div>
        </div>
        <p v-if="error" class="error text-danger">{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { WeatherInterface } from '../models/WeatherInterface'

defineProps<{
  weather: WeatherInterface
  error?: string
}>()
</script>

<style scoped>
.card {
  background-color: #1119289a;
  border-radius: 12px;
  border: 1px solid #ffffff20;
  color: aliceblue;
}

.card-body {
  height: 50vh;
  padding: 40px;
  font-size: 30px;
}

img {
  width: 80px;
  height: 60px;
}

.marquee {
  width: 100%;
  height: 30px;
  overflow: hidden;
  color: #fff;
  line-height: 30px;
  white-space: nowrap;
}

.marquee span {
  margin: auto;
  animation: marquee 10s linear infinite;
  letter-spacing: 1.5px;
}

@keyframes marquee {
  0% {
    transform: translateX(300%);
  }
  100% {
    transform: translateX(-300%);
  }
}
</style>
