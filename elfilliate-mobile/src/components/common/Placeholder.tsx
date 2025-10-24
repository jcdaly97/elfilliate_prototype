import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface PlaceholderProps {
  width: number;
  height: number;
  type: "avatar" | "product" | "post" | "promo";
  text?: string;
  color?: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({
  width,
  height,
  type,
  text,
  color,
}) => {
  const getBackgroundColor = () => {
    switch (type) {
      case "avatar":
        return "#9c27b0";
      case "product":
        return "#2196f3";
      case "post":
        return "#4caf50";
      case "promo":
        return "#ff9800";
      default:
        return color || "#e0e0e0";
    }
  };

  const getLabel = () => {
    if (text) return text;
    switch (type) {
      case "avatar":
        return "Avatar";
      case "product":
        return "Product";
      case "post":
        return "Post";
      case "promo":
        return "Promo";
      default:
        return "Image";
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          width,
          height,
          backgroundColor: getBackgroundColor(),
          borderRadius: type === "avatar" ? width / 2 : 4,
        },
      ]}
    >
      <Text style={styles.text}>{getLabel()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Placeholder;
