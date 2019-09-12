import React, { Component } from 'react';
import { Text,TouchableOpacity,Image } from 'react-native';import {  Footer } from "native-base";
export default class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Footer style={{
            backgroundColor: 'white',
            shadowOffset: { width: 3, height: 3 },
            shadowColor: '#000000',
            shadowRadius: 5,
            shadowOpacity: 0.3,
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly'

        }}>
            <TouchableOpacity style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../assets/home.png')} height={22} width={22} />
                <Text style={{ fontSize: 10, fontFamily: 'Avenir-Heavy' }}>Homepage</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../assets/clipboard.png')} height={22} width={22} />
                <Text style={{ fontSize: 10, fontFamily: 'Avenir-Heavy' }}>Works</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{

                marginTop: -20,
            }}>
                <Image source={require('../../assets/addIcon.png')} style={{ marginTop: -2, borderColor: '#F0F1F3', borderWidth: 6, borderRadius: 66 / 2, height: 66, width: 66 }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../assets/date.png')} height={22} width={22} />
                <Text style={{ fontSize: 10, fontFamily: 'Avenir-Heavy' }}>Calendar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../assets/account.png')} height={22} width={22} />
                <Text style={{ fontSize: 10, fontFamily: 'Avenir-Heavy' }}>Profile</Text>
            </TouchableOpacity>
        </Footer>
    );
  }
}
