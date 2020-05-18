import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingLeft: 10, paddingRight: 20 }}
            horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.tabItem}>
                    <Icon name="person-add" size={24} color="#fff" />
                    <Text style={styles.tabText} >Indicar Amigos</Text>
                </View>
                <View style={styles.tabItem}>
                    <Icon name="chat-bubble-outline" size={24} color="#fff" />
                    <Text style={styles.tabText} >Cobrar</Text>
                </View>
                <View style={styles.tabItem}>
                    <Icon name="arrow-downward" size={24} color="#fff" />
                    <Text style={styles.tabText} >Depositar</Text>
                </View>
                <View style={styles.tabItem}>
                    <Icon name="arrow-upward" size={24} color="#fff" />
                    <Text style={styles.tabText} >Transferir</Text>
                </View>
                <View style={styles.tabItem}>
                    <Icon name="lock" size={24} color="#fff" />
                    <Text style={styles.tabText} >Bloquear Almas</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        marginTop: 20
    },
    tabItem: {
        width: 100,
        height: 100,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 3,
        marginLeft: 10,
        padding: 10,
        justifyContent: 'space-between'
    },
    tabText: {
        fontSize: 13,
        color: '#Fff'
    }

})