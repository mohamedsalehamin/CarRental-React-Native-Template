import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Auth from './Auth';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  Auth:Auth,
  AuthLoading: AuthLoadingScreen,
},{
  initialRouteName: 'AuthLoading'
});