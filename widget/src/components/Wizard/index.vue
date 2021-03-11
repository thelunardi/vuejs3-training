<template>
  <component
    :is="store.currentComponent"
    @select-feedback-type="handleSelectFeedbackType"
    @next="next"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import useStore from '@/hooks/index'
import useNavigation, { Navigation } from '@/hooks/navigation'
import SelectFeedbackType from './SelectFeedbackType.vue'
import WriteFeedback from './WriteFeedback.vue'
import Success from './Success.vue'
import ErrorState from './Error.vue'
import { StoreState, setFeedbackType } from '@/store/index'

interface SetupReturn {
  store: StoreState;
  handleSelectFeedbackType(type: string);
  next: Navigation['next'];
}

export default defineComponent({
  components: { SelectFeedbackType, WriteFeedback, Success, Error: ErrorState },
  setup (): SetupReturn {
    const store = useStore()
    const { next } = useNavigation()

    function handleSelectFeedbackType (type: string) {
      setFeedbackType(type)
    }

    return {
      store,
      handleSelectFeedbackType,
      next
    }
  }
})
</script>
