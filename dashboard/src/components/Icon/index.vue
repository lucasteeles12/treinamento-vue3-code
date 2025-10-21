<template>
    <div>
    <component :is="name" />
    </div>
</template>

<script setup>
import Loading from './Loading.vue'
defineProps({
    name: {String, required:true }
})
</script>