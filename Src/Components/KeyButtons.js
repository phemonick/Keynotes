import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text, ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';
import { selectKeyIndex } from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;

 class KeysButtons extends Component {

    render() {
        const { Keys, selectedValue: { selectedKeyIndex } } = this.props;
        const keyButtons = Keys.map(key => (key.shortkey ? '/' : [key.key]));
        const {
            containerStyle,
            buttonStyle,
            selectedTextStyle
        } = styles;

        return (
            <View style={styles.container}>
                <Text h1> Hello key </Text>
                <Text h1 style={{ marginBottom: 2 }}>{Keys[selectedKeyIndex].key}</Text>
                <ButtonGroup
                    onPress={index => this.props.selectKeyIndex(index)}
                    buttons={keyButtons}
                    selectedIndex={selectedKeyIndex}
                    containerStyle={containerStyle}
                    buttonStyle={buttonStyle}
                    selectedTextStyle={selectedTextStyle}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerStyle: {
        height: 40,
        width: SCREEN_WIDTH * 0.9
    },
    buttonStyle: {
        backgroundColor: '#fff'
    },
    selectedTextStyle: {
        color: 'orange',
        fontWeight: '900'
    }
  });
//   reducers
  const mapStateToProps = ({ Keys, selectedValue }) => ({ Keys, selectedValue });
// reducers and action
  export default connect(mapStateToProps, { selectKeyIndex })(KeysButtons);
