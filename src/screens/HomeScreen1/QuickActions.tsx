import {Box, Text} from 'native-base';
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import AddContact from '../../../assets/images/contacts.svg';

type QuickActionsProps = {};

type TileProps = {
  content: string;
};

const {width, height} = Dimensions.get('window');

const ActionTile: React.FC<TileProps> = ({content}) => {
  return (
    <Box style={styles.tile}>
      <AddContact height={0.04 * height} width={0.04 * height} />
      <Text fontSize={height > 736 ? (width > 500 ? 'md' : 'sm') : 10} marginY={2}>
        {content}
      </Text>
    </Box>
  );
};

const QuickActions: React.FC<QuickActionsProps> = () => {
  return (
    <Box style={styles.wrapper}>
      <Text fontSize={['md', 'xl']} height={'10.5%'} fontFamily={'Roboto-Bold'}>
        Quick actions
      </Text>
      <Box style={styles.tileWrapper}>
        <ActionTile content="Add new contact" />
        <ActionTile content="Create Group" />
        <ActionTile content="Gifts and Tips" />
        <ActionTile content="Broadcast Message" />
        <ActionTile content="Buy Bitcoin" />
        <ActionTile content="Pay Merchants" />
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
