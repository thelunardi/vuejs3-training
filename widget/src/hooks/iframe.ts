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

    setApiKey('9224605e-5960-423e-ab7e-52c5307a5746')
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
