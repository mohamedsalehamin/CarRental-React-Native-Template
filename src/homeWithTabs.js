import * as React from 'react';
import { Animated, Easing,Dimensions, Platform, Text, TouchableOpacity, View,Image,ScrollView } from "react-native";
import { Body, Header, List, ListItem as Item, ScrollableTab, Tab, TabHeading, Tabs, Title, Left, Container, Content, Footer } from "native-base";
import LinearGradient from "react-native-linear-gradient";

import CardBig from '../components/cardBig'
import CardSmall from '../components/cardSmall'

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const IMAGE_HEIGHT = 250;
const HEADER_HEIGHT = Platform.OS === "ios" ? 64 : 50;
const SCROLL_HEIGHT = IMAGE_HEIGHT - HEADER_HEIGHT;
const THEME_COLOR = "rgba(85,186,255, 1)";
const FADED_THEME_COLOR = "rgba(85,186,255, 0.8)";

export default class Home extends React.Component {
   nScroll = new Animated.Value(0);
   scroll = new Animated.Value(0);

   textColor = this.scroll.interpolate({
      inputRange: [0, SCROLL_HEIGHT / 5, SCROLL_HEIGHT],
      outputRange: [THEME_COLOR, FADED_THEME_COLOR, "white"],
      extrapolate: "clamp"
   });
   tabBg = this.scroll.interpolate({
      inputRange: [0, SCROLL_HEIGHT],
      outputRange: ["white", THEME_COLOR],
      extrapolate: "clamp"
   });
   tabY = this.nScroll.interpolate({
      inputRange: [0, SCROLL_HEIGHT, SCROLL_HEIGHT + 1],
      outputRange: [0, 0, 1]
   });
   headerBg = this.scroll.interpolate({
      inputRange: [0, SCROLL_HEIGHT, SCROLL_HEIGHT + 1],
      outputRange: ["transparent", "transparent", THEME_COLOR],
      extrapolate: "clamp"
   });
   imgScale = this.nScroll.interpolate({
      inputRange: [-25, 0],
      outputRange: [1.1, 1],
      extrapolateRight: "clamp"
   });
   imgOpacity = this.nScroll.interpolate({
      inputRange: [0, SCROLL_HEIGHT],
      outputRange: [1, 0],
   });
   tabContent = (x, i) => <View style={{ height: this.state.height }}>
      <List onLayout={({ nativeEvent: { layout: { height } } }) => {
         this.heights[i] = height;
         if (this.state.activeTab === i) this.setState({ height })
      }}>
         {new Array(x).fill(null).map((_, i) => <Item key={i}><Text>Item {i}</Text></Item>)}
      </List></View>;
   heights = [500, 500];
   state = {
      activeTab: 0,
      height: 500
   };

   constructor(props) {
      super(props);
      this.state = {
         progress: new Animated.Value(0),
       };
      this.nScroll.addListener(Animated.event([{ value: this.scroll }], { useNativeDriver: false }));
   }
   resetAnimation = () => {
      this.animation.reset();
      // this.animation.play();
    };
    componentDidMount() {
      // this.animation.play();
      // Or set a specific startFrame and endFrame with:

      
      
    }
  
