import { setApiKey, setCurrentPage, setFingerprint } from '../store'

interface FrameControlInterface {
  updateCoreValueOnStore(): void;
  notifyOpen(): void;
  notifyClose(): void;
}

export default function useIFrameControl (): FrameControlInterface {
  function updateCoreValueOnStore (): void {
    if (process.env.NODE_ENV === 'production') {
      const query = new URLSearchParams(window.location.search)
      const apiKey = query.get('api_key') ?? ''
      const page = query.get('page') ?? ''
      const fingerprint = query.get('fingerprint') ?? ''

      setApiKey(apiKey)
      setCurrentPage(page)
      setFingerprint(fingerprint)
      return
    }

    setApiKey('fcd5015c-10d3-4e9c-b395-ec7ed8850165')
    setCurrentPage('http://teste.com')
    setFingerprint('123123123123')
    console.log('aqwe')
  }

  function notifyOpen (): void {
    window.parent.postMessage({
      isWidget: true,
      isOpen: true
    }, '*')
  }

  function notifyClose (): void {
    window.parent.postMessage({
      isWidget: true,
      isOpen: false
    }, '*')
  }

  return {
    updateCoreValueOnStore,
    notifyOpen,
    notifyClose
  }
}
