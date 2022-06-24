import {Box, Button, Modal, Text} from 'native-base';
import React, {useState} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import EnableEye from '../../../assets/images/HomeScrn/VisibleEye.svg';
import DisableEye from '../../../assets/images/HomeScrn/InvisibleEye.svg';
import BalanceBg from '../../../assets/images/HomeScrn/BalanceCardBg.svg';
import WarningIcon from '../../../assets/images/HomeScrn/amberWarning.svg';
import CloseButton from '../../../assets/images/HomeScrn/cross.svg';
import formatMoney from 'accounting';

type BalanceCardProps = {
  backedUp: boolean;
  balance: number;
};

const {width, height} = Dimensions.get('window');

const BalanceCard: React.FC<BalanceCardProps> = ({backedUp, balance}) => {
  const [visible, setVisible] = useState<boolean>(true);

  const [amt] = useState<string>(formatMoney.formatMoney(balance, {symbol: '$', format: '%s %v'}));

  const [warningModal, setWarningModal] = useState<boolean>(false);

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
          <TouchableOpacity
            style={{display: 'flex', flexDirection: 'row'}}
            onPress={() => {
              if (!backedUp) {
                setWarningModal(true);
              }
            }}>
            <Box marginRight={2} justifyContent={'center'} alignItems={'center'}>
              {backedUp ? 'A' : <WarningIcon />}
            </Box>
            <Text color={'white'} fontSize={height > 736 ? 'sm' : 'xs'}>
              Wallet is not backed up
            </Text>
          </TouchableOpacity>
        </Box>
        <Button
          style={styles.showToggle}
          onPress={() => {
            setVisible((prevS) => !prevS);
          }}>
          {visible ? <EnableEye /> : <DisableEye />}
        </Button>
      </Box>
      <Modal
        isOpen={warningModal}
        onClose={() => setWarningModal(false)}
        _backdrop={{bg: 'transparent'}}
        style={styles.modalStyle}>
        <Modal.Content>
          <Modal.Body style={{display: 'flex', flexDirection: 'row'}}>
            <Text fontSize={[11, 'md']} width={'90%'}>
              Welcome! Look for me in the contacts to learn more about me.
            </Text>
            <TouchableOpacity
              onPress={() => setWarningModal(false)}
              style={{width: '10%', margin: 5}}>
              <CloseButton />
            </TouchableOpacity>
          </Modal.Body>
        </Modal.Content>
        <Box style={styles.triangle} />
      </Modal>
    </Box>
  );
};

export default BalanceCard;

const styles = StyleSheet.create({
  wrapper: {
    width: 0.9 * width,
    height: 0.2 * height,
    marginHorizontal: 0.05 * width,
    marginTop: 0.045 * height,
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
  modalStyle: {
    width: 0.7 * width,
    top: -0.16 * width,
    left: -0.045 * width,
    borderWidth: 0,
  },
  triangle: {
    left: -0.15 * width,
    top: -1,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 9,
    borderRightWidth: 9,
    borderBottomWidth: 0,
    borderLeftWidth: 9,
    borderTopColor: 'white',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
});
