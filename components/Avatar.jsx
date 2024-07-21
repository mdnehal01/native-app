import React from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { twMerge } from 'tailwind-merge';

const Avatar = (props) => {
  return (
    <View className="flex gap-y-2 items-center">
        <View className={twMerge(`w-16 h-16 rounded-full bg-white flex justify-center items-center`,props.classname)}>
            {/* <MaterialIcons name="add" size={24} color="black" /> */}
            <Image source={props.source} className="h-full w-full rounded-full"/>
        </View>
        {/* <ImageBackground source={props.source} resizeMode="cover" className="h-14 w-14 rounded-full"> */}
        {/* </ImageBackground> */}
        <Text className="font-medium">{props.title}</Text>
    </View>
  )
}

export default Avatar;