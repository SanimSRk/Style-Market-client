// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDscIPlu6QtXohCF6UVbP2_oGpsbMKeLWQ',
  authDomain: 'style-market-87e45.firebaseapp.com',
  projectId: 'style-market-87e45',
  storageBucket: 'style-market-87e45.appspot.com',
  messagingSenderId: '645484925551',
  appId: '1:645484925551:web:0f04a45da7a795e918739a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
