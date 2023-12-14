// import 'firebase/messaging'
// import firebase from 'firebase/app'
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
//   measurementId: import.meta.env.VITE_measurementId,
// }
// firebase.initializeApp(firebaseConfig)
// const messaging = firebase.messaging()
// export function requestPermission() {
//   void Notification.requestPermission().then((permission) => {
//     if (permission === 'granted') {
//       messaging
//         .getToken({ vapidKey: import.meta.env.VITE_VAPID_KEY })
//         .then((token: string) => {
//           console.log(`푸시 토큰 발급 완료 : ${token}`)
//           return token
//         })
//         // .then(function (token) {
//         //   console.log('알림 왜 안 울려')
//         //   messaging.onMessage((payload) => {
//         //     alert('알림:' + payload.notification.body)
//         //   })
//         //   return token
//         // })
//         .catch((err) => {
//           console.log('푸시 토큰 가져오는 중에 에러 발생 : ', err)
//         })
//     } else if (permission === 'denied') {
//       console.log('푸시 권한 차단')
//     }
//   })
// }
// requestPermission()
import firebase from "firebase";
import "firebase/messaging";
import { axiosAPI } from "@/apis/axios";

const firebaseConfig = {
  apiKey: "AIzaSyBPfx4R0QsrFbS5rMv38dM1B7iPR4bUxt4",
  authDomain: "coffee-meet-d295d.firebaseapp.com",
  projectId: "coffee-meet-d295d",
  storageBucket: "coffee-meet-d295d.appspot.com",
  messagingSenderId: "716922226162",
  appId: "1:716922226162:web:1f3cbb9069cd525323d76b",
  measurementId: "G-2YB8FMSHM5",
};

firebase.initializeApp(firebaseConfig);

export async function getToken() {
  if (firebase.messaging.isSupported() === false) {
    console.log("isSupported: ", firebase.messaging.isSupported());
    return null;
  }

  const messaging = firebase.messaging();
  const token = await messaging
    .requestPermission()
    .then(function () {
      return messaging.getToken({
        vapidKey:
          "BMwDtsjNmBgRePxytobo7zUvOiwm1k9RWNSl-8O1jBqvSJRBCIjcx3ZaBj-veAA3eVVmGeoVWOQtQMmAWTZif_A",
      });
    })
    .then(function (token) {
      messaging.onMessage((payload) => {
        console.log("onMessage!!");
        alert("알림:" + payload.notification.body);
      });
      return token;
    })
    .catch(function (err) {
      console.debug("에러 : ", err);
      return null;
    });
  messaging.onMessage((payload) => {
    console.log("onMessage!!");
    alert("알림:" + payload.notification.body);
  });
  console.log("token:", token);
  token && sendWebPushToken(token);
  return token;
}

getToken();
const sendWebPushToken = async (token: string) => {
  await axiosAPI
    .put("/v1/users/notification/token", {
      token: token,
    })
    .then(() => {
      console.log("서버에 웹푸시 토큰 전송 완료");
    })
    .catch((err) => {
      console.log(err);
    });
};
