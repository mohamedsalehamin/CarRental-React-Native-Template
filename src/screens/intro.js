import React, { Component,Fragment } from 'react';

import { StyleSheet, View, Text, Platform,Image ,StatusBar,SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleRight,faAngleLeft ,faCheck,faTimes} from '@fortawesome/free-solid-svg-icons'
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';


export default class intro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show_Main_App: false
    };
  }
  on_Done_all_slides = () => {
    
    // AsyncStorage.removeItem('Intro')
    // AsyncStorage.setItem('Intro',true).then((Intro) => {
      // Go To Login
      this.props.navigation.navigate('Login')
      // Go To Home
      // this.props.navigation.navigate('Home')
    //  })

        
  };

  on_Skip_slides = () => {
    this.setState({ show_Main_App: true });
  };
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <FontAwesomeIcon icon={faAngleRight} style={{color:'#ffffff',}}  size={ 32 } />
      </View>
    );
  };
  _renderPrevButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <FontAwesomeIcon icon={faAngleLeft} style={{color:'#ffffff',}}  size={ 32 } />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <FontAwesomeIcon icon={faCheck} style={{color:'#ffffff',}}  size={ 32 } />
      </View>
    );
  };
  _renderSkipButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <FontAwesomeIcon icon={faTimes} style={{color:'#ffffff',}}  size={ 32 } />
      </View>
    );
  };
  _renderItem = ({ item, dimensions }) => (
    <LinearGradient
      style={[
        styles.mainContent,
        {
          flex: 1,
          paddingTop: item.topSpacer,
          paddingBottom: item.bottomSpacer,
          width: dimensions.width,
        },
      ]}
      colors={item.colors}
      start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]}
    >
      
      <View style={styles.MainContainer}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </LinearGradient>
  );
  render() {
    return (
        <Fragment>
          <StatusBar barStyle="dark-content" />
          <AppIntroSlider
            slides={slides}
            renderItem={this._renderItem}
            onDone={this.on_Done_all_slides}
            showSkipButton={true}
            showPrevButton={true}
            showDoneButton={true}
            onSkip={this.on_Skip_slides}
            renderNextButton={this._renderNextButton}
            renderPrevButton={this._renderPrevButton}
            renderDoneButton={this._renderDoneButton}
            renderSkipButton={this._renderSkipButton}
          />
          
        </Fragment>
      );
  }
}
const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    padding:20,
    textAlign:'center'
  },
  buttonCircle:{
    backgroundColor:'#4377CD',
    
    paddingTop:5,
    paddingBottom:5,
    paddingRight:20,
    paddingLeft:20,
    borderRadius:25,
  },
  image: {
    width: 375,
    height: 454,
    resizeMode: 'contain'
  }
});

const slides = [
  {
    key: 'k1',
    title: 'Event Organizer',
    text: 'Coventry is a city with a thousand years of history that has plenty to offer the visiting tourist.',
    image: require('../../assets/Phone.png'),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#FF1744',
    colors: ['#3C80F7', '#1058D1'],
  },
  {
    key: 'k2',
    title: 'Event Organizer 2',
    text: 'Coventry is a city with a thousand years of history that has plenty to offer the visiting tourist.',
    image: require('../../assets/Phone.png'),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#FF1744',
    colors: ['#3C80F7', '#1058D1'],
  },
  
  {
    key: 'k5',
    title: 'Event Organizer 3',
    text: 'Coventry is a city with a thousand years of history that has plenty to offer the visiting tourist.',
    image: require('../../assets/Phone.png'),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#FF1744',
    colors: ['#3C80F7', '#1058D1'],
  },
];