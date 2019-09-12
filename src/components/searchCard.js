import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Animated, Easing, } from 'react-native';
export default class cardBig extends Component {
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
                marginHorizontal: 15,
                paddingVertical: 20,
                borderWidth: 1,
                shadowOffset: { width: 3, height: 3 },
                shadowColor: '#000000',
                shadowRadius: 5,
                shadowOpacity: 0.1,
                borderRadius: 15,
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between'
            }}>
                <View style={{marginLeft:10}}>
                    <Text style={{ fontSize: 20, fontFamily: 'Avenir-Heavy' }}>Chevy Camaro</Text>
                    <Text style={{ fontSize: 12, color: '#333333', fontFamily: 'Avenir-Medium' }}>ECOBOOST</Text>
                    <Text style={{ fontSize: 24, color: '#FE7B37', fontFamily: 'Avenir-Black' }}>$89<Text style={{ fontSize: 12, fontFamily: 'Avenir-Medium' }}>/hour</Text></Text>
                    <View style={{display:'flex',flexDirection:'row',marginTop:30}}>
                        <Image source={require('../../assets/verified.png')} style={{height:22,width:22,marginRight:10}} />
                        <Text style={{ fontSize: 10, fontFamily: 'Avenir-Heavy',color:'#216DEE' }}>Safe Vehicle</Text>
                    </View>
                </View>
                <View style={{ marginTop: 10, marginBottom: 10 }}>
                    <Image source={this.props.image} height="56" width="117" />
                </View>
                
            </View>
        );
    }
}
