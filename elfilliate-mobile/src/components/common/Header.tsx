import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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
      {showBackButton && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <IconChevronLeft size={24} color="#000" />
        </TouchableOpacity>
      )}
      {!!title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  backButton: {
    padding: 8,
    position: "absolute",
    left: 8,
    top: 14,
  },
  title: { alignSelf: "center", fontSize: 18, fontWeight: "600", color: "#000" },
});

export default Header;
