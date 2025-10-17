<template>
    <div>
        <div class="flex justify-between w-100 mt-10">
            <h1 class="text-2xl">Entre na sua conta</h1>
            <button @click="closeModal" class="text-3xl text-gray-600 focus:outline-none cursor-pointer">&times;</button>
        </div>
        <div class="mt-6">
            <form @submit.prevent="handleSubmit">
                <div>
                    <label class="block" for="email">
                        <span 
                        class="text-lg font-medium text-gray-800">E-mail</span>
                        <input 
                        class="border rounded w-full bg-darkgray mb-5 h-8 p-4 mt-2" type="email" name="email" id="email" placeholder="exemplo@gmail.com"
                        :class="{'border-brand-danger': !!state.email.errorMessage}">
                        

                        <span v-if="!!state.email.errorMessage"
                        class="block font-medium text-brand-danger">
                            {{ state.email.errorMessage    }}
                        </span>
                        </label>
                </div>
                <div class="mt-5">
                    <label class="block" for="senha">
                        <span class="text-lg font-medium text-gray-800">Senha</span>
                    <input class="border rounded w-full bg-brand-gray h-8 p-4 mt-2" type="text" name="senha" id="senha"></label>
                </div>
            </form>
        </div>

    </div>
</template>

<script setup>
import { reactive } from 'vue'; 
import useModal from '@/hooks/useModal';

defineOptions({
    name: 'ModalLogin'
})

const modal = useModal();

function closeModal(){
     modal.close()
}

function handleSubmit(){

}

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