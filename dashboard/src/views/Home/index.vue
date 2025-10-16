<template>
  <div>
      <customHeader @create-account="handleAccountCreate"  @login="handleLogin"/>
      <contacts />
      <footer class="flex justify-center items-center bg-brand-gray h-25">
        <p>feedbacker © 2025</p>
      </footer>

  </div>
  
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import customHeader from './customHeader.vue';
import contacts from './contacts.vue';
import useModal from '../../hooks/useModal';
import ModalLogin from '../../components/ModalLogin/index.vue'; 

defineOptions({
  name: 'indexHome'
})

const router = useRouter()
const modal = useModal()

onMounted(() => {
  const token = window.localStorage.getItem('token')
  if(token){
    router.push({name: 'Feedbacks'})

  }
})

function handleLogin(){
  modal.open({
    
    component: ModalLogin
  })

}

function handleAccountCreate(){
  
}
</script>