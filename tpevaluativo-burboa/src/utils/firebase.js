import {initializeApp} from 'firebase/app'
import {getFirestore} from'firebase/firestore'
import {getStorage} from 'firebase/storage'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDYbHVTzZlEbjvjUYkXosElt51so5ooXPY",
    authDomain: "programacion-1-5e5ec.firebaseapp.com",
    projectId: "programacion-1-5e5ec",
    storageBucket: "programacion-1-5e5ec.appspot.com",
    messagingSenderId: "557324453688",
    appId: "1:557324453688:web:b7e7c84d52fe7cefa063cd",
    measurementId: "G-47BN9GZ5XN"
};
//iniciamos nuestra conexion entre nuestra app y firebase
const conexion = initializeApp(firebaseConfig)
//me conecto con la base de datos de firestore
const auth = getAuth()
const db = getFirestore()
const storage = getStorage(conexion)
export {db}
export {storage}
export {auth}