import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDhunBI6wcRdJmPkirpYsF9t9S1qhOUxwg',
  authDomain: 'mealstogo-1b8f3.firebaseapp.com',
  projectId: 'mealstogo-1b8f3',
  storageBucket: 'mealstogo-1b8f3.appspot.com',
  messagingSenderId: '488003366811',
  appId: '1:488003366811:web:cb2313cb7f6473485d3b3e',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
