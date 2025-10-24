import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { IconChevronLeft } from "@tabler/icons-react-native";

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title = "e.l.f.",
  showBackButton = false,
  onBackPress,
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/mock_top_nav.png")}
        style={styles.topImage}
        resizeMode="cover"
      />
      {showBackButton && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <IconChevronLeft size={24} color="#000" />
        </TouchableOpacity>
      )}
      {/* Title kept for a11y but visually hidden over image */}
      <Text accessibilityElementsHidden style={styles.visuallyHidden}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 64,
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    overflow: "hidden",
  },
  topImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
  backButton: {
    padding: 8,
    zIndex: 2,
    position: "absolute",
    left: 8,
    top: 16,
  },
  visuallyHidden: { position: "absolute", width: 1, height: 1, opacity: 0 },
});

export default Header;
