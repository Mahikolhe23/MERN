import { useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messigingAtom, networkAtom, notificationAtom } from './atom'

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp() {
  const networkNotification = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom)
  const notificationAtomConunt = useRecoilValue(notificationAtom)
  const [messagingAtomCount, setMessagingAtomCount] = useRecoilState(messigingAtom)
  return <div>
    <button>Home</button>

    <button>My Network({networkNotification >= 100 ? "99+" : networkNotification})</button>
    <button>Jobs({jobsAtomCount})</button>
    <button>Messaging({messagingAtomCount})</button>
    <button>Notifications({notificationAtomConunt})</button>

    <button>Me</button>
  </div>
}

export default App
