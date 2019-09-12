import React, { Component } from 'react';
import { View, Text ,Animated,Easing,Image} from 'react-native';
import LottieView from "lottie-react-native";

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        progress: new Animated.Value(0),
    };
    
  }
  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
    }).start();
  }
  _handleAnimation(){
        // this.animation.reset();
        let self = this
        setTimeout(()=>{
            //self.props.navigation.navigate('Home')
        },3000)
  }

  render() {
    return (
      <View style={{display:'flex',alignItems: 'center',}}>
          <Image source={require('../../assets/logo.png')} style={{width: 46,height: 60,marginTop:185,resizeMode:'contain',zIndex:22,}} />
          <LottieView
            progress={this.state.progress}
            ref={animation => {
                this.animation = animation;
            }}
            onAnimationFinish={this._handleAnimation()}
            speed={1}
            style={{
                width: '100%',
                height: 400,
            }}
                source={require('../../assets/SplashScreen.json')}
            />
        <Text style={{fontSize:32,color:'#000000',}}>Car Rental,</Text>
        <Text style={{fontSize:32,color:'#888888',}}>Travel, Love a car.</Text>
      </View>
    );
  }
}
