/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict'
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native'

class HikerTales extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello Sagar!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    flex: 0,
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
    backgroundColor: 'red'
  },
  instructions: {
    flex: 1,
    textAlign: 'center',
    color: '#333333',
    backgroundColor: 'green'
  }
})

AppRegistry.registerComponent('HikerTales', () => HikerTales)
