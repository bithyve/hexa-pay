import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useState, useEffect, Fragment} from 'react';
import {
  Camera,
  CameraPermissionStatus,
  useCameraDevices,
  useFrameProcessor,
} from 'react-native-vision-camera';
const {height, width} = Dimensions.get('window');
import QrAdbobeScreen from '../../../assets/images/qrdemoscreen.png';

export default function QRScreen() {
  const [cameraPermission, setCameraPermission] = useState(false);
  const [qrData, setQrData] = useState();

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setCameraPermission(status === 'authorized');
    })();
  }, []);

  const devices = useCameraDevices();
  const device = devices.back;

  const frameProcessor = useFrameProcessor((frame) => {
    'worklet';
    console.log('New Frame');
  }, []);

  if (!cameraPermission) {
    return (
      <View>
        <Text>No Camera Permission</Text>
      </View>
    );
  }

  if (device == null) {
    return (
      <View>
        <QrAdbobeScreen />
        <Text style={styles.camera}>Activity Indiacator</Text>
      </View>
    );
  }

  return (
    device != null &&
    cameraPermission && (
      <Fragment>
        <QrAdbobeScreen />
      </Fragment>
      //Code for the camera component to render after the allowed persmission
      // <Camera
      //   style={styles.camera}
      //   frameProcessor={frameProcessor}
      //   frameProcessorFps={30}
      //   device={device}
      //   isActive={true}
      // />
    )
  );
}

const styles = StyleSheet.create({
  camera: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.5,
  },
  backButton: {
    color: 'white',
    margin: 20,
  },
  contentContainer: {
    justifyContent: 'space-between',
    backgroundColor: '#2F2F2F',
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: '#FAFCFC',
  },
  subText: {
    fontSize: 12,
    color: '#FAFCFC',
  },
  textContainer: {
    margin: 20,
    marginBottom: 100,
  },
});
