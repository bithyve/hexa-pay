import React, { useState } from 'react'
import { View, Dimensions, Image, Text, StyleSheet, Modal } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Alert, Button } from 'native-base'
import en from '../content/language/en.json'

const {height, width} = Dimensions.get('window');

export default function ErrorModal(props: { title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; titleNextLine: string; info: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; note: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; noteNextLine: string; otherText: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; onPressProceed: () => void; onPressIgnore: () => void }) {

  const strings = en['f&f']
  const common = en[ 'common' ]

  return (
    <View style={styles.modalView}>
       <View style={styles.successModalHeaderView}> 
          <Text style={styles.headerStyle}>
            {props.title}
            {props.titleNextLine ? '\n' + props.titleNextLine : null}
          </Text>
          {props.info ? (
            <Text style = {styles.modalInfoText}>
              {props.info}
            </Text>
          ) : null}
        </View>
        <View style={styles.successModalAmountView}>
          {props.note ? (
            <Text>
              {props.note}
              {props.noteNextLine ? '\n' + props.noteNextLine : null}
            </Text>
          ) : null}
        </View>
        {props.otherText ? (
          <View style={styles.successModalAmountView}>
            <Text style = {styles.modalInfoText}>
              {props.otherText}
            </Text>
          </View>
        ) : null}
         <View style = {{ flexDirection: 'row', marginTop: '5%' }}>
         <View style={{ marginRight: '15%' }}> 
          <Button
            bg={'light.blue'}
            borderRadius={20}
            borderWidth = {2}
            borderColor ={'light.white'}
            _text={{fontSize: 14, fontWeight:'bold', color: 'light.white'}}
            onPress={() => props.onPressProceed()}>
              Continue  
          </Button>
        </View>
        <View>
          <Button
            bg={'light.blue'}
            borderRadius={20}
            borderWidth = {2}
            borderColor ={'light.white'}
            _text={{fontSize: 14, fontWeight:'bold', color: 'light.white'}}
            onPress={() => props.onPressIgnore()}>
              Ignore  
          </Button>
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  modalView: {
    // flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    marginTop: height * 0.5,
    height: height * 0.5,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 35,
  },
  successModalHeaderView: {
    marginRight: '8%',
    marginLeft: '8%',
  },
  successModalAmountView: {
    justifyContent: 'center',
    marginRight:'8%',
    marginLeft: '8%',
  },
  headerStyle :{
    color: '#4286F5',
    fontWeight: '500',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
  },
  modalInfoText: {
    opacity: 1,
    fontSize: RFValue(11),
    letterSpacing: 0.6
  },
})
