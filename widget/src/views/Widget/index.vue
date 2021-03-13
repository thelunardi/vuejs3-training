<template>
  <teleport to="body">
    <component
      @open-box="handleOpenBox"
      @close-box="handleCloseBox"
      :is="state.component"
    />
  </teleport>
</template>

<script lang="ts">
import { defineComponent, watch, reactive } from 'vue'
import Box from './Box.vue'
import Standby from './Standby.vue'
import useIFrameControl from '@/hooks/iframe'
import useStore from '@/hooks/index'

type State = {
  component: string;
}

interface SetupReturn {
  state: State;
  handleOpenBox(): void;
  handleCloseBox(): void;
}

export default defineComponent({
  components: { Box, Standby },
  setup () {
    const store = useStore()
    const iframe = useIFrameControl()
    const state = reactive<State>({
      component: 'Standby'
    })

    watch(() => store.currentComponent, () => {
      iframe.updateCoreValueOnStore()
    })

    function handleOpenBox (): void {
      iframe.notifyOpen()
      state.component = 'Box'
    }

    function handleCloseBox (): void {
      iframe.notifyClose()
      state.component = 'Standby'
    }

    return {
      state,
      handleCloseBox,
      handleOpenBox
    }
  }
})
</script>
