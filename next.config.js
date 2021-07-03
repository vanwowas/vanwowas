// next.config.js
module.exports = {
    images: {
        domains: ['images.unsplash.com'],
    },
    reactStrictMode: true,
    publicRuntimeConfig: {
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
        FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
        FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
        FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    },
}
