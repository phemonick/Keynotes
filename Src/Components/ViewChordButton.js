import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { openChordsModal } from '../actions';

class ViewChordButton extends Component {

    render() {
        return (
            <View style={this.props.style} >
                <Button
                    raised
                    icon={{ name: 'libary-music' }}
                    title="view Transposed Chords"
                    backgroundColor='#2196f3'
                    onPress={() => this.props.openChordsModal()}
                />
            </View>
        );
    }
}

export default connect(null, { openChordsModal })(ViewChordButton)
