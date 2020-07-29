import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Controler from './src/routes/routes'

console.disableYellowBox = true // tira os alertas amarelos

export default function App() {
  return (
      <Controler/>
  );
}


