import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import QRCode from 'react-native-qrcode-svg'

export default props => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.code}>
                <QRCode value="https://github.com/brenomacedo" size={80} backgroundColor="#fff"
                logoBackgroundColor="#a1a1a1" />
            </View>
            <View style={styles.nav}>
                <View style={styles.navItem}>
                    <Icon name='help-outline' size={20} color='#Fff' />
                    <Text style={styles.navText}>Me Ajuda!</Text>
                </View>
                <View style={styles.navItem}>
                    <Icon name='person-outline' size={20} color='#Fff' />
                    <Text style={styles.navText}>Perfil</Text>
                </View>
                <View style={styles.navItem}>
                    <Icon name='credit-card' size={20} color='#Fff' />
                    <Text style={styles.navText}>Configurar cartão</Text>
                </View>
                <View style={styles.navItem}>
                    <Icon name='smartphone' size={20} color='#Fff' />
                    <Text style={styles.navText}>Configurações do app</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>SAIR DO APP</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30
    },
    code: {
        backgroundColor: "#Fff",
        padding: 10,
        alignSelf: 'center'
    },
    nav: {
        marginTop: 30,
        borderTopWidth: 1,
        borderTopColor: 'rgba(255,255,255,0.8)'
    },
    navItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.8)'
    },
    navText: {
        fontSize: 15,
        color: '#fff',
        marginLeft: 20
    },
    button: {
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.8)',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        marginTop: 15
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13
    }
})