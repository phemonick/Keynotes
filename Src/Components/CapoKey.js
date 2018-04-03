import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';

class CapoKey extends Component {

    render() {
        const { selectedValue: { capoKeyIndex }, Keys } = this.props;

        return (
            <View style={styles.container}>
                <Text h3> Capo Key </Text>
                <Text h1> {Keys[capoKeyIndex].key} </Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    }
});
const mapStateToProps = ({ Keys, selectedValue }) => ({ Keys, selectedValue });
export default connect(mapStateToProps)(CapoKey)
;
