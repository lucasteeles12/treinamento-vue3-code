<template>
   <header class="header">
    <div class="flex flex-col justify-around w-4/5 max-w-6xl">
        <div class="flex justify-between">
            <div class="w-28 lg:w-36">
                <img  class="w-full " src="../../assets/images/logo_white.png" alt="Logo">
            </div>
            <div class="flex justify-evenly w-60">
                <button class="h-10">Crie uma conta</button>
                <button id="bor" class="h-10  w-25 text-brand-main  bg-white">Entrar</button>
            </div>
        </div>

        <div class="flex justify-between text-white font-bold text-4xl">
            <h1>Tenha um feedback. <br> E faça seus clientes mais <br> felizes!</h1>
        </div>


    </div>


    

   </header>
</template>

<style lang="postcss" scoped>
.header{
    height: 500px;
    background-color: #EF4983;
    display: flex;
    justify-content: center;
    
}
#bor {
    border-radius: calc(infinity * 1px);
}
</style>