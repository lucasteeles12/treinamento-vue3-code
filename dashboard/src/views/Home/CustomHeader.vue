<template>
   <header class="header">
    <div class="flex flex-col justify-around w-4/5 max-w-6xl">
        <div class="flex justify-between">
            <div class="w-28 lg:w-36">
                <img  class="w-full " src="../../assets/images/logo_white.png" alt="Logo">
            </div>
            <div class="flex justify-evenly w-60">
                <button class="text-white" @click="emit('create-account')">Crie uma conta</button>
                <button class="h-10  w-25 font-bold  text-brand-main rounded-full  bg-white" @click="emit('login')">Entrar</button>
            </div>
        </div>

        <div class="flex justify-between">
            <div class="flex flex-col justify-evenly text-white">
                <h1 class="font-bold text-4xl">Tenha um feedback. <br> E faça seus clientes mais <br> felizes!</h1>
                <p >Receba ideias, reclamações e feedbacks com um <br> simples widget na página.</p>
                <button class="bg-white font-bold text-brand-main h-10 w-42 rounded-full" @click="emit('create-account')">Crie uma conta grátis</button>
            </div>
            <div>
                <img src="../../assets/images/blue_balloons.png" width="400px" alt="balões">
            </div>
        </div>


    </div>


    

   </header>
</template>

<script setup>
const emit = defineEmits(['create-account', 'login'])
</script>


<style lang="postcss" scoped>
.header{
    height: 500px;
    background-color: #EF4983;
    display: flex;
    justify-content: center;
    
}

</style>