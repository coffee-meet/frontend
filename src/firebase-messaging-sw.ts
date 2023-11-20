import 'firebase/messaging'

import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId,
}

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()

export function requestPermission() {
  void Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      messaging
        .getToken({ vapidKey: import.meta.env.VITE_VAPID_KEY })
        .then((token: string) => {
          console.log(`푸시 토큰 발급 완료 : ${token}`)
        })
        .catch((err) => {
          console.log('푸시 토큰 가져오는 중에 에러 발생 : ', err)
        })
    } else if (permission === 'denied') {
      console.log('푸시 권한 차단')
    }
  })
}
requestPermission()
