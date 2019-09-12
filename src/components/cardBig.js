import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Animated, Easing,StyleSheet } from 'react-native';
import LottieView from "lottie-react-native";
export default class cardBig extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wishlist:false,
            progress: new Animated.Value(0),
        };
    }
    _whishlistHandler(){
        if(this.state.wishlist == false){
            Animated.timing(this.state.progress, {
                toValue: 1,
                duration: 500,
                easing: Easing.linear,
            }).start();
            this.setState({wishlist:true})
        }else{
            Animated.timing(this.state.progress, {
                toValue: 0,
                duration: 500,
                easing: Easing.linear,
            }).start();
            this.setState({wishlist:false})
        }
    }
    render() {
        return (
            <View style={styles.cardWraper}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ fontSize: 20, fontFamily: 'Avenir-Heavy' }}>Chevy Camaro</Text>
                        <Text style={{ fontSize: 12, color: '#333333', fontFamily: 'Avenir-Medium' }}>ECOBOOST</Text>
                        <Text style={{ fontSize: 24, color: '#FE7B37', fontFamily: 'Avenir-Black' }}>$89<Text style={{ fontSize: 12, fontFamily: 'Avenir-Medium' }}>/hour</Text></Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => {this._whishlistHandler()}}>
                            <LottieView
                                progress={this.state.progress}
                                ref={animation => {
                                    this.animation = animation;
                                }}
                                onAnimationFinish={() => {
                                    // this.animation.reset();
                                }}
                                speed={1}
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                                source={require('../../assets/favourite.json')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ display: 'flex', marginTop: 30, marginBottom: 30 }}>
                    <Image source={require('../../assets/camaro.png')} height="150" width="250" />
                </View>
                <View style={styles.featuresHolder}>
                    <View style={styles.featuresWraper}>
                        <View style={styles.features}>
                            <Image source={require('../../assets/engine.png')} height="25" width="27" />

                        </View>
                        <Text style={styles.featuresTitle}>3200 cc</Text>
                    </View>
                    <View style={styles.featuresWraper}>
                        <View style={styles.features}>
                            <Image source={require('../../assets/engine.png')} height="25" width="27" />

                        </View>
                        <Text style={styles.featuresTitle}>3200 cc</Text>
                    </View>
                    <View style={styles.featuresWraper}>
                        <View style={styles.features}>
                            <Image source={require('../../assets/engine.png')} height="25" width="27" />
                        </View>
                        <Text style={styles.featuresTitle}>3200 cc</Text>
                    </View>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
	cardWraper: {
        backgroundColor: 'white', borderColor: '#F0F1F3',
        margin: 20,
        paddingVertical: 15,
        paddingHorizontal:10,
        // if you need 
        borderWidth: 1,
        shadowOffset: { width: 3, height: 3 },
        shadowColor: '#000000',
        shadowRadius: 5,
        shadowOpacity: 0.2,
        borderRadius: 15
    },
    featuresHolder:{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' },
    featuresWraper:{ display: 'flex', flexDirection: 'row', alignItems: 'center' },
	features:{
        height: 34, width: 34, backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: { width: 3, height: 3 },
        shadowColor: '#000000',
        shadowRadius: 5,
        shadowOpacity: 0.2,
        borderRadius: 50 / 2, marginRight: 10
    },
    featuresTitle:{ fontSize: 10, fontFamily: 'Avenir-Heavy' }
})
