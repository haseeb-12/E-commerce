// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDpDWE2H6R7zEAjh78EG2ipoF1sDECI6s8",
  authDomain: "sign-c734a.firebaseapp.com",
  projectId: "sign-c734a",
  storageBucket: "sign-c734a.appspot.com",
  messagingSenderId: "683312460200",
  appId: "1:683312460200:web:bffa6a054672913f82ad9d",
  measurementId: "G-YC9DWJGHMV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)

const provider=new GoogleAuthProvider()

export const signInWithGoogle=()=>{
    signInWithPopup(auth,provider)
    .then((result)=>{
        localStorage.setItem('name',result.user.displayName)
        localStorage.setItem('profilePhoto',result.user.photoURL)
        window.location.reload()
    } )
    .catch((err)=>{
        console.log(err)
    })
}