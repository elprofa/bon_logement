import { Center} from 'native-base';
import React from 'react';
import { Image } from 'react-native';
import { logoAccueil } from './style';

function Accueil() {
  return (
      <>
        <Center>
            <Center height={100}>
                <Image style={logoAccueil} style={{width:200,height:100}} source={require("../../assets/logo.png")} alt="Alternate Text" />
            </Center>
        </Center> 
      </>
  );
}

export default Accueil;
