<template>
  <component :is="name" v-bind="$props"></component>
</template>

<script>
import Loading from './Loading'
import Copy from '@/components/Icon/Copy'

export default {
  components: { Loading, Copy },
  props: {
    name: { type: String, required: true }
  }
}
</script>
