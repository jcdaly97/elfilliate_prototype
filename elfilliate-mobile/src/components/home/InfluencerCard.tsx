import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageSourcePropType } from "react-native";
import Placeholder from "../common/Placeholder";

interface InfluencerCardProps {
  id: number;
  name: string;
  avatar?: ImageSourcePropType;
  onPress?: (id: number) => void;
}

const InfluencerCard: React.FC<InfluencerCardProps> = ({
  id,
  name,
  avatar,
  onPress,
}) => {
  const handlePress = () => {
    if (onPress) {
      onPress(id);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.avatarContainer}>
        {avatar ? (
          <Placeholder width={60} height={60} type="avatar" />
        ) : (
          <Placeholder width={60} height={60} type="avatar" />
        )}
      </View>
      <Text style={styles.name} numberOfLines={1}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 8,
    width: 70,
  },
  avatarContainer: {
    marginBottom: 4,
  },
  name: {
    fontSize: 12,
    textAlign: "center",
  },
});

export default InfluencerCard;
