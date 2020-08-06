import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAU1MLFUFcSryJm1etKedd6VcMhwps_p1A",
  authDomain: "wireless-buzzer-teams.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-teams.firebaseio.com",
  projectId: "wireless-buzzer-teams",
  storageBucket: "wireless-buzzer-teams.appspot.com",
  messagingSenderId: "340406232441",
  appId: "1:340406232441:web:50e272f6e5f56dd8b77ba8",
  measurementId: "G-XDD0ZD451G"
};


let app = firebase.initializeApp(firebaseConfig);
export const db = app.database();