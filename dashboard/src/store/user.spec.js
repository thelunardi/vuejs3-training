import UseStore from '../hooks/useStore'
import {setCurrentUser, resetUserStore, setApiKey, cleanCurrentUser} from '@/store/user'

describe('UserStore',() => {
  afterEach(() => {
    resetUserStore()
  })

  it('should set current user', () => {
    const store = UseStore()
    setCurrentUser({ name: 'Lele' })
    expect(store.User.currentUser.name).toBe('Lele')
  })

  it('should set api_key on current user', () => {
    const store = UseStore()
    setApiKey('123')
    expect(store.User.currentUser.apiKey).toBe('123')
  })

  it('should clean current user', () => {
    const store = UseStore()

    setCurrentUser({ name: 'Lele' })
    expect(store.User.currentUser.name).toBe('Lele')

    cleanCurrentUser()
    expect(store.User.currentUser.name).toBeFalsy()
  })
})
