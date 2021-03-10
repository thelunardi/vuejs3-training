<template>
  <component :is="name" v-bind="$props"></component>
</template>

<script>
import Loading from './Loading'
import Copy from './Copy'
import ChevronDown from './ChevronDown'
import Chat from './Chat'
import Close from './Close'
import Back from './Back'

export default {
  components: { ChevronDown, Loading, Copy, Chat, Back, Close },
  props: {
    name: { type: String, required: true }
  }
}
</script>
