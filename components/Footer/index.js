import React from "react";
import { NativeBaseProvider, Box, Text, Heading, VStack, FormControl, Input, Link, Button, Icon, HStack, Center, Pressable, Image } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { style } from "./style";

function MyFooter() {
  const [selected, setSelected] = React.useState(1);
  return (
      <Box flex={1} bg="white" safeAreaTop width="100%" style={style} mx={0} maxW="100%" alignSelf="center">
        <Center flex={1}></Center>
        <HStack bg="#f7dd10" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
            <Center>
                <Image style={{width:30,height:30}} source={require("../../assets/infos.png")} alt="Alternate Text" />
            </Center>
          </Pressable>
          <Pressable  opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
            <Center>
                <Image style={{width:30,height:30}} source={require("../../assets/user1.png")} alt="Alternate Text" />
            </Center>
          </Pressable>
          <Pressable  opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(2)}>
            <Center>
            <Image style={{width:30,height:30}} source={require("../../assets/search.png")} alt="Alternate Text" />
            </Center>
          </Pressable>
          <Pressable opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}>
            <Center>
                <Image style={{width:30,height:30}} source={require("../../assets/phone.png")} alt="Alternate Text" />
            </Center>
          </Pressable>
          <Pressable opacity={selected === 4 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(4)}>
            <Center>
                <Image style={{width:30,height:30}} source={require("../../assets/editinguser.png")} alt="Alternate Text" />
            </Center>
          </Pressable>
        </HStack>
      </Box>
  )
}

export default MyFooter