import useStore from '@/hooks/index'
import { setCurrentComponent, setFeedbackType } from '@/store/index'

export interface Navigation {
  next(): void;
  back(): void;
  setErrorState(): void;
  setSuccessState(): void;
}

export default function useNavigation (): Navigation {
  const store = useStore()

  function setSuccessState () {
    setCurrentComponent('Success')
  }

  function setErrorState () {
    setCurrentComponent('Error')
  }

  function next (): void {
    if (store.currentComponent === 'SelectFeedbackType') {
      setCurrentComponent('WriteFeedback')
    }
  }

  function back (): void {
    if (store.currentComponent === 'WriteFeedback') {
      setCurrentComponent('SelectFeedbackType')
      setFeedbackType('')
    }
  }

  return { back, next, setErrorState, setSuccessState }
}
