import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class category extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Container>
        <LinearGradient colors={['#3C80F7', '#1058D1']}  start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} >
              <Header style={{ backgroundColor: "transparent"  }} hasTabs>
                 <Left>
                    <Text style={{color:'white', fontSize: 20}}>Homepage</Text>
                 </Left>
              
                 <Body />
                 <Right>
                    <Text style={{color:'white', fontSize: 20}}>right</Text>
                 </Right>

              </Header>
                 <ScrollView horizontal={true} style={{display:'flex'}}> 
                    <TouchableOpacity style={{display:'flex',flexDirection:'row',padding:10,marginLeft:20,borderBottomColor:'#ffffff',borderBottomWidth:5}}>
                       <Text style={{ display:'flex', fontSize: 14, fontFamily: 'Avenir-Heavy',color:'#ffffff'  }}>All </Text>
                       <Text style={{color:'#216DEE',backgroundColor:'#ffffff',borderRadius:10,paddingLeft:15,paddingRight:15,}}>25</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:10}}>
                       <Text style={{ fontSize: 14, fontFamily: 'Avenir-Heavy',marginLeft:20,color:'#D8D8D8' }}>Sports</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:10}}>
                       <Text style={{ fontSize: 14, fontFamily: 'Avenir-Heavy',marginLeft:20,color:'#D8D8D8' }}>Exclusive</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:10}}>
                       <Text style={{ fontSize: 14, fontFamily: 'Avenir-Heavy',marginLeft:20,color:'#D8D8D8' }}>Family</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:10}}>
                       <Text style={{ fontSize: 14, fontFamily: 'Avenir-Heavy',marginLeft:20,color:'#D8D8D8' }}>Trucks</Text>
                    </TouchableOpacity>
                 </ScrollView>
           </LinearGradient>
           <Content>
              <CardBig />
              <ScrollView horizontal={true} style={{paddingTop:10,paddingBottom:20,marginBottom: 30,}}> 
                 <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                 <CardSmall image={require('../../assets/HomeMustang.png')} title="Supersports" />
                 <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                 <CardSmall image={require('../../assets/HomeMustang.png')} title="Supersports" />
                 <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                 <CardSmall image={require('../../assets/HomeMustang.png')} title="Supersports" />
                 <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
              </ScrollView>
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
     
    );
  }
}
