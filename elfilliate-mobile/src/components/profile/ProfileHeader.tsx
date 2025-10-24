import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react-native";
import Placeholder from "../common/Placeholder";

interface ProfileHeaderProps {
  name: string;
  avatar?: any;
  bio: string;
  isFavorite?: boolean;
  onFavoritePress?: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  avatar,
  bio,
  isFavorite = false,
  onFavoritePress,
}) => {
  const socialImages = [
    require("../../../assets/images/social-1.jpg"),
    require("../../../assets/images/social-2.jpg"),
    require("../../../assets/images/social-3.jpg"),
    require("../../../assets/images/social-4.jpg"),
    require("../../../assets/images/social-5.jpg"),
  ];

  const pickHeaderImage = () => {
    const key = name || "header";
    let sum = 0;
    for (let i = 0; i < key.length; i++) sum += key.charCodeAt(i);
    const idx = sum % socialImages.length;
    return socialImages[idx];
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundImage}>
        <Image source={pickHeaderImage()} style={styles.headerImage} resizeMode="cover" />
      </View>

      <View style={styles.profileContent}>
        <View style={styles.avatarContainer}>
          <Placeholder width={80} height={80} type="avatar" />
        </View>

        <Text style={styles.name}>{name.toUpperCase()}</Text>
        <Text style={styles.bio}>{bio}</Text>

        <TouchableOpacity
          style={[
            styles.favoriteButton,
            isFavorite ? styles.favoriteButtonActive : {},
          ]}
          onPress={onFavoritePress}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {isFavorite ? (
              <IconHeartFilled size={16} color="#ffffff" />
            ) : (
              <IconHeart size={16} color="#000000" />
            )}
            <Text
              style={[
                styles.favoriteButtonText,
                isFavorite ? { color: "#ffffff" } : {},
              ]}
            >
              {" "}FAVORITE
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  backgroundImage: {
    width: "100%",
    height: 100,
  },
  headerImage: {
    width: "100%",
    height: "100%",
  },
  profileContent: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingBottom: 16,
    alignItems: "center",
  },
  avatarContainer: {
    marginTop: -40,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: "#ffffff",
    overflow: "hidden",
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: "#666666",
    textAlign: "center",
    marginBottom: 16,
  },
  favoriteButton: {
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  favoriteButtonActive: {
    backgroundColor: "#000000",
  },
  favoriteButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
  },
});

export default ProfileHeader;
