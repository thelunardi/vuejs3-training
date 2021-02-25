<template>
  <CustomHeader
    @create-account="handlerAccountCreate"
    @login="handlerLogin"
  />
  <Contact/>
  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">feedbacker &#169; 2012</p>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import CustomHeader from '@/views/Home/CustomHeader'
import Contact from '@/views/Home/Contact'
import useModal from '@/hooks/useModal'

export default {
  components: { Contact, CustomHeader },
  setup () {
    const router = useRouter()
    const modal = useModal()

    onMounted(() => {
      const token = window.localStorage.getItem('token')
      if (token) {
        router.push({ name: 'Feedbacks' })
      }
    })

    function handlerLogin () {
      modal.open({
        component: 'ModalLogin'
      })
    }

    function handlerAccountCreate () {
      modal.open({
        component: 'ModalAccountCreate'
      })
    }

    return {
      handlerLogin,
      handlerAccountCreate
    }
  }
}
</script>
