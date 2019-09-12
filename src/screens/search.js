import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, Animated, Easing, StyleSheet, Dimensions } from 'react-native';
import { Body, Header, ListItem as Title, Left, Container, Content, Right } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import Slider from "react-native-slider";

import ToggleButton from '../components/ToggleButton'
import ToggleButtonColor from '../components/ToggleButtonColor'
import SearchCard from '../components/searchCard'
import Footer from '../components/footer'

const { height, width } = Dimensions.get("window");

export default class search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 1,
			text: '',
			opendModal: '',
			bounceValue: new Animated.Value(5000),
			searchModal: new Animated.Value(-5000),
			blackBackOpcity: new Animated.Value(-5000)
		};
		this.animatedValue = new Animated.Value(0);
	}
	updateChoice(type) {
		let newState = { ...this.state };
		newState[type] = !newState[type];
		this.setState(newState);
	}
	_openModal() {
		Animated.sequence([
			Animated.timing(
				this.state.blackBackOpcity,
				{
					toValue: 0,
					velocity: 3,
					tension: 2,
					friction: 8,
					duration: 300
				}
			).start(),
			Animated.timing(
				this.state.bounceValue,
				{
					toValue: 0,
					velocity: 3,
					tension: 2,
					friction: 8,
				}
			).start(),

		])

		this.setState({ opendModal: 'filter' })
	}
	_openModalSearch() {
		Animated.sequence([
			Animated.timing(
				this.state.blackBackOpcity,
				{
					toValue: 0,
					velocity: 3,
					tension: 2,
					friction: 8,
					duration: 300
				}
			).start(),
			Animated.timing(
				this.state.searchModal,
				{
					toValue: 0,
					velocity: 3,
					tension: 2,
					friction: 8,
					duration: 500
				}
			).start(),

		])
		this.setState({ opendModal: 'search' })
	}
	_closeModalSearch() {
		Animated.sequence([
			Animated.timing(
				this.state.blackBackOpcity,
				{
					toValue: -height,
					velocity: 3,
					tension: 2,
					friction: 8,
					duration: 300
				}
			).start(),
			Animated.timing(
				this.state.searchModal
				,
				{
					toValue: -height,
					velocity: 3,
					tension: 2,
					friction: 8,
				}
			).start(),
		])
		this.setState({ opendModal: '' })
	}
	_hideModal() {
		Animated.sequence([
			Animated.timing(
				this.state.blackBackOpcity,
				{
					toValue: -height,
					velocity: 3,
					tension: 2,
					friction: 8,
					duration: 300
				}
			).start(),
			Animated.timing(
				this.state.bounceValue,
				{
					toValue: height,
					velocity: 3,
					tension: 2,
					friction: 8,
				}
			).start(),
		])

		this.setState({ opendModal: '' })
	}
	_handelClose() {
		console.log(this.state.opendModal)
		if (this.state.opendModal == 'search') {
			this._closeModalSearch();
		}
		// }else if(this.state.opendModal == 'filter'){
		// 	this._hideModal()
		// }
	}
	componentDidMount() {
		this.animatedValue.setValue(0)
		// apply scroll to top animation to search card
		Animated.timing(
			this.animatedValue,
			{
				toValue: 1,
				duration: 1000,
				easing: Easing.inOut(Easing.quad)
			}
		).start()
	}
	render() {
		const marginTop = this.animatedValue.interpolate({
			inputRange: [0, 1],
			outputRange: [260, 0]
		})
		return (
			<Container>
				<LinearGradient colors={['#3C80F7', '#1058D1']} start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} >
					<Header style={{ backgroundColor: "transparent" }} hasTabs>
						<Left>
							<TouchableOpacity style={{ marginRight: 10 }} onPress={() => {
								this.props.navigation.goBack();
							}}>
								<Image source={require('../../assets/Back.png')} height={20} width={20} />
							</TouchableOpacity>
						</Left>
						<Body style={{flex: 4 ,display:'flex',alignItems: 'flex-start' }}>
							<Text style={{ fontFamily: 'Avenir-Heavy', color: '#ffffff', fontSize: 20, textAlign: 'left',writingDirection:'ltr',}}>Search Result</Text>
						</Body>
						<Right>
							<TouchableOpacity style={{ marginRight: 10 }} onPress={() => { this._openModalSearch() }}>
								<Image source={require('../../assets/search.png')} height={20} width={20} />
							</TouchableOpacity>
							<TouchableOpacity onPress={() => { this._openModal() }}>
								<Image source={require('../../assets/Filter.png')} height={20} width={20} />
							</TouchableOpacity>
						</Right>
					</Header>
				</LinearGradient>
				<Animated.View
					style={[styles.searchView,
					{ transform: [{ translateY: this.state.searchModal }] }]}
				>
					<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: '#E4E4E4', borderBottomWidth: 1, paddingTop: 40, paddingBottom: 20, paddingHorizontal: 10, }}>
						<TouchableOpacity
							style={{ marginRight: 10, }}
							onPress={() => {
								this._closeModalSearch()
							}}>
							<Image source={require('../../assets/BackBlack.png')} height={20} width={20} />
						</TouchableOpacity>
						<TextInput
							style={{ height: 40, padding: 5, flex: 1, marginRight: 20, fontSize: 14, color: '#000000', width: 200 }}
							placeholderTextColor='#E4E4E4'
							onChangeText={(text) => this.setState({ text })}
							placeholder="Search here ..."
							value={this.state.text}
							returnKeyType="search"
						/>
						<TouchableOpacity style={{ marginRight: 10, padding: 10, borderRadius: 5, backgroundColor: '#E4E4E4' }} onPress={() => {
							this.setState({ text: '' })
						}}>
							<Image source={require('../../assets/closeSearch.png')} height={20} width={20} />
						</TouchableOpacity>
					</View>
					<View style={{ paddingTop: 40, }}>
						<Text style={{ fontFamily: 'Avenir-Heavy', color: '#333333', fontSize: 14, marginLeft: 20, marginBottom: 20 }}>Recent Searches</Text>
						<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', borderBottomColor: '#E4E4E4', borderBottomWidth: 1, paddingVertical: 10, }}>
							<Image source={require('../../assets/SearchBlack.png')} style={{ height: 20, width: 20, marginLeft: 20 }} />
							<Text style={{ marginLeft: 20, fontFamily: 'Avenir-Roman', color: '#333333', fontSize: 14, }}>Sports Car</Text>
						</View>
						<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', borderBottomColor: '#E4E4E4', borderBottomWidth: 1, paddingVertical: 10, }}>
							<Image source={require('../../assets/SearchBlack.png')} style={{ height: 20, width: 20, marginLeft: 20 }} />
							<Text style={{ marginLeft: 20, fontFamily: 'Avenir-Roman', color: '#333333', fontSize: 14, }}>Sports Car</Text>
						</View>

					</View>
					<View style={{ paddingTop: 40, }}>
						<Text style={{ fontFamily: 'Avenir-Heavy', color: '#333333', fontSize: 14, marginLeft: 20, marginBottom: 20 }}>Top Results</Text>
						<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', borderBottomColor: '#E4E4E4', borderBottomWidth: 1, paddingVertical: 10, }}>
							<Image source={require('../../assets/rating.png')} style={{ height: 20, width: 20, marginLeft: 20 }} />
							<Text style={{ marginLeft: 20, fontFamily: 'Avenir-Roman', color: '#333333', fontSize: 14, }}>Chevrolet Camaro 2.3</Text>
						</View>
						<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingVertical: 10, }}>
							<Image source={require('../../assets/rating.png')} style={{ height: 20, width: 20, marginLeft: 20 }} />
							<Text style={{ marginLeft: 20, fontFamily: 'Avenir-Roman', color: '#333333', fontSize: 14, }}>Ferrari 458 Italia</Text>
						</View>

					</View>
				</Animated.View>
				<TouchableOpacity style={[{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 12, },
				{ transform: [{ translateY: this.state.blackBackOpcity }] }]} onPress={() => {
					this._handelClose()
				}}></TouchableOpacity>
				<Content>
					<ScrollView contentContainerStyle={{ display: 'flex', justifyContent: 'center' }}>
						<Animated.View style={{ marginTop }}>
							<TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
								<SearchCard style={{ marginTop }} image={require('../../assets/SearchAudi.png')} title="Sports Car" />
							</TouchableOpacity>
						</Animated.View>
						<Animated.View style={{ marginTop }}>
							<TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
							<SearchCard style={{ marginTop }} image={require('../../assets/SearchCamaro.png')} title="Sports Car" />
							</TouchableOpacity>
						</Animated.View>
						<Animated.View style={{ marginTop }}>
							<TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
								<SearchCard style={{ marginTop }} image={require('../../assets/SearchAudi2.png')} title="Sports Car" />
							</TouchableOpacity>
						</Animated.View>
						<Animated.View style={{ marginTop }}>
							<TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
								<SearchCard style={{ marginTop }} image={require('../../assets/SearchAudi.png')} title="Sports Car" />
							</TouchableOpacity>
						</Animated.View>
						<Animated.View style={{ marginTop }}>
							<TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
							<SearchCard style={{ marginTop }} image={require('../../assets/SearchCamaro.png')} title="Sports Car" />
							</TouchableOpacity>
						</Animated.View>
						<Animated.View style={{ marginTop }}>
							<TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
								<SearchCard style={{ marginTop }} image={require('../../assets/SearchAudi2.png')} title="Sports Car" />
							</TouchableOpacity>
						</Animated.View>
						<Animated.View style={{ marginTop }}>
							<TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
								<SearchCard style={{ marginTop }} image={require('../../assets/SearchAudi.png')} title="Sports Car" />
							</TouchableOpacity>
						</Animated.View>
						<Animated.View style={{ marginTop }}>
							<TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
							<SearchCard style={{ marginTop }} image={require('../../assets/SearchCamaro.png')} title="Sports Car" />
							</TouchableOpacity>
						</Animated.View>
						<Animated.View style={{ marginTop }}>
							<TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
								<SearchCard style={{ marginTop }} image={require('../../assets/SearchAudi2.png')} title="Sports Car" />
							</TouchableOpacity>
						</Animated.View>
						
					</ScrollView>

				</Content>

				<Animated.View
					style={[styles.subView,
					{ transform: [{ translateX: this.state.bounceValue }] }]}
				>
					<Text style={{ fontFamily: 'Avenir-Heavy', color: '#333333', fontSize: 20, marginLeft: 10, marginBottom: 30 }}>Filters</Text>
					<View style={{ marginBottom: 30 }}>
						<Text style={{ fontFamily: 'Avenir-Heavy', color: '#333333', fontSize: 14, marginLeft: 10, marginBottom: 20 }}>Category</Text>
						<ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
							<ToggleButton label='Sports' onPress={() => { this.updateChoice('sports') }} selected={this.state.sports} />
							<ToggleButton label='Exclusive' onPress={() => { this.updateChoice('exclusive') }} selected={this.state.exclusive} />
							<ToggleButton label='SUV' onPress={() => { this.updateChoice('suv') }} selected={this.state.suv} />
							<ToggleButton label='Sports' onPress={() => { this.updateChoice('sports') }} selected={this.state.sports} />
							<ToggleButton label='Exclusive' onPress={() => { this.updateChoice('exclusive') }} selected={this.state.exclusive} />
							<ToggleButton label='SUV' onPress={() => { this.updateChoice('suv') }} selected={this.state.suv} />
						</ScrollView>
					</View>
					<View style={{ marginBottom: 30 }}>
						<Text style={{ fontFamily: 'Avenir-Heavy', color: '#333333', fontSize: 14, marginLeft: 10, marginBottom: 20 }}>Brand</Text>
						<ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
							<ToggleButton label='BMW' onPress={() => { this.updateChoice('bmw') }} selected={this.state.bmw} />
							<ToggleButton label='Chevy' onPress={() => { this.updateChoice('chevy') }} selected={this.state.chevy} />
							<ToggleButton label='Lexus' onPress={() => { this.updateChoice('lexus') }} selected={this.state.lexus} />
							<ToggleButton label='BMW' onPress={() => { this.updateChoice('bmw') }} selected={this.state.bmw} />
							<ToggleButton label='Chevy' onPress={() => { this.updateChoice('chevy') }} selected={this.state.chevy} />
							<ToggleButton label='Lexus' onPress={() => { this.updateChoice('lexus') }} selected={this.state.lexus} />
						</ScrollView>
					</View>
					<View style={{ marginBottom: 30 }}>
						<Text style={{ fontFamily: 'Avenir-Heavy', color: '#333333', fontSize: 14, marginLeft: 10, marginBottom: 20 }}>Motor Capacity</Text>
						<ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
							<ToggleButton label='<2000 CC' onPress={() => { this.updateChoice('cc2000') }} selected={this.state.cc2000} />
							<ToggleButton label='2500 CC' onPress={() => { this.updateChoice('cc2500') }} selected={this.state.cc2500} />
							<ToggleButton label='3000 CC' onPress={() => { this.updateChoice('cc3500') }} selected={this.state.cc3500} />
							<ToggleButton label='<2000 CC' onPress={() => { this.updateChoice('cc2000') }} selected={this.state.cc2000} />
							<ToggleButton label='2500 CC' onPress={() => { this.updateChoice('cc2500') }} selected={this.state.cc2500} />
							<ToggleButton label='3000 CC' onPress={() => { this.updateChoice('cc3500') }} selected={this.state.cc3500} />
						</ScrollView>
					</View>
					<View style={{ marginBottom: 30 }}>
						<Text style={{ fontFamily: 'Avenir-Heavy', color: '#333333', fontSize: 14, marginLeft: 10, marginBottom: 20 }}>Color</Text>
						<ScrollView showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={{ alignItems: 'center' }}>
							<ToggleButtonColor color={'#FF4E3A'} onPress={() => { this.updateChoice('color1') }} selected={this.state.color1} />
							<ToggleButtonColor color={'#FFE138'} onPress={() => { this.updateChoice('color2') }} selected={this.state.color2} />
							<ToggleButtonColor color={'#3E4EB8'} onPress={() => { this.updateChoice('color3') }} selected={this.state.color3} />
							<ToggleButtonColor color={'#9D1BB2'} onPress={() => { this.updateChoice('color4') }} selected={this.state.color4} />
							<ToggleButtonColor color={'#1194F6'} onPress={() => { this.updateChoice('color5') }} selected={this.state.color5} />
							<ToggleButtonColor color={'#47B04B'} onPress={() => { this.updateChoice('color6') }} selected={this.state.color7} />
							<ToggleButtonColor color={'#484848'} onPress={() => { this.updateChoice('color7') }} selected={this.state.color7} />
						</ScrollView>
					</View>
					<View style={{ marginBottom: 30, }}>
						<Text style={{ fontFamily: 'Avenir-Heavy', color: '#333333', fontSize: 14, marginLeft: 10, marginBottom: 20 }}>Price Range</Text>
						<View style={{ paddingHorizontal: 10 }}>
							<Slider
								style={{ marginBottom: 20, }}
								minimumValue={1}
								maximumValue={100}
								step={1}
								customMinimumTrack={(
									<LinearGradient
										start={{ x: .74, y: .26 }}
										end={{ x: 0, y: .77 }}
										colors={['#343333', '#BFBFBF']}
										style={{
											width: '100%',
											height: '100%',
										}}
									/>
								)}
								customMaximumTrack={(
									<LinearGradient
										start={{ x: .74, y: .26 }}
										end={{ x: 0, y: .77 }}
										colors={['#343333', '#BFBFBF']}
										style={{
											width: '100%',
											height: '100%',
										}}
									/>
								)}
								customThumb={(
									<LinearGradient
										start={{ x: .74, y: .26 }}
										end={{ x: 0, y: .77 }}
										colors={['#333333', '#333333']}
										style={{
											width: 36,
											height: 36,
											margin: 2,
											borderRadius: 36 / 2,
											borderWidth: 4,
											borderColor: '#fff',
											elevation: 1
										}}
									/>
								)}
								value={this.state.value}
								onValueChange={value => this.setState({ value })}
							/>
							<Text>
								Value: {this.state.value}
							</Text>
						</View>

					</View>
					<View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', paddingHorizontal: 10 }}>
						<TouchableOpacity onPress={() => { this._hideModal() }}
							style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 7, width: '50%' }}
						>

							<Text style={{ fontFamily: 'Avenir-Heavy', color: 'white', fontSize: 14, color: '#000000' }}>Reset</Text>

						</TouchableOpacity>
						<LinearGradient
							colors={['#3C80F7', '#1058D1']}
							start={[0.0, 0.5]}
							end={[1.0, 0.5]}
							locations={[0.0, 1.0]}
							style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingVertical: 15, paddingHorizontal: 20, borderRadius: 7, width: '50%' }}
						>
							<TouchableOpacity onPress={() => { this._hideModal() }}>

								<Text style={{ fontFamily: 'Avenir-Heavy', color: 'white', fontSize: 14, color: '#ffffff' }}>Apply</Text>

							</TouchableOpacity>
						</LinearGradient>

					</View>
				</Animated.View>
				<Footer />
			</Container>
		);
	}
}

var styles = StyleSheet.create({
	subView: {
		position: "absolute",
		bottom: 0,
		left: 100,
		right: 0,
		top: 0,
		paddingTop: 50,
		paddingLeft: 20,
		backgroundColor: "#ffffff",
		height: height,
		zIndex: 15,
	},
	searchView: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		paddingTop: 50,
		paddingBottom: 20,
		backgroundColor: "#ffffff",
		zIndex: 15,
		shadowOffset: { width: 3, height: 3 }, shadowColor: '#000000', shadowRadius: 5, shadowOpacity: 0.3,
	},
});