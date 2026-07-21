import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getFirestore, initializeFirestore, memoryLocalCache, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||
    "AIzaSyAYKc0SBXyY3bfKLkmcCrPf-NsPF8p_Z50",
  authDomain:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ||
    "altftool-bca36.firebaseapp.com",
  projectId:
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "altftool-bca36",
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ||
    "altftool-bca36.firebasestorage.app",
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "111638030249",
  appId:
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID ||
    "1:111638030249:web:caeabc577fba8b5b29c6b8",
};

let cachedApp: FirebaseApp | null = null;
let cachedDb: Firestore | null = null;

export function getAdminFirebaseApp(): FirebaseApp {
  if (cachedApp) return cachedApp;
  cachedApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
  return cachedApp;
}

export function getAdminFirestore(): Firestore {
  if (cachedDb) return cachedDb;
  const app = getAdminFirebaseApp();
  if (typeof window === "undefined") {
    cachedDb = getFirestore(app);
  } else {
    try {
      cachedDb = initializeFirestore(app, { localCache: memoryLocalCache() });
    } catch {
      cachedDb = getFirestore(app);
    }
  }
  return cachedDb;
}
