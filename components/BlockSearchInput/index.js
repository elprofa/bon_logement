import { Center} from 'native-base';
import React from 'react';
import { Box,Input,Button,Text } from 'native-base';

function BlockSearchInput() {
  return (
    <>
        <Box alignItems="center" mt={-20}>
            <Input mx="0" placeholder="Recherche ici" size="md" style={{fontWeight:"bold"}} w="95%" />
            <Button small danger bg="#ff0000" w="95%" >
                <Text>RECHERCHER</Text>
            </Button>
        </Box>
        
    </>
  );
}

export default BlockSearchInput;
