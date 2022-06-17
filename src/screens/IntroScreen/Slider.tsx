import React, {useRef, useState} from 'react';
import {Dimensions, ScrollView as SC, StyleSheet} from 'react-native';
import {Box, Button, Pressable, ScrollView, Text} from 'native-base';
import IntroScreen1 from './IntroScreen1';
import IntroScreen2 from './IntroScreen2';
import IntroScreen3 from './IntroScreen3';
import RightArrow from '../../../assets/images/icon_arrow_right.svg';
import {IntroBackButton} from '../../components/IntroBackButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/Navigator';
import {StackActions} from '@react-navigation/native';
import ToggleDark from '~components/ToggleDark';

export type ISliderProps = {};

const {width, height} = Dimensions.get('window');

const Slider: React.FC<NativeStackScreenProps<RootStackParamList, 'IntroScreens'>> = ({
  navigation,
}) => {
  const [page, setPage] = useState<number>(0);

  const scrollV = useRef<SC>(null);

  const setSliderPage = (event: any) => {
    const currentPage = page;
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor((x + 1) / width);
    if (indexOfNextScreen !== currentPage) {
      setPage(indexOfNextScreen);
    }
  };

  const prevScreen = () => {
    if (scrollV.current && page > 0) {
      scrollV.current.scrollTo({x: (page - 1) * width});
      setPage((p) => p - 1);
    }
  };

  return (
    <>
      {/* <ToggleDark /> */}
      <ScrollView
        ref={scrollV}
        horizontal={true}
        style={styles.scrollView}
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={(event: any) => {
          setSliderPage(event);
        }}>
        <IntroScreen1 />
        <IntroScreen2 />
        <IntroScreen3 />
      </ScrollView>
      {page !== 0 ? (
        <IntroBackButton
          onPress={prevScreen}
          style={{
            backgroundColor: '#fff',
            top: 0.025 * height,
            left: 0.05 * width,
          }}
        />
      ) : (
        <></>
      )}
      {page !== 2 ? (
        <Pressable
          style={{position: 'absolute', top: 0.042 * height, left: 0.88 * width}}
          onPress={() => navigation.dispatch(StackActions.replace('PasscodeScr', {prevS: null}))}>
          <Text color={'white'}>Skip</Text>
        </Pressable>
      ) : (
        <></>
      )}
      <Box style={styles.boxContainer} _dark={{bg: 'blueGray.900'}} _light={{bg: 'blueGray.50'}}>
        <Box style={styles.paginationWrapper}>
          {Array.from(Array(3).keys()).map((_, index) => (
            <Box style={[styles.paginationDots, {}]} key={index} />
          ))}
          <Box
            style={[
              {
                left: page * (0.09 * width) - 0.025 * width * page + (page === 0 ? 1 : 0),
              },
              styles.activePageDot,
            ]}
          />
        </Box>
        {page === 2 ? (
          <Box style={styles.buttonConatiner}>
            <Button
              style={styles.buttonStyle}
              onPress={() => {
                navigation.dispatch(StackActions.replace('PasscodeScr'));
              }}>
              <RightArrow width={25} height={25} style={{marginLeft: 5}} fill={'#fff'} />
            </Button>
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
    color: 'black',
  },
  scrollView: {flex: 1},
  paginationWrapper: {
    position: 'absolute',
    left: 0.1 * width,
    right: 0,
    top: height > 720 ? 25 : 15,
    flexDirection: 'row',
  },
  paginationDots: {
    height: 14,
    width: '9%',
    borderRadius: 50,
    marginLeft: '-2.25%',
    backgroundColor: '#FFE09D',
  },
  activePageDot: {
    height: 7,
    width: '8.5%',
    borderRadius: 50,
    backgroundColor: '#FABC05',
    position: 'absolute',
    marginLeft: '-1.75%',
    top: '25%',
  },
  boxContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '10%',
    height: height * 0.1,
    width,
  },
  buttonStyle: {
    marginLeft: 'auto',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    backgroundColor: '#FABC05',
  },
  buttonConatiner: {
    top: height > 720 ? -25 : -20,
    borderWidth: 3,
    marginLeft: 'auto',
    padding: 2,
    borderRadius: 50,
    width: 60,
    height: 60,
    borderColor: '#FABC05',
  },
});

export default Slider;
