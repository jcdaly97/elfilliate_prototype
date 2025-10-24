import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageSourcePropType } from "react-native";
import Placeholder from "../common/Placeholder";
import { IconDots, IconEye, IconHeart, IconMessageCircle, IconShare } from "@tabler/icons-react-native";

interface PostCardProps {
  id: number;
  user: {
    id: number;
    name: string;
    avatar: ImageSourcePropType;
    date: string;
  };
  content: string;
  hashtags: string[];
  media: {
    type: "image" | "video";
    url: ImageSourcePropType;
  };
  engagement: {
    views: number;
    likes: number;
    shares: number;
    comments: number;
  };
  onPress?: (id: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({
  id,
  user,
  content,
  hashtags,
  media,
  engagement,
  onPress,
}) => {
  const handlePress = () => {
    if (onPress) onPress(id);
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000) return (num / 1000).toFixed(1) + "k";
    return num.toString();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Placeholder width={40} height={40} type="avatar" />
          <View style={styles.userTextContainer}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.date}>{user.date}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <IconDots size={18} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.contentText} numberOfLines={3}>
          {content}
        </Text>
        <View style={styles.hashtagsContainer}>
          {hashtags.map((tag, index) => (
            <Text key={index} style={styles.hashtag}>
              {tag}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.mediaContainer}>
        <Placeholder width={300} height={200} type="post" />
      </View>

      <View style={styles.engagementContainer}>
        <View style={styles.engagementItem}>
          <IconEye size={16} color="#666" style={{ marginRight: 4 }} />
          <Text style={styles.engagementText}>{formatNumber(engagement.views)}</Text>
        </View>
        <View style={styles.engagementItem}>
          <IconHeart size={16} color="#666" style={{ marginRight: 4 }} />
          <Text style={styles.engagementText}>{formatNumber(engagement.likes)}</Text>
        </View>
        <View style={styles.engagementItem}>
          <IconMessageCircle size={16} color="#666" style={{ marginRight: 4 }} />
          <Text style={styles.engagementText}>{formatNumber(engagement.comments)}</Text>
        </View>
        <View style={styles.engagementItem}>
          <IconShare size={16} color="#666" style={{ marginRight: 4 }} />
          <Text style={styles.engagementText}>{formatNumber(engagement.shares)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  userInfo: { flexDirection: "row", alignItems: "center" },
  userTextContainer: { marginLeft: 8 },
  userName: { fontWeight: "bold", fontSize: 14 },
  date: { fontSize: 12, color: "#666666" },
  moreButton: { padding: 4 },
  contentContainer: { marginBottom: 12 },
  contentText: { fontSize: 14, lineHeight: 20, marginBottom: 8 },
  hashtagsContainer: { flexDirection: "row", flexWrap: "wrap" },
  hashtag: { fontSize: 12, color: "#2196f3", marginRight: 8 },
  mediaContainer: { marginBottom: 12, borderRadius: 8, overflow: "hidden" },
  engagementContainer: { flexDirection: "row", justifyContent: "space-between" },
  engagementItem: { flexDirection: "row", alignItems: "center" },
  engagementText: { fontSize: 12, color: "#666666" },
});

export default PostCard;

