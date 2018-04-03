import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { STATUS_BAR_HEIGHT } from '../Constants';
import { Divider } from 'react-native-elements';
import KeyButtons from '../Components/KeyButtons';
import CapoButtons from '../Components/CapoButtons';
import CapoKey from '../Components/CapoKey'
import ViewChordButton from '../Components/ViewChordButton';
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class MainScreen extends Component {

    static navigationOptions = () => ({
        title: 'Capo Keys',
        headerStyle: {
            height: 54,
            backgroundColor: '#2196f3'
        },
        headerTitleStyle: {
            marginTop: 0,
            color: '#FFFFFF'
        },
        headerLeft: (
            <Icon name="arrow-forward" size={30} color={'#fff'} style={[styles.myIc]} />
        )
    })
    state = {
        appIsReady: false
    }
    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.containerStyle} >
                    <KeyButtons />
                    <Divider style={styles.dividerStyle} />
                    <CapoButtons />
                    <Divider style={styles.dividerStyle} />
                    <CapoKey />
                </View> 
                <ViewChordButton style={styles.buttonContainerStyle} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    containerStyle: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    dividerStyle: {
        width: SCREEN_WIDTH * 0.9,
        backgroundColor: '#2196f3'
    }, 
    buttonContainerStyle: {
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
    }
  });
  
