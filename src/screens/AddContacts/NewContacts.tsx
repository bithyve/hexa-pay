import {View, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import {Heading, HStack, Text, VStack, Input, Icon, Box} from 'native-base';
import Search from 'assets/images/search.svg';

const {height, width} = Dimensions.get('window');

const Wrapper: React.FunctionComponent<{children: Element}> = ({children}) => {
    return (
      <Box
        bgColor={'light.searchbar:alpha.30'}
        rounded="lg"
        margin={'5'}
        marginBottom={'0'}
        alignItems="flex-end"
        flexDirection={'row'}
        height={height * 0.05}
        width={width * 0.82}>
        <HStack alignItems="center" justifyContent={'space-between'}>
          <Search style = {styles.iconStyle}/>
            <VStack>{children}</VStack>
        </HStack>
      </Box>
    );
  };

const NewContacts = () => {
  return (
    <HStack padding={'4'} marginBottom={'8'} marginTop={'6'}>
        <Wrapper>
            <Input 
                placeholderTextColor="white"
                placeholder="Search by name or number" 
                fontSize="15" 
                fontWeight={600}
                width={width * 0.82}
                height={height * 0.05}
                borderRadius="10"
                borderWidth="0" />
        </Wrapper>
    </HStack>
  );
};

export default NewContacts;

const styles = StyleSheet.create({
  iconStyle: {
    marginLeft: '4%'
  },
});