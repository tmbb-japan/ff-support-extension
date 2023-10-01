<template>
  <div>
    <h1>Error 페이지</h1>
    <p>{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  error: String,
});

const errorMessage = ref(props.error);
</script>
