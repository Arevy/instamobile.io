import React from 'react';
import { StyleSheet, View, Text, Button  } from 'react-native';
import { globalStyles } from '../../styles/global';


export default function Home({ navigation }) {

  const pressHandler = () => {
    //navigation.navigate('Details');
    navigation.push('Details');
  }

  return (
    <View style={globalStyles.container}>
      {/* <Text style={globalStyles.titleText}>Home</Text> */}
      <Button title='to review details screen' onPress={pressHandler} />
    </View>
  );
}