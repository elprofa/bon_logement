import { Box, Divider, HStack, Pressable, Stack, Text } from "native-base";
import React, { useState,useContext } from "react";
import SubMenuContext from "../../Context/ctnState";
import { Navigation } from "./data";
import { colonneDroite, colonneGauche, subMenuRow } from "./style";

const MySubMenu = (props) => {

    const MySubMenuContext = useContext(SubMenuContext);

    const [subMenuState, setsubMenuState] = useState(false);
    const [idMenuState, setIdMenuState] = useState(0);
    const [itemSubMenu,setItemSubMenu] = useState(Navigation[0].sousNavigation);

    const handleSubMenu=(id,sousMenu)=>{
        
        setsubMenuState(true);
        setIdMenuState(id);
        setItemSubMenu([...sousMenu]);
    }

    if(MySubMenuContext.etat===true){
      return(
        <Stack style={subMenuRow}>
            <HStack >
                <Box size={80} style={colonneGauche} w="50%">
                    {
                        Navigation.map((navig,index)=>{
                            return(
                                idMenuState==navig.id?(
                                    
                                        <Box style={{backgroundColor : "rgba(255,221,21,.8)"}} w="100%" key={index+"NavigationMenu"}>
                                            <Pressable  onPress={()=>handleSubMenu(navig.id,navig.sousNavigation)}>
                                                <Text  py={3} pl={2} style={{fontWeight:"bold"}} color="#0c2c4b">
                                                    {navig.libelle}
                                                </Text>
                                            </Pressable>
                                            <Divider bg="#ccc" orientation="horizontal" w="95%" mx="auto" />
                                        </Box>
                                        
                                ):(
                                        <Box key={index+"NavigationMenu"} w="100%">
                                            <Pressable  onPress={()=>handleSubMenu(navig.id,navig.sousNavigation)}>
                                                <Text  py={3} pl={2} style={{fontWeight:"bold"}}>
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
                                            <Text  py={3} pl={2} style={{fontWeight:"bold"}} color="#0c2c4b">
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
      )
    }else{
      return(
        <>
        </>
      )
    }
    
};
export default MySubMenu;