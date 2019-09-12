import React from "react";
import {
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Dimensions,
	Animated
} from "react-native";
import Carousel from "react-native-snap-carousel";
import MapView from "react-native-maps";

import LinearGradient from "react-native-linear-gradient";
const Images = [
	{
		uri: require('../../assets/SliderAudiCar.png')
	},
	{
		uri: require('../../assets/Slidermercedes.png')
	},
	{
		uri: require('../../assets/SliderAudiCar.png')
	},
	{
		uri: require('../../assets/Slidermercedes.png')
	},
	{
		uri: require('../../assets/SliderAudiCar.png')
	},
	{
		uri: require('../../assets/Slidermercedes.png')
	},
];

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height / 3;
const CARD_WIDTH = CARD_HEIGHT - 50;

export default class DemoScreen extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			scrolledX: 0,
			activeSlide: 0,
			markers: [
				{
					coordinate: {
						latitude: 35.741006,
						longitude: 139.7262613
					},
					title: "Sport cars",
					description: "7 cars nearby",
					image: Images[0]
				},
				{
					coordinate: {
						latitude: 34.66992,
						longitude: 135.4929573
					},
					title: "Exclusive",
					description: "5 cars nearby",
					image: Images[1]
				},
				{
					coordinate: {
						latitude: 43.064712,
						longitude: 141.3447943
					},
					title: "Sport cars",
					description: "7 cars nearby",
					image: Images[2]
				},
				{
					coordinate: {
						latitude: 33.594018,
						longitude: 130.3972473
					},
					title: "Exclusive",
					description: "5 cars nearby",
					image: Images[3]
				},
				{
					coordinate: {
						latitude: 35.171078,
						longitude: 136.8814353
					},
					title: "Sport cars",
					description: "7 cars nearby",
					image: Images[4]
				},
				{
					coordinate: {
						latitude: 38.2593883,
						longitude: 140.8741972
					},
					title: "Exclusive",
					description: "5 cars nearby",
					image: Images[5]
				}
			],
			region: {
				latitude: 35.741006,
				longitude: 139.7262613,
				latitudeDelta: 1.1,
				longitudeDelta: 1.1
			}
		};
		this._renderItem = this._renderItem.bind(this);
	}
	
	componentWillMount() {
		this.index = 0;
		this.animation = new Animated.Value(0);
	}

	componentDidMount() {
		this.animation.addListener(({ value }) => {
			let index = Math.floor(value / CARD_WIDTH + 0.4);
			if (index >= this.state.markers.length) {
				index = this.state.markers.length - 1;
			}
			if (index <= 0) {
				index = 0;
			}
			clearTimeout(this.regionTimeout);
			this.regionTimeout = setTimeout(() => {
				if (this.index !== index) {
					this.index = index;
					const { coordinate } = this.state.markers[index];
					//
					this.map.animateToRegion(
						{
							...coordinate,
							latitudeDelta: this.state.region.latitudeDelta,
							longitudeDelta: this.state.region.longitudeDelta
						},
						350
					);
				}
			}, 10);
		});
	}
	_renderItem({ item, index }) {
		const { activeSlide } = this.state;

		if (index == activeSlide) {
			return (

				<LinearGradient style={styles.activeSlide} key={index} colors={['#3C80F7', '#1058D1']} start={{x:0.0,y:0.5}} end={[1.0, 0.5]} locations={[0.0, 1.0]} >
					<View style={styles.textContent}>
						<Text numberOfLines={1} style={styles.cardTitle}>
							{item.title}
						</Text>
						<Text numberOfLines={1} style={styles.cardDescription}>
							{item.description}
						</Text>
					</View>
					<Image
						source={item.image.uri}
						style={styles.cardImage}
						resizeMode="contain"
					/>
					<TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }} style={{borderWidth:1,borderColor:'white',width:70,padding:5,borderRadius:3,alignItems:'center'}}>
						<Text style={{ fontFamily: 'Avenir-Heavy',color: 'white', fontSize: 10, }}>View</Text>
					</TouchableOpacity>
				</LinearGradient>

			);
		} else {
			return (
				<View style={styles.card} key={index}>
					<View style={styles.textContent}>
						<Text numberOfLines={1} style={[styles.cardTitle,{color:'#000000'}]}>
							{item.title}
						</Text>
						<Text numberOfLines={1} style={styles.cardDescription}>
							{item.description}
						</Text>
					</View>
					<Image
						source={item.image.uri}
						style={styles.cardImage}
						resizeMode="contain"
					/>
					<TouchableOpacity style={{borderWidth:1,borderColor:'white',width:70,padding:5,borderRadius:3,alignItems:'center'}}>
						<Text style={{ fontFamily: 'Avenir-Heavy',color: '#000000', fontSize: 10, }}>View</Text>
					</TouchableOpacity>
				</View>
			);
		}
	}
	render() {
		const interpolations = this.state.markers.map((marker, index) => {
			const inputRange = [
				(index - 1) * CARD_WIDTH,
				index * CARD_WIDTH,
				(index + 1) * CARD_WIDTH
			];
			const scale = this.animation.interpolate({
				inputRange,
				outputRange: [1, 3, 1],
				extrapolate: "clamp"
			});
			const opacity = this.animation.interpolate({
				inputRange,
				outputRange: [0.5, 1, 0.5],
				extrapolate: "clamp"
			});
			return {
				scale,
				opacity
			};
		});
		return (
			<View style={styles.container}>
				
				<MapView
					ref={map => (this.map = map)}
					initialRegion={this.state.region}
					style={styles.container}
				>
					{this.state.markers.map((marker, index) => {
						const scaleStyle = {
							transform: [
								{
									scale: interpolations[index].scale
								}
							]
						};
						const opacityStyle = {
							opacity: interpolations[index].opacity
						};
						return (
							<MapView.Marker key={index} coordinate={marker.coordinate}>
								<Animated.View style={[styles.markerWrap, opacityStyle]}>
									<Animated.View style={[styles.circle, scaleStyle]} />
									<View style={styles.marker} />
								</Animated.View>
							</MapView.Marker>
						);
					})}
				</MapView>
				<View 
					style={{
						position:'absolute',
						top:50,width:'100%',
						display:'flex',
						flexDirection:'row',
						justifyContent:'space-between',
						paddingHorizontal:20,
					}}
				>
					<TouchableOpacity 
						style={{display:'flex',}}
						onPress={()=>{
							this.props.navigation.goBack();
						}}
					>
						<Image source={require('../../assets/BackBlack.png')} height={32} width={32} />
					</TouchableOpacity>
					<TouchableOpacity
						style={{display:'flex',}}
					>
						<Image source={require('../../assets/SearchBlack.png')} height={30} width={30} />
					</TouchableOpacity>
				</View>
				<Animated.View
					style={styles.scrollView}
					contentContainerStyle={styles.endPadding}
				>
					<Carousel
						style={styles.carouselStyle}
						ref={c => {
							this._carousel = c;
						}}
						layout={'default'}
						data={this.state.markers}
						renderItem={this._renderItem}
						sliderWidth={width}
						itemWidth={width - 150}
						onScroll={event => {
							// console.log('scroll event',event);
							// console.log(event.nativeEvent.contentOffset.x);
							// this.setState({scrolledX:event.nativeEvent.contentOffset.x});
							this.animation.setValue(event.nativeEvent.contentOffset.x);
						}}
						useScrollView={true}
						onSnapToItem={(index) => this.setState({ activeSlide: index })}
					/>
				</Animated.View>
			</View>
		);
	}
}

