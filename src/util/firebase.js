import firebase from 'firebase';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
  });
}

export const initializedFirebase = firebase;