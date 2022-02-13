import React from 'react'
import { ScrollView } from 'react-native'
import BlockSearchInput from '../../components/BlockSearchInput'
import MyCaroussel from '../../components/MyCaroussel'
import Accueil from '../../components/Accueil'

function Home() {
  return (
    <ScrollView style={{height:400}}>
        <Accueil />
        <MyCaroussel />
        <BlockSearchInput />
    </ScrollView>
  )
}

export default Home