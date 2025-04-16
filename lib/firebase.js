import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAw64E_Diu8Duv2M_jXPtVP0iiTBacx0Jo",
    authDomain: "unilib-957fb.firebaseapp.com",
    projectId: "unilib-957fb",
    storageBucket: "unilib-957fb.firebasestorage.app",
    messagingSenderId: "304648315167",
    appId: "1:304648315167:web:6c44a8d78ced477868d02a",
    measurementId: "G-L69J2KNCEX"
  };

  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);