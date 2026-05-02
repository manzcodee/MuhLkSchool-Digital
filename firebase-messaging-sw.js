// Link library-nya harus lengkap kayak gini biar terbaca!
importScripts('https://gstatic.com');
importScripts('https://gstatic.com');

// Konfigurasi Firebase kamu
firebase.initializeApp({
  apiKey: "AIzaSyBmdfYx4LPeHty7GdKWiwzzJDs4X7QT7yE",
  authDomain: "://firebaseapp.com",
  projectId: "muhlkschool-digital",
  storageBucket: "muhlkschool-digital.firebasestorage.app",
  messagingSenderId: "1080670249576",
  appId: "1:1080670249576:web:f7943cacc8933db7cc91dd"
});

const messaging = firebase.messaging();

// Menangani notifikasi saat background
messaging.onBackgroundMessage((payload) => {
  console.log('Notif Background:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon.ico'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
