<template>
    <div class="flex flex-col justify-around items-center">
        <div class="flex justify-between">
            <h1>Entre na sua conta</h1>
            <p>&times;</p>
        </div>
    </div>
    
</template>

<script setup>
import { reactive } from 'vue';

defineOptions({
    name: 'ModalLogin'
})

const state = reactive({
    hasErros: false,
    isLoading: false,
    email: {
        value: '',
        errorMessage: ''
    },
    password: {
        value: '',
        errorMessage: ''
    }
})
</script>