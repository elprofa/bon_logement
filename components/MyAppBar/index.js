import { Icon, IconButton } from 'native-base';
import React, { useState, useContext } from 'react';
import { MaterialIcons } from "@expo/vector-icons";
import SubMenuContext from '../../Context/ctnState';


function MyAppBar() {

     const [menuState, setMenuState] = useState(false);

    const MySubMenuContext = useContext(SubMenuContext);

    const handleMenu=()=>{

        if(menuState===true)
        {
            setMenuState(false);
            // setsubMenuState(false);
            // setIdMenuState(0);
            MySubMenuContext.monSetEtat(false)
        }
        else
        {
            setMenuState(true);
            MySubMenuContext.monSetEtat(true)
        }
       
    }

    console.log(MySubMenuContext)
    
  return (
        <>
            {
                menuState===false ? (
                    <IconButton  onPress={handleMenu} icon={<Icon size="md" as={MaterialIcons} name="menu" color="#0c2c4b" />} />
                ):(
                    <IconButton  onPress={handleMenu} icon={<Icon size="md" as={MaterialIcons} name="close" color="#0c2c4b" />} />
                )
            }
        </>
    )
}

export default MyAppBar;
