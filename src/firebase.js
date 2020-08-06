import firebase from 'firebase/app' // rollup bundle issue with ESM import
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyC_ngjkPMyY3AuQzbtHDgQFofWzzn1wxf4',
  authDomain: 'weight-tracker-9f6a8.firebaseapp.com',
  databaseURL: 'https://weight-tracker-9f6a8.firebaseio.com',
  projectId: 'weight-tracker-9f6a8',
  storageBucket: 'weight-tracker-9f6a8.appspot.com',
  messagingSenderId: '650662618222',
  appId: '1:650662618222:web:9f2780f0c50bceb6d1727f',
}

console.log(firebase)

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const db = firebase.firestore()
