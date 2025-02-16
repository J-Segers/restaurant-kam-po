import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC_ONPlY7i7vVAUlqmQdEip8HKaoTIr68I",
  authDomain: "restaurant-kam-po.firebaseapp.com",
  databaseURL: "https://restaurant-kam-po-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "restaurant-kam-po",
  storageBucket: "restaurant-kam-po.firebasestorage.app",
  messagingSenderId: "254338811296",
  appId: "1:254338811296:web:b12a911b7639f962f810c5"
};

const kampoDB = initializeApp(firebaseConfig);

export default kampoDB;