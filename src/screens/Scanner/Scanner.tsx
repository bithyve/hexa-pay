import {Dimensions, StyleSheet} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import {Camera, CameraDevice, useCameraDevices} from 'react-native-vision-camera';
import {Text, VStack} from 'native-base';
import {useIsForeground} from '~hooks/useIsForeground';
const {height} = Dimensions.get('window');
import {LocalizationContext} from '~content/LocContext';

const NoModule = () => {
  return (
    <VStack height={height} justifyContent={'center'} padding={'8'} background={'black'}>
      <Text textAlign={'center'} color={'white'}>
        {`No Camera Module.\nIf you are using a simulator please switch to a physical device to access the camera module.`}
      </Text>
    </VStack>
  );
};

const Scanner = () => {
  const devices = useCameraDevices();
  const {back, front, external, unspecified} = devices;
  const availableDevice: CameraDevice = back || front || external || unspecified;
  const [cameraPermissions, setCameraPermissions] = useState(false);
  const active = useIsForeground();
  useEffect(() => {
    if (availableDevice) {
      Camera.requestCameraPermission().then((permission) =>
        setCameraPermissions(permission === 'authorized')
      );
    }
  }, [devices]);

  return !cameraPermissions ? (
    <NoModule />
  ) : (
    <Camera style={StyleSheet.absoluteFill} device={availableDevice} isActive={active} />
  );
};

export default Scanner;
