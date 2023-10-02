import {
  View,
  Image,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useUser } from "@clerk/clerk-expo";

import Rewards from "./screens/Rewards";
import Ionicons from "react-native-vector-icons/Ionicons";

const tokensPriceRange = ["", "50", "70", "100", "300", "500+"];
const products = [1, 2, 3, 4, 5, 6];

const userName = "John Doe";
const userPoints = 100;
// const pointsRedeemed = 50; // Assign a value to pointsRedeemed

export default function RewardsScreen({ navigation }) {

  function insertBreaksAtSpaces(inputString) {
    return inputString.replace(/[ \-]/g, "\n");
  }
  const { user } = useUser();
  return (
    <SafeAreaView className="flex items-start bg-slate-100 ">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* User Circle, Name, and Points */}
        <View className="flex flex-row items-center m-5">
          <View className="rounded-full bg-white drop-shadow-lg">
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image
                source={{
                  uri: user?.imageUrl,
                }}
                className="w-8 h-8 rounded-full"
              />
            </TouchableOpacity>
          </View>
          <View className="ml-2">
            <Text className="text-2xl font-semibold">{user?.firstName}</Text>
            <Text className="text-lg font-semibold">{userPoints} Points</Text>
          </View>

          {/* Redeemed Rewards History Button */}
          <View className="flex-1"></View>
          <TouchableOpacity
            className="bg-green-500 p-2 rounded-lg"
            onPress={() => {
              // Route for the Rewards History
            }}
          >
            <Text className="text-white text-sm">Your Rewards</Text>
          </TouchableOpacity>
        </View>

        {/* Tokens Ranges */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {tokensPriceRange.map((num, i) => (
            <>
              <TouchableOpacity
                key={i}
                
              >
                {i === 0 ? (
                  <View className="w-11 h-11 mx-3 bg-white rounded-full  shadow-xl items-center justify-center my-auto">
                     <Ionicons name="search" size={20} />
                  </View>
                 
                ) : (
                  <View className="w-11 h-11 mx-3 bg-white rounded-full  shadow-xl items-center justify-center my-auto">
                    <Text className="">{num}</Text>
                  </View>
                )}
             
              <Text className="text-center">{i === 0 ? null : insertBreaksAtSpaces("up to 100 tokens") }</Text>
              </TouchableOpacity>
            </>
          ))}
        </ScrollView>
        {/* Featured Rewards */}
        <View className="my-3">
        <Text className="text-2xl font-semibold pl-3">Featured Rewards</Text>
        <ScrollView horizontal>
          <View className="flex-row flex-wrap">
            {products.map((num) => (
              <View
                key={num}
                className="flex box-content h-48 w-48 m-2 rounded-3xl bg-white"
              ></View>
            ))}
          </View>
        </ScrollView>

        </View>

        
        
        <Rewards />
      </ScrollView>
    </SafeAreaView>
  );
}
