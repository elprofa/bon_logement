import React from 'react'
import { View } from "react-native"
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './item'
import data from './data'

const MyCaroussel = () => {
  const isCarousel = React.useRef(null)
  return (
    <View>
      <Carousel
        layout={'tinder'} 
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={1}
        useScrollView={true}
      />
    </View>
  )
}


export default MyCaroussel