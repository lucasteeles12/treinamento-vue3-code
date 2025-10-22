<template>
    <div>
    <component :is="name" v-bind="$props" />
    </div>
</template>

<script setup>
import Loading from './Loading.vue'

const props = defineProps({
    name: {String, required:true }
})
</script>