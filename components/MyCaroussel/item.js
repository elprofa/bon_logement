import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH )

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 0,
    paddingBottom: 0,
    shadowColor: "#000",
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    width: 600,
    height: 250
  },
  image: {
    width:ITEM_WIDTH,
    aspectRatio:1.7, 
    resizeMode: 'contain',
    height: 170
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 0
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default CarouselCardItem