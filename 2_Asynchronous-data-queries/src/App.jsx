import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { notificationsCount } from './store/atoms/count'

function App() { 
  return ( <RecoilRoot>
    <MainApp />
  </RecoilRoot>
  )
}

function MainApp() {
  const notifications = useRecoilValue(notificationsCount)

  return (
    <div>
      <button>Home</button>

      <button>Notifications {notifications.notifications}</button>
      <button>Jobs {notifications.jobs}</button>
      <button>Connections {notifications.network >= 100? '99+': notifications.network}</button>
      <button>Messaging {notifications.messaging}</button>

      <button>Me {}</button>
    </div>
  )
}

export default App
