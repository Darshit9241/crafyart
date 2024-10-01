import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const apiKey: string = process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "";
const authDomain: string = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "";
const projectId: string = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "";
const storageBucket: string = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "";
const messagingSenderId: string = process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID || "";
const appId: string = process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "";

const firebaseConfig: FirebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);

export { auth };
