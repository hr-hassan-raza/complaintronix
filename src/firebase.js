import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5q4NJP4FDAqoVlKgAHc2gSzpfTSzpKhw",
  authDomain: "complaintronix-v.firebaseapp.com",
  projectId: "complaintronix-v",
  storageBucket: "complaintronix-v.appspot.com",
  messagingSenderId: "954507412640",
  appId: "1:954507412640:web:5fbfcf7e1f6312b7eff5c5",
  measurementId: "G-R8572ZMB07",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
