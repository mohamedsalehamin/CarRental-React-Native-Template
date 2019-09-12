import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class ToggleButton extends Component {

	render() {
		return (
			<TouchableHighlight onPress={this.props.onPress}>
				<View style={[styles.overlay, this.props.selected ?  styles.selected : {}]}>
					<Text style={[styles.choicetext,this.props.selected ?  styles.selectedText : {}]}>{this.props.label}</Text>
				</View>
			</TouchableHighlight>
		);
	}
}

var styles = StyleSheet.create({
	choicetext: {
		alignItems: 'center',
		alignSelf: 'center',
		paddingHorizontal:10,
		paddingVertical:10,
		color: '#333333',
		fontWeight: '600',
		fontSize: 14,
		textAlign: 'center',

	},
	overlay: {
		backgroundColor: '#E4E4E4',
		alignItems: 'center',
		fontSize:20,
		marginHorizontal:5
	},
	selected:{
		backgroundColor: '#333333',
		color:'white' 
	},
	selectedText:{
		color:'white' 
	}
});