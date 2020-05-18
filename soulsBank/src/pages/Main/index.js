import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Header from '~/components/Header'
import Tabs from '~/components/Tabs'
import Menu from '~/components/Menu'
import { View, Text, StyleSheet, Animated } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'
import { Container } from './Styles'


export default props => {

  let offset = 0
  const onHandlerStateChange = event => {
    if(event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false
      const { translationY } = event.nativeEvent

      offset += translationY

      if(translationY >= 100) {
        opened = true
      }else{
        translateY.setValue(offset)
        translateY.setOffset(0)
        offset = 0
      }
      
      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true
      }).start(() => {
        offset = opened ? 380 : 0
        translateY.setOffset(offset)
        translateY.setValue(0)
      })
    }
  }

 
  const translateY = new Animated.Value(0)
  
  const animatedEvent = new Animated.event([
    {
      nativeEvent: {
        translationY: translateY
      }
    }
  ], { useNativeDriver: true })

  return (
    <Container>
      <Header />
        <View style={styles.content}>

          <Menu translateY={translateY} />

          <PanGestureHandler onGestureEvent={animatedEvent} onHandlerStateChange={onHandlerStateChange} >

          <Animated.View style={[styles.card, { translateY: translateY.interpolate({
            inputRange: [-350, 0, 380],
            outputRange: [-50, 0, 380],
            extrapolate: 'clamp'
          }) }]}>
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
          </Animated.View>

          </PanGestureHandler>

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