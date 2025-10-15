<template>
    <Teleport to="body">
        <div v-if="state.isActive" @click="handleModalToggle({status: false})" class="fixed top-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
            <div class="fixed" :class="state.width">
                <div class="flex flex-col items-center bg-white overflow-hidden animate__animated animate__backInDown">
                    <component :is="state.component" />
                </div>

            </div>
        </div>
    </Teleport>
</template>

<script setup>
import { defineAsyncComponent, isReactive, onBeforeUnmount, reactive } from 'vue';
import { onMounted } from 'vue';
import usemodal from '../../hooks/useModal'


const DEFAULT_WIDTH = 'w-3/4 lg:w-1/3'
const modal = usemodal()
const modalLogin = defineAsyncComponent(() => import('../modalLogin'))

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

function handleModalToggle ({status}){
     if(payload.status) {
        state.component = payload.component
        state.props = payload.props
        state.width = payload.width ?? DEFAULT_WIDTH
     } else {
        state.component = {}
        state.props = {}
        state.width = DEFAULT_WIDTH
     }
}


</script>