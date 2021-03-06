import { Center} from 'native-base';
import React from 'react';
import { Image } from 'react-native';
import { logoAccueil } from './style';

function Accueil() {
  return (
      <>
        <Center bg="#fff" pt={3}>
            <Center height={100} mt={-2}>
                <Image style={logoAccueil} style={{width:170,height:90}} source={require("../../assets/logo.png")} alt="Alternate Text" />
            </Center>
        </Center> 
      </>
  );
}

export default Accueil;
