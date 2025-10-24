import React from "react";
import { View, Image, StyleSheet } from "react-native";

export const TOP_IMAGE_BAR_HEIGHT = 64;

const TopImageBar: React.FC = () => {
  return (
    <View pointerEvents="none" style={styles.container}>
      <Image
        source={require("../../../assets/images/mock_top_nav.png")}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: TOP_IMAGE_BAR_HEIGHT,
    zIndex: 1000,
    elevation: 4,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default TopImageBar;

