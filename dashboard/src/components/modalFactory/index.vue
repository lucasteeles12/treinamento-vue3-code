<template>
    <Teleport to="body">
        <div v-if="state.isActive" @click="handleModalToggle({status: false})" class="fixed top-0 left-0 z-50 flex justify-center items-center w-full h-full  bg-black/50">
            <div class="fixed" :class="state.width" @click.stop>
                <div class="h-120 w-120 flex flex-col items-center bg-white overflow-hidden rounded-lg animate__animated animate__backInDown">
                    <component :is="state.component" />
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import { defineAsyncComponent, isReactive, onBeforeUnmount, reactive } from 'vue';
import { onMounted } from 'vue';
import useModal from '../../hooks/useModal';

const ModalLogin = defineAsyncComponent(() => import ('@/components/ModalLogin/index.vue'))


const DEFAULT_WIDTH = 'w-3/4 lg:w-1/3'
const modal = useModal()

const state = reactive({
    isActive: false,
    component: {},
    props: {},
    width: DEFAULT_WIDTH
     
})

onMounted(() => {
    modal.listen(handleModalToggle)
})

onBeforeUnmount(() => {
    modal.off(handleModalToggle)
})

function handleModalToggle (payload){
     if(payload.status) {
        state.component = payload.component
        state.props = payload.props
        state.width = payload.width ?? DEFAULT_WIDTH
     } else {
        state.component = {}
        state.props = {}
        state.width = DEFAULT_WIDTH
     }
     state.isActive = payload.status
}

</script>