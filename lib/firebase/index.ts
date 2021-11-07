import Firebase from '@firebase/app'
import '@firebase/firestore'
import '@firebase/auth'

import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const {
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
    FIREBASE_APP_ID,
} = publicRuntimeConfig

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    appId: FIREBASE_APP_ID,
}

try {
    Firebase.initializeApp(firebaseConfig)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
} catch (err: any) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}
export default Firebase
