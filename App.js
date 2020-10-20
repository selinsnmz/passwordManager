

import React, { Component }  from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.contanier}>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  contanier:{
    backgroundColor: "black",
    borderWidth: 1,
    height: 100,
    width: 100
    
  }
})


