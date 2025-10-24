import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import TopImageBar, { TOP_IMAGE_BAR_HEIGHT } from "./src/components/common/TopImageBar";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("Home");
  const [selectedInfluencerId, setSelectedInfluencerId] = useState(1);

  // Simple navigation without using a navigation library
  const navigation = {
    navigate: (screen: string, params?: any) => {
      setCurrentScreen(screen);
      if (params?.id) {
        setSelectedInfluencerId(params.id);
      }
    },
    goBack: () => {
      setCurrentScreen("Home");
    },
  };

  // Render the current screen
  const renderScreen = () => {
    switch (currentScreen) {
      case "Home":
        return <HomeScreen navigation={navigation} />;
      case "InfluencerProfile":
        return (
          <ProfileScreen
            navigation={navigation}
            route={{ params: { id: selectedInfluencerId } }}
          />
        );
      default:
        return <HomeScreen navigation={navigation} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <TopImageBar />
      <View style={{ paddingTop: TOP_IMAGE_BAR_HEIGHT }}>{renderScreen()}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabBar: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    backgroundColor: "#ffffff",
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  tabText: {
    fontSize: 12,
    color: "#666666",
  },
  activeTabText: {
    color: "#000000",
    fontWeight: "bold",
  },
});
