<template>
    <div>
      <RouterView />
      <modalFactory />
    </div>
  
</template>

<script setup>
import ModalFactory from './components/ModalFactory/index.vue'
</script>
