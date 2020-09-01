import React from 'react';
import { Text, View } from 'react-native';
import AppContainer from './src/navigations/AppNavigation';
import * as firebase from 'firebase';
import 'firebase/firestore';
import firebaseConfig from './src/data/Fire';
// Firebase: Initialize
firebase.initializeApp({
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  databaseURL: firebaseConfig.databaseURL,
  projectId: firebaseConfig.projectId,
  storageBucket: firebaseConfig.storageBucket,
  messagingSenderId: firebaseConfig.messagingSenderId,
});
// Firebase: Cloud Firestore
export const database = firebase.firestore();

export default function App() {
  return (
     <AppContainer />
  );
}
