import { Center, Divider, HStack, Icon, Image, VStack} from 'native-base';
import React from 'react';
import { Box,Input,Button,Text } from 'native-base';
import { BoxIcon } from './style';

function BlockSearchInput() {
  return (
    <>
        <Box alignItems="center" mt={-20}>
            <Input mx="0" placeholder="Recherche ici" size="md" style={{fontWeight:"bold"}} w="95%" />
            <Button small danger bg="#ff0000" w="95%" mt={2}>
                <Text>RECHERCHER</Text>
            </Button>
        </Box>
        <VStack mx="auto" w="100%" mt="10">
          <HStack justifyContent="space-between" my="15px" mb="10">
            <Center style={BoxIcon} mx="auto" w="30%" h="80px">
              <Image style={{height:80}} source={require("../../assets/icone_louer.png")} alt="Alternate Text" />
                <Center>
                  <Text color="#333" style={{fontWeight:"bold"}}>Location</Text>
                  <Text color="#333" style={{fontWeight:"bold"}}>(Je loue)</Text>
                </Center>
            </Center>
            <Center style={BoxIcon} w="30%" mx="auto" h="80px" >
              <Image style={{height:80}} source={require("../../assets/icone_acheter.png")} alt="Alternate Text" />
              <Center>
                <Text color="#333" style={{fontWeight:"bold"}}>Ventes</Text>
                <Text color="#333" style={{fontWeight:"bold"}}>(J'achète)</Text>
              </Center>
            </Center>
          </HStack>
          <HStack justifyContent="space-between" my="15px" mb="20">
            <Center style={BoxIcon} mx="auto" w="30%" h="80px">
              <Image style={{height:80}} source={require("../../assets/icone_ouvrier.png")} alt="Alternate Text" />
              <Center>
                <Text color="#333" style={{fontWeight:"bold"}}>Ouvrier</Text>
                <Text color="#333" style={{fontWeight:"bold"}}>(J'en cherche)</Text>
              </Center>
            </Center>
            <Center style={BoxIcon}mx="auto" w="30%" h="80px">
              <Image style={{height:80}} source={require("../../assets/icone_plan.png")} alt="Alternate Text" />
              <Center>
                <Text color="#333" style={{fontWeight:"bold"}}>Plan & devis</Text>
                <Text color="#333" style={{fontWeight:"bold"}}>(Pour ma mais.)</Text>
              </Center>
            </Center>
          </HStack>
        </VStack>
        
    </>
  );
}

export default BlockSearchInput;
