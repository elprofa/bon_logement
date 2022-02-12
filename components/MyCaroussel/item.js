import { Box } from 'native-base'
import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width*20
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH )*20

const CarouselCardItem = ({ item, index }) => {
  return (
    <Box style={styles.container} key={index} mt={-4}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </Box>
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
    height: 290,
  },
  image: {
    width:ITEM_WIDTH,
    aspectRatio:1.7, 
    resizeMode: 'contain',
    height: 220
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