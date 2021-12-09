import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'

//import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyAnRTSNG9CNDnfl3DiKfLouvZ2kJIumI8Q",
    authDomain: "movies-app-authentication.firebaseapp.com",
    projectId: "movies-app-authentication",
    storageBucket: "movies-app-authentication.appspot.com",
    messagingSenderId: "85245196981",
    appId: "1:85245196981:web:c358b10b7c1edf9bfe5cfc"
  };


const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app