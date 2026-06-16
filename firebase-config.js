// Ten plik JEST commitowany do gita (na GitHub Pages musi być w repo, żeby strona
// działała). To bezpieczne: "apiKey" Firebase to publiczny identyfikator projektu,
// nie tajny sekret - i tak trafia do przeglądarki każdego odwiedzającego. Trzymamy
// go w osobnym pliku tylko dla porządku (oddzielnie od kodu aplikacji).
// Realne zabezpieczenie to reguły bezpieczeństwa Firebase Realtime Database.
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAK7O4WgMPZDWayAP1OTkQjPXHuTUfzaqs",
  authDomain: "bloom-62d0b.firebaseapp.com",
  databaseURL: "https://bloom-62d0b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bloom-62d0b",
  storageBucket: "bloom-62d0b.firebasestorage.app",
  messagingSenderId: "349389845116",
  appId: "1:349389845116:web:0b48c902d402a03456cff9"
};
