import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyApMoJ6PlOmFYkhZfaj3pvOIpBuax5L590",
  authDomain: "todo-list-ce02b.firebaseapp.com",
  projectId: "todo-list-ce02b",
  storageBucket: "todo-list-ce02b.appspot.com",
  messagingSenderId: "828645188357",
  appId: "1:828645188357:web:996e0fc5316c53dc094d6c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db