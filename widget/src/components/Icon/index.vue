<template>
  <component :is="name" v-bind="$props"></component>
</template>

<script>
import Loading from './Loading'
import Check from './Check'
import Attention from './Attention'
import Chat from './Chat'
import Close from './Close'
import Back from './Back'

export default {
  components: { Check, Loading, Attention, Chat, Back, Close },
  props: {
    name: { type: String, required: true }
  }
}
</script>
