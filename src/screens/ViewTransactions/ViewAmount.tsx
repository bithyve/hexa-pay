import {View, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import {Heading, HStack, Text, VStack, Input, Icon, Box} from 'native-base';
import Group from 'assets/images/Group 38015.svg';

const {height, width} = Dimensions.get('window');

const Wrapper: React.FunctionComponent<{children: Element[]}> = ({children}) => {
    return (
      <Box
        rounded="lg"
        margin={'5'}
        marginBottom={'0'}
        alignItems="flex-end"
        flexDirection={'row'}
        height={height * 0.1}>
        <HStack alignItems="center" justifyContent={'space-between'}>
            <VStack>{children}</VStack>
        </HStack>
      </Box>
    );
  };

const ViewAmount = () => {
  return (
    <HStack padding={'4'} marginBottom={'8'}>
        <Wrapper>
        <View style = {{ flexDirection: 'row'}}>
            <Group style = {styles.icon}/>
        <Heading size={'sm'} fontWeight={'extrabold'} color ={'light.white'} marginLeft={5} marginRight={3} marginTop={2}>
       $
      </Heading>
        <Heading size={'xl'} fontWeight={'extrabold'} color ={'light.white'}>
        4,005
      </Heading>
        </View>
     <View style = {styles.subHeader}>
     <Text fontSize={12} color ={'light.white'}>Available to spend :</Text>
     <Text fontSize={12} color ={'light.white'} fontWeight ={'extrabold'}>  $</Text>
     <Text fontSize={14} color ={'light.white'} fontWeight ={'extrabold'}>  2,980</Text>
     </View>
        </Wrapper>
    </HStack>
  );
};

export default ViewAmount;

const styles = StyleSheet.create({
    icon: {
     marginTop: 3
    },
    subHeader :{
        flexDirection: 'row',
        marginTop: 6,
    }
  });
