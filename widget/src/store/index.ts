import { reactive, readonly } from 'vue'

export type StoreState = {
  currentComponent: string;
  message: string;
  feedbackType: string;
  fingerprint: string;
  apiKey: string;
  currentPage: string;
}

const initialState: StoreState = {
  currentComponent: 'SelectFeedbackType',
  message: '',
  feedbackType: '',
  fingerprint: '',
  apiKey: '',
  currentPage: ''
}

const state = reactive<StoreState>({ ...initialState })

export function setCurrentComponent (component: string) {
  state.currentComponent = component
}

export function setMessage (message: string) {
  state.message = message
}

export function setFeedbackType (type: string) {
  state.feedbackType = type
}

export function setCurrentPage (page: string) {
  state.currentPage = page
}

export function setApiKey (apiKey: string) {
  state.apiKey = apiKey
}

export function setFingerprint (fingerprint: string) {
  state.fingerprint = fingerprint
}

export function resetStore () {
  setCurrentComponent(initialState.currentComponent)
  setMessage(initialState.message)
  setFeedbackType(initialState.feedbackType)
  setCurrentPage(initialState.currentPage)
  setApiKey(initialState.apiKey)
  setFingerprint(initialState.fingerprint)
}

export default readonly(state)
