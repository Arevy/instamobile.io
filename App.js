import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import Navigator from './src/navigation/homeStack';
import * as Font from 'expo-font';
import {useState} from 'react';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/Roboto-Bold.ttf'),
  'nunito-bold': require('./assets/Roboto-Bold.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Navigator />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
      />
    )
  }

}