const firebaseConfig = {
  apiKey: "AIzaSyBdVAv2cWq2vz8KfPyfFKnhAMqgYTWZbE4",
  authDomain: "assistfarmabot.firebaseapp.com",
  databaseURL: "https://assistfarmabot-default-rtdb.firebaseio.com",
  projectId: "assistfarmabot",
  storageBucket: "assistfarmabot.firebasestorage.app",
  messagingSenderId: "965797764582",
  appId: "1:965797764582:web:1c5f20f304e288a46e4a27"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