//UI
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	scrollView: {
		position: "absolute",
		bottom: 20,
		left: 0,
		right: 0,
		paddingVertical: 10
	},
	carouselStyle: {
		padding: 15
	},
	endPadding: {
		paddingRight: width - CARD_WIDTH
	},
	card: {
		borderRadius: 15,
		padding: 20,
		elevation: 2,
		backgroundColor: "rgba(244,255,244, 1)",
		marginHorizontal: 10,
		margin: 35,
		shadowColor: "rgba(0,153,102, 0.9)",
		shadowRadius: 5,
		shadowOpacity: 0.3,
		shadowOffset: {
			x: 0,
			y: 0
		},
		height: CARD_HEIGHT,
		width: CARD_WIDTH
	},
	activeSlide: {
		borderRadius: 15,
		padding: 20,
		elevation: 2,
		marginHorizontal: 10,
		margin: 35,
		shadowColor: "rgba(0,153,102, 0.9)",
		shadowRadius: 5,
		shadowOpacity: 0.3,
		shadowOffset: {
			x: 0,
			y: 0
		},
		height: CARD_HEIGHT,
		width: CARD_WIDTH
	},
	cardImage: {
		flex: 2,
		width: '100%',
		height: '100%',
		alignSelf: "center"
	},
	textContent: {
		flex: 1
	},
	cardTitle: {
		fontFamily: 'Avenir-Heavy',
		fontSize: 20,
		marginTop: 5,
		color:'#ffffff'
	},
	cardDescription: {
		fontSize: 12,
		color: "#333333",
		fontFamily: 'Avenir-Medium',
	},
	markerWrap: {
		alignItems: "center",
		justifyContent: "center"
	},
	marker: {
		width: 8,
		height: 8,
		borderRadius: 8 / 2,
		backgroundColor: "#FE7B37"
	},
	circle: {
		width: 64,
		height: 64,
		borderRadius: 64 / 2,
		backgroundColor: "rgba(254,123,55, 0.2)",
		position: "absolute",
		borderWidth: 0.5,
		borderColor: "rgba(254,123,55, 0.5)"
	}
});
