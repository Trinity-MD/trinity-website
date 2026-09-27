/* =======================================
 * main.js - Apenas Firebase/Analytics
 * (Se falhar, não quebra o site)
 * ======================================= */

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDvKQnbFyoakvCy3Zm-glBa6K6qZC5U6s0",
  authDomain: "site-trinity.firebaseapp.com",
  projectId: "site-trinity",
  storageBucket: "site-trinity.firebasestorage.app",
  messagingSenderId: "981856499526",
  appId: "1:981856499526:web:d90bd98cbcc8f80676d747",
  measurementId: "G-PFDNYWT4JD"
};

try {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    console.log("Firebase inicializado com sucesso.");
} catch (error) {
    console.warn("Firebase falhou ao iniciar (possivelmente AdBlock):", error);
    // O site continua funcionando normalmente!
}