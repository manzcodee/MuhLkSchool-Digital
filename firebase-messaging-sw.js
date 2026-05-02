// Mengimpor library Firebase agar bisa jalan di background
importScripts('https://gstatic.com');
importScripts('https://gstatic.com');

// Konfigurasi Firebase (Sudah sesuai data kamu)
firebase.initializeApp({
  apiKey: "AIzaSyBmdfYx4LPeHty7GdKWiwzzJDs4X7QT7yE",
  authDomain: "://firebaseapp.com",
  projectId: "muhlkschool-digital",
  storageBucket: "muhlkschool-digital.firebasestorage.app",
  messagingSenderId: "1080670249576",
  appId: "1:1080670249576:web:f7943cacc8933db7cc91dd"
});

const messaging = firebase.messaging();

// Menampilkan notifikasi saat tab web ditutup atau sedang buka aplikasi lain
messaging.onBackgroundMessage((payload) => {
  console.log('Ada notifikasi masuk di background:', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon.ico' // Pastikan kamu punya file ikon di root web kamu
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
