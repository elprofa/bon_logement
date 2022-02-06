import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
} from "native-base";
import MyAppBar from "./components/MyAppBar";
import Accueil from './components/Accueil'
import MyCaroussel from "./components/MyCaroussel";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <MyAppBar />
      <Accueil />
      <MyCaroussel />
      
    </NativeBaseProvider>
  );
}
