import React from 'react'
import Header from '~/components/Header'
import Tabs from '~/components/Tabs'
import { Container } from './Styles'

export default props => {
  return (
    <Container>
      <Header />
      <Tabs />
    </Container>
  )
}