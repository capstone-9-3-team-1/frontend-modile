import { TouchableOpacity, View } from "react-native";
import ProductCard from "./ProductCard";


export default function Products({products, navigation}) {

  return (
     <View className="w-screen flex-1 flex-row flex-wrap pl-1">
        {products?.map((item) => {
            return (
                <TouchableOpacity
                className="w-48"
                onPress={() =>
                  navigation.navigate("ProductShow", {
                    id: item.id,
                    image: item.imageUrl,
                    name: item.name,
                    spec: item.spec,
                    category: item.category,
                    business: item.business,
                    description: item.description,
                    price: item.price,
                    tokenValue: item.tokenValue,
                  })
                }
              >
                <ProductCard item={item} />
              </TouchableOpacity>

            )
        })}
              
            </View>
  );
}