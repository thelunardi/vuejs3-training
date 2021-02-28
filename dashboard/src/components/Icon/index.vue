<template>
  <component :is="name" v-bind="$props"></component>
</template>

<script>
import Loading from './Loading'
import Copy from './Copy'
import ChevronDown from './ChevronDown'

export default {
  components: { ChevronDown, Loading, Copy },
  props: {
    name: { type: String, required: true }
  }
}
</script>
