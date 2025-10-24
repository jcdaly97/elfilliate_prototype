import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Placeholder from "../common/Placeholder";
import { promotions } from "../../data/promotions";

interface PromotionalBannerProps {
  onPress?: () => void;
}

const PromotionalBanner: React.FC<PromotionalBannerProps> = ({ onPress }) => {
  // Display the first two promotions
  const displayedPromotions = promotions.slice(0, 2);

  return (
    <View style={styles.container}>
      {displayedPromotions.map((promo) => (
        <TouchableOpacity
          key={promo.id}
          style={[
            styles.bannerItem,
            { backgroundColor: promo.backgroundColor },
          ]}
          onPress={onPress}
        >
          <View style={styles.contentContainer}>
            <Placeholder width={40} height={40} type="promo" />
            <View style={styles.textContainer}>
              <Text style={[styles.title, { color: promo.textColor }]}>
                {promo.title}
              </Text>
              <Text style={[styles.description, { color: promo.textColor }]}>
                {promo.description}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  bannerItem: {
    flex: 1,
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 4,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 8,
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 12,
  },
  description: {
    fontSize: 10,
  },
});

export default PromotionalBanner;
