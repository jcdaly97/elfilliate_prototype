import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageSourcePropType, Image } from "react-native";
import Placeholder from "../common/Placeholder";

interface Product {
  id: number;
  name: string;
  image: ImageSourcePropType;
  price?: number;
}

interface CollectionCardProps {
  id: number;
  title: string;
  products: Product[];
  onPress?: (id: number) => void;
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  id,
  title,
  products,
  onPress,
}) => {
  const handlePress = () => {
    if (onPress) {
      onPress(id);
    }
  };

  // Display up to 4 products, with a +X indicator if there are more
  const displayedProducts = products.slice(0, 4);
  const remainingCount = products.length - displayedProducts.length;

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.productsContainer}>
        {displayedProducts.map((product) => (
          <View key={product.id} style={styles.productItem}>
            <Image source={product.image} style={styles.productImage} />
          </View>
        ))}
        {remainingCount > 0 && (
          <View style={styles.moreContainer}>
            <Text style={styles.moreText}>+{remainingCount}</Text>
          </View>
        )}
      </View>
      <TouchableOpacity style={styles.viewAllButton} onPress={handlePress}>
        <Text style={styles.viewAllText}>VIEW ALL</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },
  productsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 12,
  },
  productItem: {
    marginRight: 8,
    marginBottom: 8,
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 4,
    resizeMode: "cover",
  },
  moreContainer: {
    width: 70,
    height: 70,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  moreText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666666",
  },
  viewAllButton: {
    backgroundColor: "#000000",
    borderRadius: 4,
    paddingVertical: 8,
    alignItems: "center",
  },
  viewAllText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default CollectionCard;
