import firebase from "firebase";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: "disney-2de1b.firebaseapp.com",
  databaseURL: "https://disney-2de1b-default-rtdb.firebaseio.com",
  projectId: "disney-2de1b",
  storageBucket: "disney-2de1b.appspot.com",
  messagingSenderId: "861158444831",
  appId: "1:861158444831:web:75082e175a3a760ccf2a2a",
  measurementId: "G-ZQBPDXQJ4X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
