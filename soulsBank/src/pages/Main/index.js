import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Header from '~/components/Header'
import Tabs from '~/components/Tabs'
import Menu from '~/components/Menu'
import { View, Text, StyleSheet } from 'react-native'
import { Container } from './Styles'

export default props => {
  return (
    <Container>
      <Header />
        <View style={styles.content}>

          <Menu />

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Icon name='attach-money' size={28} color='#666' />
              <Icon name='visibility-off' size={28} color='#666' />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.title}>Almas Disponíveis:</Text>
              <Text style={styles.description} >5.688.197.611</Text>
            </View>
            <View style={styles.cardFooter} >
              <Text style={styles.annotation} >Transferência de 20.000 almas recebida de Breno Macêdo</Text>
            </View>
          </View>
        </View>
      <Tabs />
    </Container>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    maxHeight: 400,
    zIndex: 5
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 4,
    marginHorizontal: 20,
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30
  },
  cardContent: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center'
  },
  title: {
    fontSize: 13,
    color: "#999",
  },
  description: {
    fontSize: 32,
    color: "#333",
    marginTop: 3
  },
  cardFooter: {
    padding: 30,
    backgroundColor: "#eee",
    borderRadius: 4
  },
  annotation: {
    fontSize: 12,
    color: "#333"
  }
})