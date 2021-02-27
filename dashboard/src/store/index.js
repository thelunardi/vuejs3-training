import { readonly } from 'vue'
import UserModule from './user'
import GlobalModule from './globals'

export default readonly({
  User: UserModule,
  Global: GlobalModule
})
