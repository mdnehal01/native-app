import { StatusBar } from 'expo-status-bar';
import { StatusBar as NativeStatusBar, Text, Image, View, StyleSheet, ScrollView } from 'react-native';
import NavigatorStack from '../components/NavigatorStack';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Avatar from '../components/Avatar';
import Post from '../components/Post';

const statusbarHeight = NativeStatusBar.currentHeight;

export default function Home() {
    return (
        <View className={`flex-1 pt-[${statusbarHeight+1}px] bg-slate-100`}>
            <ScrollView>
            <LinearGradient
                className="w-full h-[190px] rounded-b-[50px] p-5"
                colors={['#D8E8FF', '#E9ECFF', '#EEEBFF']}
            >
                <View className="w-full h-14">
                    {/* TODO: TOP NAVIGATIONS */}
                </View>

                <View className="flex justify-between flex-row">
                    <Avatar source={require("../assets/Status/Add.png")} title="Add Status"/>
                    <Avatar source={require("../assets/Status/profilePic.png")} title="Nehal"/>
                    <Avatar source={require("../assets/Status/Insha.png")} title="Insha"/>
                    <Avatar source={{uri: "https://picsum.photos/id/227/200/200"}} title="Mr ABC"/>
                    <Avatar source={{uri: "https://picsum.photos/id/237/200/200"}} title="Mr Lorem"/>
                </View>

            </LinearGradient>

            <View className="w-full h-auto flex px-4 gap-y-5 mt-3">
                <View>
                    <Post 
                        avatar={require("../assets/Status/profilePic.png")}
                        username="Md Nehal Akhlaque" 
                        usertitle="Lucknow" 
                        postImage={{uri: "https://picsum.photos/510"}}
                        caption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, error quis porro veritatis delectus eius nesciunt nostrum dolores ducimus, saepe ratione, veniam facilis aut ea deleniti deserunt illo! Cum, libero."
                        createdAt="4 minutes ago"
                    />
                </View>
                <View>
                    <Post 
                        avatar={require("../assets/Status/Insha.png")}
                        username="Insha Khan" 
                        usertitle="Integral University" 
                        postImage={{uri: "https://picsum.photos/500"}}
                        caption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, error quis porro veritatis delectus eius nesciunt nostrum dolores ducimus, saepe ratione, veniam facilis aut ea deleniti deserunt illo! Cum, libero."
                        createdAt="12 minutes ago"
                    />
                </View>
            </View>

            <StatusBar style='auto'/>
        </ScrollView>
        </View>
    );
}
