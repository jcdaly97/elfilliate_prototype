import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageSourcePropType } from "react-native";
import Placeholder from "../common/Placeholder";

interface ProductCardProps {
  id: number;
  name: string;
  image: ImageSourcePropType;
  price: number;
  rating?: number;
  reviews?: number;
  shades?: number;
  onPress?: (id: number) => void;
  onFavorite?: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  image,
  price,
  rating = 0,
  reviews = 0,
  shades = 0,
  onPress,
  onFavorite,
}) => {
  const handlePress = () => {
    if (onPress) {
      onPress(id);
    }
  };

  const handleFavorite = () => {
    if (onFavorite) {
      onFavorite(id);
    }
  };

  // Generate star rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Text key={i} style={styles.star}>
            ★
          </Text>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Text key={i} style={styles.star}>
            ✭
          </Text>
        );
      } else {
        stars.push(
          <Text key={i} style={styles.emptyStar}>
            ☆
          </Text>
        );
      }
    }

    return stars;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.imageContainer}>
        <Placeholder width={150} height={150} type="product" />
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={handleFavorite}
        >
          <Text style={styles.favoriteIcon}>♡</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ratingContainer}>
        {renderStars()}
        <Text style={styles.reviewCount}>({reviews})</Text>
      </View>

      <Text style={styles.name} numberOfLines={2}>
        {name}
      </Text>

      <Text style={styles.price}>${price.toFixed(2)}</Text>

      {shades > 0 && (
        <View style={styles.shadesContainer}>
          <View style={styles.shadeDots}>
            {Array.from({ length: Math.min(shades, 6) }).map((_, index) => (
              <View
                key={index}
                style={[
                  styles.shadeCircle,
                  { backgroundColor: getShadeColor(index) },
                ]}
              />
            ))}
          </View>
          <Text style={styles.shadesText}>+{shades}</Text>
        </View>
      )}

      <TouchableOpacity style={styles.selectButton}>
        <Text style={styles.selectButtonText}>SELECT SHADE</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

// Helper function to generate different shade colors
const getShadeColor = (index: number): string => {
  const colors = [
    "#FFD1DC", // Pink
    "#FFDAB9", // Peach
    "#FFE4B5", // Moccasin
    "#FAEBD7", // AntiqueWhite
    "#F5DEB3", // Wheat
    "#D2B48C", // Tan
  ];
  return colors[index % colors.length];
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginBottom: 16,
    padding: 12,
    width: "48%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  imageContainer: {
    position: "relative",
    marginBottom: 8,
    alignItems: "center",
  },
  favoriteButton: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  favoriteIcon: {
    fontSize: 18,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  star: {
    color: "#FFD700",
    fontSize: 14,
  },
  emptyStar: {
    color: "#D3D3D3",
    fontSize: 14,
  },
  reviewCount: {
    fontSize: 12,
    color: "#666666",
    marginLeft: 4,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
    height: 40,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
  },
  shadesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  shadeDots: {
    flexDirection: "row",
  },
  shadeCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 2,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  shadesText: {
    fontSize: 12,
    color: "#666666",
    marginLeft: 4,
  },
  selectButton: {
    backgroundColor: "#000000",
    borderRadius: 4,
    paddingVertical: 8,
    alignItems: "center",
  },
  selectButtonText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default ProductCard;
