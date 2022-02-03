import { Center} from 'native-base';
import React from 'react';
import { Image } from 'react-native';
import CarousselAccueil from '../CarousselAccueil';
import { logoAccueil } from './style';

function Accueil() {
  return (
      <>
        <Center>
            <Center height={100}>
                <Image style={logoAccueil} style={{width:200,height:100}} source={require("../../assets/logo.png")} alt="Alternate Text" />
            </Center>
        </Center> 
        <CarousselAccueil/>
      </>
  );
}

export default Accueil;
