import * as React from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
export default class Logic extends React.Component {
	componentDidMount() {
		AsyncStorage.getItem('Intro').then((Intro) => {
			if (Intro == true) {
				this.props.navigation.navigate('Home')
			} else {
				this.props.navigation.navigate('Intro')
			}
		})
	}
	render() {
		return (
			<View></View>
		);
	}
}
