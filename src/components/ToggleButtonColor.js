import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class ToggleButton extends Component {

	render() {
		return (
			<TouchableHighlight onPress={this.props.onPress} style={[styles.selected,this.props.selected ?  [,{borderColor:this.props.color}] : {}]}>
				<View style={[styles.overlay,{backgroundColor:this.props.color}]}>
				</View>
			</TouchableHighlight>
		);
	}
}

var styles = StyleSheet.create({
	
	overlay: {
		backgroundColor: '#E4E4E4',
		alignItems: 'center',
		
		height:26,
		width:26,
		borderRadius: 26/2,
		
	},
	selected:{
		display:'flex',
		alignItems:'center',
		justifyContent:'center',
		height:35,
		width:35,
		borderWidth:1.5,
		borderRadius: 35/2,
		padding:2,
		marginHorizontal:5,
		borderColor:'transparent'
	},
	selectedText:{
		color:'white' 
	}
});