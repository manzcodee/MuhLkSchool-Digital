// Import Firebase (Compat version biar gak rewel)
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Konfigurasi Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBmdfYx4LPeHty7GdKWiwzzJDs4X7QT7yE",
  authDomain: "firebaseapp.com",
  projectId: "muhlkschool-digital",
  storageBucket: "muhlkschool-digital.firebasestorage.app",
  messagingSenderId: "1080670249576",
  appId: "1:1080670249576:web:f7943cacc8933db7cc91dd"
});

// Ambil instance messaging
const messaging = firebase.messaging();

// Handle notifikasi saat background (web ditutup / gak aktif)
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification?.title || 'Notifikasi Baru';
  const notificationOptions = {
    body: payload.notification?.body || 'Ada pesan masuk',
    icon: '/icon.png' // pastiin file ini ada, kalau nggak ya siap-siap kosong
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
