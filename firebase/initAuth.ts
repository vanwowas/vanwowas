// ./initAuth.js
import { init } from 'next-firebase-auth'

import getConfig from 'next/config'
import fb from '../fb.json'
const { publicRuntimeConfig } = getConfig()

const {
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID,
    FIREBASE_APP_ID,
} = publicRuntimeConfig

const initAuth: () => void = () => {
    init({
        authPageURL: '/login',
        appPageURL: '/',
        loginAPIEndpoint: '/api/login',
        logoutAPIEndpoint: '/api/logout',
        firebaseAdminInitConfig: {
            credential: {
                privateKey: process.env.FIREBASE_PRIVATE_KEY || '',
                clientEmail: fb.client_email,
                projectId: FIREBASE_PROJECT_ID,
            },
            databaseURL: `https://${FIREBASE_PROJECT_ID}.firebaseio.com/`,
        },
        firebaseClientInitConfig: {
            apiKey: FIREBASE_API_KEY, // required
            authDomain: FIREBASE_AUTH_DOMAIN,
            projectId: FIREBASE_PROJECT_ID,
            appId: FIREBASE_APP_ID,
        },
        cookies: {
            name: 'vanwowas', // required
            // Keys are required unless you set `signed` to `false`.
            // The keys cannot be accessible on the client side.
            keys: [
                process.env.COOKIE_SECRET_CURRENT,
                process.env.COOKIE_SECRET_PREVIOUS,
            ],
            httpOnly: true,
            maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
            overwrite: true,
            path: '/',
            sameSite: 'strict',
            secure: false, // set this to false in local (non-HTTPS) development
            signed: false,
        },
    })
}

export default initAuth
