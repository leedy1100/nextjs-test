importScripts(
  "https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js",
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js",
);

const config = {
  apiKey: "AIzaSyCbNX-g614Z5_KdiQ0kSp5dRFoMUCSY_d8",
  authDomain: "dooy-d4c6b.firebaseapp.com",
  projectId: "dooy-d4c6b",
  storageBucket: "dooy-d4c6b.appspot.com",
  messagingSenderId: "996170370754",
  appId: "1:996170370754:web:7faba6b00f91c8eec5f55b",
  measurementId: "G-VT4CK7T74Q",
};

firebase.initializeApp(config);

const messaging = firebase.messaging();
