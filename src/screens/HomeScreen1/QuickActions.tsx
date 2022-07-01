import {Box, Text} from 'native-base';
import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import AddContact from '../../../assets/images/contacts.svg';
import CreateGrp from '../../../assets/images/group.svg';
import Gift from '../../../assets/images/gift.svg';
import Broadcast from '../../../assets/images/broadcast.svg';
import Bitcoin from '../../../assets/images/bitcoin.svg';
import PayMerchant from '../../../assets/images/payments.svg';
import {SvgProps} from 'react-native-svg';
import {RFValue} from 'react-native-responsive-fontsize';

type TileProps = {
  content: string;
  Svg: React.FC<SvgProps>;
};

const {width, height} = Dimensions.get('window');

const ActionTile: React.FC<TileProps> = ({content, Svg}) => {
  return (
    <TouchableOpacity style={styles.tile}>
      <Svg height={0.04 * height} width={0.04 * height} />
      <Text fontSize={width > 420 ? RFValue(8) : RFValue(10)} marginY={2}>
        {content}
      </Text>
    </TouchableOpacity>
  );
};

const QuickActions: React.FC<{}> = ({}) => {
  return (
    <Box style={styles.wrapper}>
      <Text fontSize={['md', 'xl']} height={'10.5%'} fontFamily={'Roboto-Bold'}>
        Quick actions
      </Text>
      <Box style={styles.tileWrapper}>
        <ActionTile content="Add new contact" Svg={AddContact} />
        <ActionTile content="Create Group" Svg={CreateGrp} />
        <ActionTile content="Gifts and Tips" Svg={Gift} />
        <ActionTile content="Broadcast Message" Svg={Broadcast} />
        <ActionTile content="Buy Bitcoin" Svg={Bitcoin} />
        <ActionTile content="Pay Merchants" Svg={PayMerchant} />
      </Box>
    </Box>
  );
};

export default QuickActions;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: height > 685 ? '15%' : '8%',
    height: 0.35 * height,
    width: 0.9 * width,
    marginHorizontal: 0.05 * width,
  },
  tileWrapper: {
    height: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingHorizontal: '3%',
    paddingVertical: '2%',
  },
  tile: {
    backgroundColor: '#FFE599',
    width: 0.25 * width,
    height: 0.12 * height,
    marginBottom: '5%',
    paddingHorizontal: '5%',
    paddingVertical: height > 736 ? '4%' : '1.5%',
    borderRadius: 0.05 * width,
    elevation: 4,
  },
});
