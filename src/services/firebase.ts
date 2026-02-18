// src/services/firebase.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { AppConfig } from '../constants';

const firebaseConfig = {
  apiKey: AppConfig.firebase.apiKey,
  authDomain: AppConfig.firebase.authDomain,
  projectId: AppConfig.firebase.projectId,
  storageBucket: AppConfig.firebase.storageBucket,
  messagingSenderId: AppConfig.firebase.messagingSenderId,
  appId: AppConfig.firebase.appId,
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
export const firebaseDb = getFirestore(app);
