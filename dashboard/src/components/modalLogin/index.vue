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
                        v-model="state.email.value"
                        :class="{'border-brand-danger': !!state.email.errorMessage}">
                        

                        <span v-if="!!state.email.errorMessage"
                        class="block font-medium text-brand-danger">
                            {{ state.email.errorMessage  }}
                        </span>
                        </label>
                </div>
                <div class="mt-5">
                    <label class="block" for="password">
                        <span class="text-lg font-medium text-gray-800">Senha</span>
                    <input 
                    class="border rounded w-full bg-brand-gray h-8 p-4 mt-2"
                    type="password" name="password" id="password"
                    v-model="state.password.value"
                    :class="{'border-brand-danger': !!state.password.errorMessage}">
                    
                    <span v-if="!!state.password.errorMessage"
                    class="block font-medium text-brand-danger">
                        {{ state.password.errorMessage  }}
                    </span>
                </label>
                </div>

                <button 
                class="border mt-5 rounded-full w-25 p-1 bg-brand-main
                text-white transition-all duration-150"
                :disabled="state.isLoading"
                type="submit"
                :class="{
                'opacity-50': state.isLoading
                }">
                    Entrar
                </button>
            </form>
        </div>

    </div>
</template>

<script setup>
import { reactive } from 'vue'; 
import useModal from '@/hooks/useModal';
import { useField } from 'vee-validate';
import { validateEmptyAndLength3 } from '@/utils/validators';
import { validateEmptyAndEmail } from '@/utils/validators';

defineOptions({
    name: 'ModalLogin'
})

const modal = useModal();

const {
    value: emailValue,
    errorMessage: emailErrorMessage
} = useField('email', validateEmptyAndEmail)

const {
    value: passwordValue,
    errorMessage: passwordErrorMessage
} = useField('password', validateEmptyAndLength3)

function closeModal(){
     modal.close() 
}

function handleSubmit(){

}

const state = reactive({
    hasErros: false,
    isLoading: false,
    email: {
        value: emailValue,
        errorMessage: emailErrorMessage
    },
    password: {
        value: passwordValue,
        errorMessage: passwordErrorMessage
    }
})

</script>