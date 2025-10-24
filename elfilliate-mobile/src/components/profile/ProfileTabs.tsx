import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface ProfileTabsProps {
  tabs: string[];
  initialTab?: number;
  onTabChange?: (index: number) => void;
}

const ProfileTabs: React.FC<ProfileTabsProps> = ({
  tabs,
  initialTab = 0,
  onTabChange,
}) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabPress = (index: number) => {
    setActiveTab(index);
    if (onTabChange) {
      onTabChange(index);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tab, activeTab === index ? styles.activeTab : {}]}
            onPress={() => handleTabPress(index)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === index ? styles.activeTabText : {},
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.indicator}>
        <View
          style={[
            styles.indicatorBar,
            {
              left: `${(100 / tabs.length) * activeTab}%`,
              width: `${100 / tabs.length}%`,
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    marginBottom: 16,
  },
  tabsContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#000000",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666666",
  },
  activeTabText: {
    color: "#000000",
    fontWeight: "bold",
  },
  indicator: {
    position: "relative",
    height: 2,
  },
  indicatorBar: {
    position: "absolute",
    bottom: 0,
    height: 2,
    backgroundColor: "#000000",
  },
});

export default ProfileTabs;
