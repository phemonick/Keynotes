import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text, ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';
import { selectCapo } from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const CAPO_POSITION = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

class CapoButtons extends Component {

    render() {
        const { selectedCapo } = this.props.selectedValue;
        const {
            containerStyle,
            buttonStyle,
            selectedTextStyle
        } = styles;
        return (
            <View style={styles.container}>
                <Text h1> Capo </Text>
                <Text h1 style={{ marginBottom: 2 }}>{selectedCapo}</Text>
                <ButtonGroup
                    onPress={index => this.props.selectCapo(index + 1)}
                    buttons={CAPO_POSITION}
                    selectedIndex={selectedCapo - 1}
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

const mapStateToProps = ({ selectedValue }) => ({ selectedValue });

export default connect(mapStateToProps, { selectCapo })(CapoButtons);

