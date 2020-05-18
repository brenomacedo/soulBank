import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import logo from '../../assets/Nubank_Logo.png'
import { Text, View, StyleSheet, Image } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image source={logo} />
                <Text style={styles.title} >soulsBank</Text>
            </View>
            <Icon name='keyboard-arrow-down' size={20} color='#fff' />
        </View>
    )
}


const styles = StyleSheet.create({
    top: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10
    },
    title: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
      marginLeft: 8
    },
    logo: {
  
    },
    container: {
        alignItems: 'center',
        paddingTop: 20,
        paddingHorizontal: 30
    }
  })