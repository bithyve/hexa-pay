import {Box, Button, Text} from 'native-base';
import React, {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import EnableEye from '../../../assets/images/HomeScrn/VisibleEye.svg';
import DisableEye from '../../../assets/images/HomeScrn/InvisibleEye.svg';
import BalanceBg from '../../../assets/images/HomeScrn/BalanceCardBg.svg';

type BalanceCardProps = {
  backedUp: boolean;
  balance: number;
};

const {width, height} = Dimensions.get('window');

const BalanceCard: React.FC<BalanceCardProps> = ({backedUp, balance}) => {
  const [visible, setVisible] = useState<boolean>(true);

  const [amt] = useState<string>(
    balance.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
  );

  return (
    <Box style={styles.wrapper}>
      <BalanceBg
        style={{position: 'absolute'}}
        width={0.9 * width}
        height={(height > 736 ? 0.2 : 0.23) * height}
      />
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          paddingHorizontal: '12%',
          paddingVertical: height > 736 ? '8%' : '5%',
          elevation: 4,
        }}>
        <Box style={styles.content}>
          <Text color={'white'} fontSize={height > 736 ? 'sm' : 'xs'}>
            Your Wallet Balance
          </Text>
          <Text fontFamily={'RobotoSlab-Bold'} color={'white'} fontSize={['3xl', '4xl']}>
            {visible ? amt : '********'}
          </Text>
          <Box style={{display: 'flex', flexDirection: 'row'}}>
            <Box marginRight={2}>{backedUp ? 'A' : 'W'}</Box>
            <Text color={'white'} fontSize={height > 736 ? 'sm' : 'xs'}>
              Wallet is not backed up
            </Text>
          </Box>
        </Box>
        <Button
          style={styles.showToggle}
          onPress={() => {
            setVisible((prevS) => !prevS);
          }}>
          {visible ? <EnableEye /> : <DisableEye />}
        </Button>
      </Box>
    </Box>
  );
};

export default BalanceCard;

const styles = StyleSheet.create({
  wrapper: {
    width: 0.9 * width,
    height: 0.2 * height,
    marginHorizontal: 0.05 * width,
    marginTop: 0.05 * height,
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  showToggle: {
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'none',
    marginRight: height > 736 ? 0 : -7,
  },
  shadowProp: {
    shadowColor: '#171717',
    elevation: 6,
  },
});
