import React, { Component } from 'react';
import { View, Text ,StyleSheet,Platform,Image,TextInput,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        text:''
    };
  }

  render() {
    const resizeMode = 'center';
    return (
      <View style={styles.MainContainer}>
          <Image
            style={{
            flex: 1,

            position: 'absolute',
            width: 293,
            height: 301,
            justifyContent: 'center',
            top:0,
            right:0
            }}
            source={require('../../assets/loginBg.png')}
        ></Image>
          <Image
            style={{
            width: 46,
            height: 60,
            marginTop:215,
            }}
            source={require('../../assets/logo.png')}
        ></Image>
        <Text style={{fontSize:32,color:'#000000',marginTop:30}}>Car Rental,</Text>
        <Text style={{fontSize:32,color:'#888888',marginBottom:30}}>Travel, Love a car.</Text>
        <TextInput
            style={{height: 60, borderColor: 'rgba(119,119,119,0.8)', borderWidth: 0.5,borderRadius:10,marginBottom:15,padding:20}}
                onChangeText={(text) => this.setState({text})}
                placeholder="E-mail adress"
        />
        <TextInput
            style={{height: 60, borderColor: 'rgba(119,119,119,0.8)', borderWidth: 0.5,borderRadius:10,marginBottom:30,padding:20}}
                onChangeText={(text) => this.setState({text})}
                placeholder="Password"
        />
        <LinearGradient
      style={{width:'100%',padding:20,borderRadius:10,marginBottom:30}}
      colors={['#3C80F7', '#1058D1']}
      start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]}
    >
      <TouchableOpacity activeOpacity={0.1} onPress={()=>{this.props.navigation.navigate('Home')}}><Text style={{textAlign:'center',color:'#ffffff'}}>Login me</Text></TouchableOpacity>
        
        
    </LinearGradient>
    <View style={{display:'flex',justifyContent:'center',}}>
            <Text style={{color:'#888888',textAlign:'center'}}>Don’t have a account? <Text style={{color:'#000000'}}>Sign up</Text></Text>
            
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

    MainContainer: {
      flex: 1,
      paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
      paddingRight:40,
      paddingLeft:40,
    },
  });