import * as React from 'react';
import { Animated,Easing, Dimensions, Text, TouchableOpacity, View, Image, ScrollView, StyleSheet } from "react-native";
import { Body, Header, ListItem as Title, Left, Container, Content, Right } from "native-base";
import LinearGradient from "react-native-linear-gradient";

import CardBig from '../components/cardBig'
import CardSmall from '../components/cardSmall'
import Footer from '../components/footer'

const { height, width } = Dimensions.get("window");
export default class Home extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         bounceValue: new Animated.Value(5000),
         fadeAnim: new Animated.Value(0),
      };
      this.animatedValue = new Animated.Value(0);
   }
   _openModal() {
      Animated.spring(
         this.state.bounceValue,
         {
            toValue: 0,
            velocity: 3,
            tension: 2,
            friction: 8,
         }
      ).start();
   }
   _hideModal() {
      Animated.spring(
         this.state.bounceValue,
         {
            toValue: height,
            velocity: 3,
            tension: 2,
            friction: 8,
         }
      ).start();
   }
   componentDidMount() {
      this.animatedValue.setValue(0)
      // apply fade animation to small card
      Animated.timing(
         this.state.fadeAnim,
         {
            toValue: 1,
            duration: 1000,
         }
      ).start();
      
      // apply scroll to left animation to big card
      Animated.timing(
        this.animatedValue,
        {
          toValue: 1,
          duration: 2000,
          easing:Easing.inOut(Easing.quad)
        }
    ).start()
      
   }
   render() {
      const marginLeft = this.animatedValue.interpolate({
         inputRange: [0, 1],
         outputRange: [260, 0]
       })
      return (
         <Container>
            <LinearGradient colors={['#3C80F7', '#1058D1']} start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} >
               <Header style={{ backgroundColor: "transparent" }} hasTabs>
                  <Left>
                     <Text style={{ fontFamily: 'Avenir-Heavy', color: 'white', fontSize: 20, marginLeft: 10 }}>Homepage</Text>
                  </Left>
                  <Body />
                  <Right>
                     <TouchableOpacity style={{ marginRight: 10 }} onPress={() => { this.props.navigation.navigate('Search') }}>
                        <Image source={require('../../assets/search.png')} height={20} width={20} />
                     </TouchableOpacity>
                     <TouchableOpacity>
                        <Image source={require('../../assets/notification.png')} height={20} width={20} />
                     </TouchableOpacity>
                  </Right>
               </Header>
               <ScrollView horizontal={true} style={{ display: 'flex' }}>
                  <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', padding: 10, marginLeft: 20, borderBottomColor: '#ffffff', borderBottomWidth: 5 }}>
                     <Text style={{ display: 'flex', fontSize: 14, fontFamily: 'Avenir-Heavy', color: '#ffffff' }}>All </Text>
                     <Text style={{ color: '#216DEE', backgroundColor: '#ffffff', borderRadius: 10, paddingLeft: 15, paddingRight: 15, }}>25</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { this._openModal() }} style={{ padding: 10 }}>
                     <Text style={{ fontSize: 14, fontFamily: 'Avenir-Heavy', marginLeft: 20, color: '#D8D8D8' }}>Sports</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { this._openModal() }} style={{ padding: 10 }}>
                     <Text style={{ fontSize: 14, fontFamily: 'Avenir-Heavy', marginLeft: 20, color: '#D8D8D8' }}>Exclusive</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { this._openModal() }} style={{ padding: 10 }}>
                     <Text style={{ fontSize: 14, fontFamily: 'Avenir-Heavy', marginLeft: 20, color: '#D8D8D8' }}>Family</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { this._openModal() }} style={{ padding: 10 }}>
                     <Text style={{ fontSize: 14, fontFamily: 'Avenir-Heavy', marginLeft: 20, color: '#D8D8D8' }}>Trucks</Text>
                  </TouchableOpacity>
               </ScrollView>
            </LinearGradient>
            <Content>
               <ScrollView horizontal={true} style={{ paddingTop: 10, paddingBottom: 20, }}>
                  <Animated.View style={{marginLeft}}>
                     <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                        <CardBig />
                     </TouchableOpacity>
                  </Animated.View>
                  <Animated.View style={{marginLeft}}>
                     <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                        <CardBig />
                     </TouchableOpacity>
                  </Animated.View>
                  <Animated.View style={{marginLeft}}>
                     <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                        <CardBig />
                     </TouchableOpacity>
                  </Animated.View>
                  <Animated.View style={{marginLeft}}>
                     <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                        <CardBig />
                     </TouchableOpacity>
                  </Animated.View>
                  <Animated.View style={{marginLeft}}>
                     <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                        <CardBig />
                     </TouchableOpacity>
                  </Animated.View>
                  <Animated.View style={{marginLeft}}>
                     <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                        <CardBig />
                     </TouchableOpacity>
                  </Animated.View>
               </ScrollView>

               <ScrollView horizontal={true} style={{ paddingTop: 10, paddingBottom: 20, }}>
                  <Animated.View style={{opacity: this.state.fadeAnim,}}>
                     <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                        <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                     </TouchableOpacity>
                  </Animated.View>
                  <Animated.View style={{opacity: this.state.fadeAnim,}}>
                     <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                        <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                     </TouchableOpacity>
                  </Animated.View>
                  <Animated.View style={{opacity: this.state.fadeAnim,}}>
                     <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                        <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                     </TouchableOpacity>
                  </Animated.View>
                  <Animated.View style={{opacity: this.state.fadeAnim,}}>
                     <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                        <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                     </TouchableOpacity>
                  </Animated.View>
                  <Animated.View style={{opacity: this.state.fadeAnim,}}>
                     <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                        <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                     </TouchableOpacity>
                  </Animated.View>

               </ScrollView>

            </Content>
            <Animated.View
               style={[styles.subView,
               { transform: [{ translateY: this.state.bounceValue }] }]}
            >
               <View style={{ padding: 20, display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                  <View>
                     <Text style={{ fontSize: 20, fontFamily: 'Avenir-Heavy' }}>Category</Text>
                  </View>
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('SearchNearBy') }} style={{ display: 'flex', flexDirection: 'row', borderColor: '#D2D2D2', borderWidth: 2, borderRadius: 25, paddingRight: 10, paddingLeft: 10, paddingTop: 5, paddingBottom: 5 }}>
                     <Image source={require('../../assets/map_pointer.png')} width={14} height={18} />
                     <Text style={{ fontSize: 12, fontFamily: 'Avenir-Roman', marginLeft: 10 }}>Search Near</Text>
                  </TouchableOpacity>
               </View>
               <ScrollView contentContainerStyle={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', paddingBottom: 150 }}>
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                     <CardSmall image={require('../../assets/HomeMustang.png')} title="Supersports" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                     <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                     <CardSmall image={require('../../assets/HomeMustang.png')} title="Supersports" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                     <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                     <CardSmall image={require('../../assets/HomeMustang.png')} title="Supersports" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                     <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                  </TouchableOpacity>
                  <View style={{ display: 'flex', alignItems: 'center', padding: 30 }}>
                     <TouchableOpacity onPress={() => this._hideModal()} style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', height: 60, width: 60, borderRadius: 60 / 2, shadowOffset: { width: 3, height: 3 },
                        shadowColor: '#000000',
                        shadowRadius: 5,
                        shadowOpacity: 0.1,
                     }}>
                        <Image source={require('../../assets/X.png')} height={18} width={18} />
                     </TouchableOpacity>
                  </View>
               </ScrollView>
            </Animated.View>
            <Footer />
         </Container>
      )
   }
}


var styles = StyleSheet.create({
   subView: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      top: 133,
      backgroundColor: "#ffffff",
      height: height,
      zIndex: 1,
   }
});