import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCu-be_trudnbFEyojqlW2pl9gO0zht79Q",
  authDomain: "test-bf4fb.firebaseapp.com",
  databaseURL: "https://test-bf4fb.firebaseio.com",
  projectId: "test-bf4fb",
  storageBucket: "test-bf4fb.appspot.com",
  messagingSenderId: "1081364156117",
  appId: "1:1081364156117:web:9fc3144b0bbad2252c5c5c",
  measurementId: "G-4WBMB6F8FN"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();


export function addDog(dogName, dogBreed, link) {
  const dogs = firebase.database().ref('Dogs/');
  dogs.push({
    dogName, dogBreed, link 
  });
}
