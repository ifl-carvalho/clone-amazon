import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({ /* Firebase Key */ });

const db = firebaseApp.firestore()

export { db }