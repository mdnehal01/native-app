import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { twMerge } from 'tailwind-merge';

const Button = (props) => {
  return (
    <TouchableOpacity 
        onPress={props.onPress}
        className={twMerge(
            `bg-neutral-800 w-full rounded-md flex justify-center items-center h-12`
        , props.classname)}
    >
        <Text className={twMerge(`
          text-white text-lg
          `, props.textColor)}>{props.name}</Text>
    </TouchableOpacity>
  )
}

export default Button;