import { Box, Center, ChevronRightIcon, Divider, HStack, Icon, IconButton, Stack, StatusBar, Text } from 'native-base';
import React, { useState } from 'react';
import { MaterialIcons } from "@expo/vector-icons";
import { colonneDroite, colonneGauche, iconMenuStyle, principalRow, subMenuRow } from './style';
import { Navigation } from './data';
import { Pressable } from 'react-native';


function MyAppBar() {

    const [subMenuState, setsubMenuState] = useState(false);
    const [menuState, setMenuState] = useState(false);
    const [idMenuState, setIdMenuState] = useState(0);
    const [itemSubMenu,setItemSubMenu] = useState(Navigation[0].sousNavigation);
    


    const handleSubMenu=(id,sousMenu)=>{
        
        setsubMenuState(true);
        setIdMenuState(id);
        setItemSubMenu([...sousMenu]);
    }

    const handleMenu=()=>{

        if(menuState===true)
        {
            setMenuState(false);
            setsubMenuState(false);
            setIdMenuState(0);
        }
        else
        {
            setMenuState(true);
        }
       
    }
    
  return (
      <>
        <StatusBar bg="#3700B3" barStyle="light-content" />
        <HStack style={principalRow} px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
            <HStack alignItems="center">
                {
                    menuState===false ? (
                        <Text>
                            <IconButton  onPress={handleMenu} icon={<Icon size="sm" as={MaterialIcons} name="menu" color="#0c2c4b" />} />
                        </Text>
                    ):(
                        <Text onPress={handleMenu}>
                            <IconButton  onPress={handleMenu} icon={<Icon size="sm" as={MaterialIcons} name="close" color="#0c2c4b" />} />
                        </Text>
                    )
                }
                
                <Text color="#0c2c4b" onPress={handleMenu} fontSize="20" fontWeight="bold">
                Home
                </Text>
            </HStack>
            <HStack>
                <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="#0c2c4b" />} />
            </HStack>
        </HStack>
        
        {
             menuState===true?(
                <Stack style={subMenuRow}>
                    <HStack >
                        <Box size={80} style={colonneGauche} w="50%">
                            {
                                Navigation.map((navig,index)=>{
                                    return(
                                        
                                        idMenuState==navig.id?(
                                            
                                                <Box bg="#ffdd15" w="100%" key={index+"NavigationMenu"}>
                                                    <Pressable  onPress={()=>handleSubMenu(navig.id,navig.sousNavigation)}>
                                                        <Text  py={3} pl={2} color="#0c2c4b">
                                                            {navig.libelle}
                                                        </Text>
                                                    </Pressable>
                                                    <Divider bg="#ccc" orientation="horizontal" w="95%" mx="auto" />
                                                </Box>
                                                
                                        ):(
                                                <Box key={index+"NavigationMenu"} w="100%">
                                                    <Pressable  onPress={()=>handleSubMenu(navig.id,navig.sousNavigation)}>
                                                        <Text  py={3} pl={2}>
                                                            {navig.libelle}
                                                        </Text>
                                                        
                                                    </Pressable>
                                                    <Divider bg="#ccc" orientation="horizontal" w="95%" mx="auto" />
                                                </Box>

                                        )
                                        
                                    )
                                })
                            }
                        </Box>
                        {
                            subMenuState===true ? (
                                <Box style={colonneDroite} w="50%" shadow={3}>
                                    {
                                        
                                        itemSubMenu.map((myItem,index)=>{
                                            return(
                                            <Box key={"subMenuItem"+index} w="100%">
                                                <Pressable  onPress={()=>handleSubMenu(navig.id,navig.sousNavigation)}>
                                                    <Text  py={3} pl={2} color="#0c2c4b">
                                                    {myItem.libelle1}
                                                    </Text>
                                                </Pressable>
                                                <Divider bg="#ccc" orientation="horizontal" w="95%" mx="auto" />
                                            </Box>
                                                
                                            )
                                        })
                                          
                                    }
                                </Box>
                            ):<></>
                        }
                        
                    </HStack>
                </Stack>
             ):(
                <>
                   
                </>
             )
        }
        
    </>
  )
}

export default MyAppBar;
