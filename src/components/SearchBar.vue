<template>
  <div class="row justify-content-center mt-5 mb-5">
    <div class="col-md-6 col-sm-10">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Entrez une ville"
          aria-label="CityName"
          aria-describedby="basic-addon1"
          :value="modelValue"
          @input="onInput"
          @keyup.enter="onSearch"
        />
        <button class="btn" type="button" @click="onSearch">🔍</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'search'): void
}>()

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement | null
  if (target) {
    emit('update:modelValue', target.value)
  }
}

const onSearch = () => {
  emit('search')
}
</script>

<style scoped>
.form-control {
  background-color: #1119289a;
  border-radius: 12px !important;
  border: 1px solid #ffffff20;
  caret-color: #fff;
  color: #fff;
}

.form-control::placeholder {
  color: rgba(240, 248, 255, 0.558);
}
</style>
