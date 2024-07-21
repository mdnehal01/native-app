import React from 'react'
import { View, Text, Image } from 'react-native'
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';

const StartApp = () => {
    const navigation = useNavigation();
  return (
    <View className="flex-1 bg-slate-50 justify-around items-center p-12">
        <Image source={require('../assets/StartScreen.png')} />
        <View className="w-full flex flex-col">
            <Button classname="mb-1" name="Login" onPress={() => navigation.navigate('Login')}/>
            <Button classname="my-1 bg-slate-300" textColor="text-neutral-800" name="Signup" onPress={()=>navigation.navigate('Signup')}/>
            <Text onPress={()=>navigation.navigate('Home')} className="text-base underline">
                Continue without login.
            </Text>
        </View>
    </View>
  )
}

export default StartApp;