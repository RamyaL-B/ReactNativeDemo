
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';

export default class EditText extends Component {
    render() {
        return (
            <View>
                <TextInput
                    style = {{height: 40}}
                    placeholder= "First Name"
                    
                />
                <Text>"Bolo"</Text>
            </View>
        );
    }
}