   render() {
      return (
         <Container>
            <LinearGradient colors={['#00e4d0', '#5983e8']}  start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} >
                  <Header style={{ backgroundColor: "transparent"  }} hasTabs>
                     <Body>
                        <Title>
                           <Animated.Text style={{ color: this.textColor, fontWeight: "bold" }}>
                              Tab Parallax
                           </Animated.Text>
                        </Title>
                        {/* <Text style={{color:'white', fontSize: 25}}>Hiflyer</Text> */}
                     </Body>

                  </Header>
               </LinearGradient>
               <Content>
               <Animated.ScrollView
            scrollEventThrottle={5}
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.nScroll } } }], { useNativeDriver: true })}
            style={{ zIndex: 0, }}>

               <Tabs
                  prerenderingSiblingsNumber={3}
                  onChangeTab={({ i }) => {
                     this.setState({ height: this.heights[i], activeTab: i })
                  }}
                  renderTabBar={(props) => <Animated.View
                     style={{ transform: [{ translateY: this.tabY }], zIndex: 1, width: "100%", backgroundColor: "#000000", }}>
                     <LinearGradient colors={['#00e4d0', '#5983e8']} style={{ flex: 1, }} start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} >
                        <ScrollableTab {...props} style={{ backgroundColor: 'transparent' }}
                           renderTab={(name, page, active, onPress, onLayout) => (
                              <TouchableOpacity key={page}
                                 onPress={() => onPress(page)}
                                 onLayout={onLayout}
                                 activeOpacity={0.4}>
                                 <Animated.View
                                    style={{
                                       flex: 1,
                                       height: 100,
                                       backgroundColor: 'transparent'
                                    }}>
                                    <TabHeading scrollable
                                       style={{
                                          backgroundColor: "transparent",

                                       }}
                                       active={active}>
                                       <Animated.Text style={{
                                          fontWeight: active ? "bold" : "normal",
                                          color: 'white',
                                          fontSize: 14
                                       }}>
                                          {name}
                                       </Animated.Text>
                                    </TabHeading>
                                 </Animated.View>
                              </TouchableOpacity>
                           )}
                           underlineStyle={{ backgroundColor: this.textColor }} />
                     </LinearGradient>
                  </Animated.View>
                  }>
                  <Tab heading="All" style={{backgroundColor:'#FBFCFE'}}>
                     <CardBig />
                     <ScrollView horizontal={true} style={{paddingTop:20,paddingBottom:20,marginBottom: 30,}}> 
                        <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                        <CardSmall image={require('../../assets/HomeMustang.png')} title="Supersports" />
                        <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                        <CardSmall image={require('../../assets/HomeMustang.png')} title="Supersports" />
                        <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                        <CardSmall image={require('../../assets/HomeMustang.png')} title="Supersports" />
                        <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                     </ScrollView>
                     
                  </Tab>
                  <Tab heading="Sports">
                     <CardBig />
                     <ScrollView horizontal={true} style={{paddingTop:20,paddingBottom:20,marginBottom: 30,}}> 
                        <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                        <CardSmall image={require('../../assets/HomeMustang.png')} title="Supersports" />
                        <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                        <CardSmall image={require('../../assets/HomeMustang.png')} title="Supersports" />
                        <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                        <CardSmall image={require('../../assets/HomeMustang.png')} title="Supersports" />
                        <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                     </ScrollView>
                  </Tab>
                  <Tab heading="Exclusive">
                     <CardBig />
                     <ScrollView horizontal={true} style={{paddingTop:20,paddingBottom:20,marginBottom: 30,}}> 
                        <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                        <CardSmall image={require('../../assets/HomeMustang.png')} title="Supersports" />
                        <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                        <CardSmall image={require('../../assets/HomeMustang.png')} title="Supersports" />
                        <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                        <CardSmall image={require('../../assets/HomeMustang.png')} title="Supersports" />
                        <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                     </ScrollView>
                  </Tab>
                  <Tab heading="Family">
                     <CardBig />
                     <ScrollView horizontal={true} style={{paddingTop:20,paddingBottom:20,marginBottom: 30,}}> 
                        <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                        <CardSmall image={require('../../assets/HomeMustang.png')} title="Supersports" />
                        <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                        <CardSmall image={require('../../assets/HomeMustang.png')} title="Supersports" />
                        <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                        <CardSmall image={require('../../assets/HomeMustang.png')} title="Supersports" />
                        <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                     </ScrollView>
                  </Tab>
                  <Tab heading="Trucks">
                     <CardBig />
                     <ScrollView horizontal={true} style={{paddingTop:20,paddingBottom:20,marginBottom: 30,}}> 
                        <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                        <CardSmall image={require('../../assets/HomeMustang.png')} title="Supersports" />
                        <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                        <CardSmall image={require('../../assets/HomeMustang.png')} title="Supersports" />
                        <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                        <CardSmall image={require('../../assets/HomeMustang.png')} title="Supersports" />
                        <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                     </ScrollView>
                  </Tab>
               </Tabs>
            </Animated.ScrollView>
               </Content>
               <Footer style={{
               backgroundColor:'white',
               shadowOffset: { width: 3, height: 3 },
               shadowColor: '#000000',
               shadowRadius: 5,
               shadowOpacity: 0.3,
               borderTopRightRadius: 25,
               borderTopLeftRadius: 25,
               display:'flex',
               flexDirection:'row',
               justifyContent:'space-evenly'
               
               }}>
                  <TouchableOpacity style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                     <Image source={require('../../assets/home.png')} height={22} width={22} />
                     <Text style={{ fontSize: 10, fontFamily: 'Avenir-Heavy' }}>Homepage</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                     <Image source={require('../../assets/clipboard.png')} height={22} width={22} />
                     <Text style={{ fontSize: 10, fontFamily: 'Avenir-Heavy' }}>Works</Text>
                  </TouchableOpacity>
                  <TouchableOpacity  style={{

                     marginTop:-20,}}>
                     <Image source={require('../../assets/addIcon.png')} style={{marginTop:-2,borderColor:'#F0F1F3',borderWidth:6,borderRadius:66/2,height:66,width:66}} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                     <Image source={require('../../assets/date.png')} height={22} width={22} />
                     <Text style={{ fontSize: 10, fontFamily: 'Avenir-Heavy' }}>Calendar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                     <Image source={require('../../assets/account.png')} height={22} width={22} />
                     <Text style={{ fontSize: 10, fontFamily: 'Avenir-Heavy' }}>Profile</Text>
                  </TouchableOpacity>
               </Footer>
         </Container>
         
      )
   }
}