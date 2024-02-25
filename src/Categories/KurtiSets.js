import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase"; // Import your Firebase configuration
import ProductCard from "../components/ProductItem";
const KurtiSets = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      console.log("Fetching Jeans products...");
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsData = [];
      querySnapshot.forEach((doc) => {
        const product = doc.data();
        if (product.category === "KurtiSetsCategory") {
          productsData.push(product);
        }
      });
      console.log("Jeans products:", productsData);
      setProducts(productsData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Jeans products:", error);
      setLoading(false);
    }
  };

  const handleProductPress = (productId) => {
    navigation.navigate("ProductDetails", { productId });
  };

  if (loading) {
    return <ActivityIndicator size="large" color="black" />;
  }

  if (products.length === 0) {
    return (
      <Text style={{ textAlign: "center", marginTop: 50 }}>
        No products available.
      </Text>
    );
  }

  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginVertical: 30,
          textAlign: "center",
        }}
      >
        Kurti Sets
      </Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            title={item.name} // Corrected property name
            images={item.images} // Corrected property name
            description={item.description}
            price={item.price}
            onPress={() => handleProductPress(item.id)}
          />
        )}
      />
    </View>
  );
};

export default KurtiSets
