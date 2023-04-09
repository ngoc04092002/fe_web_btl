// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAhKa1eXS7opyVq20CJ83FNEC78Pnk65QE',
	authDomain: 'website-rent-house.firebaseapp.com',
	projectId: 'website-rent-house',
	storageBucket: 'website-rent-house.appspot.com',
	messagingSenderId: '988312084965',
	appId: '1:988312084965:web:59ec91f16822e640cbcf0c',
	measurementId: 'G-G85YK8YJBC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

//upload file
export const storage = getStorage(app);
