import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { IconChevronLeft, IconSearch, IconUser, IconShoppingCart } from "@tabler/icons-react-native";

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
      <View style={styles.leftContainer}>
        {showBackButton && (
          <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
            <IconChevronLeft size={24} color="#000" />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.centerContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <IconSearch size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <IconUser size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <IconShoppingCart size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  leftContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  centerContainer: {
    flex: 2,
    alignItems: "center",
  },
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 24,
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
  },
  iconText: {
    fontSize: 18,
  },
});

export default Header;
