// src/constants/env.ts
import Config from 'react-native-config';

export const AppConfig = {
    // API CONFIG
    env: Config.APP_ENV,
    apiUrl: Config.API_URL,
    timeout: Number(Config.TIMEOUT) || 10000,

    // ENVIRONMENT FLAGS
    isDev: Config.APP_ENV === 'development',
    isProd: Config.APP_ENV === 'production',

    // FIREBASE CONFIG
    firebase: {
        apiKey: Config.FIREBASE_API_KEY,
        authDomain: Config.FIREBASE_AUTH_DOMAIN,
        projectId: Config.FIREBASE_PROJECT_ID,
        storageBucket: Config.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: Config.FIREBASE_MESSAGING_SENDER_ID,
        appId: Config.FIREBASE_APP_ID,
    },
};
