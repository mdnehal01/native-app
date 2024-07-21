import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartApp from '../screens/StartApp';
import Login from '../screens/Login';
import Signup from "../screens/Signup"
import Home from '../screens/Home';
import NavigationBottomTab from './NavigationBottomTab';

const Stack = createNativeStackNavigator();

const NavigatorStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="StartScreen" component={StartApp} options={
        {
            headerShown:false
        }
      } />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={NavigationBottomTab} options={
        {
            headerShown:false
        }
      } />
    </Stack.Navigator>
  );
}

export default NavigatorStack;