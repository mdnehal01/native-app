import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import StartApp from './screens/StartApp';
import NavigatorStack from './components/NavigatorStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  
  return (
    
    <View className="flex-1">
      
      
      <NavigationContainer>
        <NavigatorStack/>
      </NavigationContainer>
     
      <StatusBar style='auto'/>
    </View>
  );
}
