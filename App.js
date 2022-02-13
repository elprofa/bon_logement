import React,{useState} from "react";
import {
  NativeBaseProvider,
  extendTheme, Pressable, Center
} from "native-base";
import MyAppBar from "./components/MyAppBar";
import MyFooter from "./components/Footer";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MySubMenu from "./components/MyAppBar/MySubMenu";
import { SubMenuProvider } from "./Context/ctnState";
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

const Stack = createNativeStackNavigator();

export default function App() {

  const [etat,setEtat]=useState(false);

  const monEtat={
    etat:etat,
    monSetEtat:setEtat,
  }

  return (
    <NavigationContainer>
    <NativeBaseProvider theme={theme}>

      <SubMenuProvider value={monEtat}>      
          <MySubMenu />
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={({ navigation, route }) => ({
                headerTitle: "King",
                headerLeft: () => (
                    <MyAppBar/>
                ),
              })}
              // options={{ headerShown: false }}
            />
          </Stack.Navigator>
          
          <MyFooter />

        </SubMenuProvider>

    </NativeBaseProvider>

  </NavigationContainer>
  );
}
