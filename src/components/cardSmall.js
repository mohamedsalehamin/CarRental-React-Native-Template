import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Animated, Easing, } from 'react-native';
export default class cardSmall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    componentDidMount(){
    }
    render() {
        return (
            <View style={{
                backgroundColor: 'white', borderColor: '#F0F1F3',
                marginTop: 20,
                marginRight: 15,
                marginLeft: 5,
                paddingTop: 20,
                paddingBottom: 20,
                borderWidth: 1,
                shadowOffset: { width: 3, height: 3 },
                shadowColor: '#000000',
                shadowRadius: 5,
                shadowOpacity: 0.1,
                borderRadius: 15,
                height:146,width:150
            }}>
                <View style={{ display: 'flex', marginTop: 10, marginBottom: 10 }}>
                    <Image source={this.props.image} height="56" width="117" />
                </View>
                <View style={{marginLeft:10}}>
                    <Text style={{ fontSize: 14, fontFamily: 'Avenir-Heavy',color:'#333333' }}>{this.props.title}</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Avenir-Heavy' }}>728 ITEM</Text>
                </View>
            </View>
        );
    }
}
