import React, { useState } from 'react'
import { View, Text, Image } from "react-native"
import { Octicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Avatar from './Avatar';

const Post = (props) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const handleLike = () => {
        setIsLiked(prevliked => !prevliked);
    }

    const handleSave = () => {
        setIsSaved(prevSave => !prevSave);
    }

    return (
        <View className="flex flex-col w-full rounded-xl bg-white p-3 h-auto">

            <View className="w-full h-14 flex-row items-start justify-start">
                <Avatar classname="h-[50px] w-[50px] border-2 border-rose-500" source={props.avatar}/>
                <View className="flex flex-col h-full justify-center">
                    <Text className="ml-3 font-bold">{props.username}</Text>
                    <Text className="ml-3 text-neutral-500">{props.usertitle}</Text>
                </View>
            </View>

            <View className="">
                <Image source={props.postImage} className="object-cover w-full h-96 rounded-lg"/>
            </View>
            
            <View className="h-auto w-full flex flex-col">
                <View className="w-full pt-3 pb-1 px-3 flex flex-row justify-between">
                    <View className="flex flex-row gap-x-4">
                        {isLiked ? <Octicons name="heart-fill" size={30} color="#F8967C" onPress={handleLike}/> : <Octicons name="heart" size={30} color="black" onPress={handleLike}/>}
                        <FontAwesome name="comment-o" size={28} color="#363636" />
                        <FontAwesome name="paper-plane-o" size={25} color="#363636" />
                    </View>

                    {isSaved ? <FontAwesome name="bookmark" size={28} color="#888" onPress={handleSave}/> : <FontAwesome name="bookmark-o" size={28} color="#363636" onPress={handleSave}/>}
                </View>

                <View className="px-3 w-full">
                    <Text className="text-sm font-bold">{props.username}</Text>
                    <Text className="text-[#363636] truncate">{props.caption}</Text>
                </View>
                
                <View className="flex px-3 justify-between mt-2">
                    <Text className="text-neutral-500">{props.createdAt}</Text>
                </View>
            </View>

        </View>
    )
}

export default Post