import { View, Text, Image } from "react-native";

function addBadge(item) {
    let badge = "";
  item.category === "bio" ? badge="https://storage.googleapis.com/atara_images/Biodegradability.png" : null;
  item.category === "energy" ? badge="https://storage.googleapis.com/atara_images/EnergyEfficiency.png" : null;
  item.category === "nontox" ? badge="https://storage.googleapis.com/atara_images/Non-toxic.png" : null;
  item.category === "watercon" ? badge="https://storage.googleapis.com/atara_images/WaterConservation.png" : null;
  item.category === "pack" ? badge="https://storage.googleapis.com/atara_images/MinimalPackaging.png" : null;
  item.category === "sus" ? badge="https://storage.googleapis.com/atara_images/SustainableMaterials.png" : null;
  item.category === "carbon" ? badge="https://storage.googleapis.com/atara_images/SustainableMaterials.png" : null;
  item.category === "carbon" ? badge="https://storage.googleapis.com/atara_images/CarbonFootprint.png" : null;
  item.category === "emision" ? badge="https://storage.googleapis.com/atara_images/ReducedEmissions.png" : null;



    return (
      <Image
        source={{uri: badge}}
        className="h-12 w-12"
      />
    );
  
}

export default function ProductCard({ item }) {
  console.log(item.imageUrl);
  return (
    <View className="w-48 h-fit m-2 border border-gray-200 rounded-2xl">
      <View className="relative">
        <Image
          source={{
            uri: item.imageUrl,
          }}
          className="rounded-t-lg h-48"
          resizeMode="contain"
        />
        <View className="absolute bottom-1 right-1">{addBadge(item)}</View>
      </View>
      <View className="p-3 bg-green-100 rounded-b-2xl ">
        <Text className="font-semibold text-base">{item.name}</Text>
        <Text className="">{item.business}</Text>
        <View className="flex-row gap-1">
          <Image
            className="h-4 w-4 drop-shadow-xl"
            source={require("../../../../assets/AtaraCoin.png")}
          />
          <Text className="">{item.tokenValue}</Text>
        </View>
      </View>
    </View>
  );
}