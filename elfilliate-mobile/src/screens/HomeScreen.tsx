import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Header from "../components/common/Header";
import PromotionalBanner from "../components/home/PromotionalBanner";
import InfluencerCard from "../components/home/InfluencerCard";
import PostCard from "../components/home/PostCard";
import { influencers } from "../data/influencers";
import { posts } from "../data/posts";

interface HomeScreenProps {
  navigation?: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Posts");

  const navigateToInfluencerProfile = (id: number) => {
    // Navigate to the simple state-based profile screen wired in App.tsx
    if (navigation?.navigate) {
      navigation.navigate("InfluencerProfile", { id });
    }
  };

  const navigateToPost = (id: number) => {
    console.log(`Navigate to post: ${id}`);
    // If we had navigation set up:
    // navigation.navigate('PostDetail', { id });
  };

  const navigateToInfluencerFromPost = (userId: number, userName: string) => {
    const match = influencers.find(
      (inf) => inf.name.toLowerCase() === userName.toLowerCase()
    );
    const id = match?.id ?? 1;
    if (navigation?.navigate) {
      navigation.navigate("InfluencerProfile", { id });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="e.l.f.iliate" />

      <ScrollView style={styles.scrollView}>
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>e.l.f.iliate</Text>
          <Text style={styles.heroSubtitle}>
            Explore your favorite influencers favorite products
          </Text>
        </View>

        <PromotionalBanner />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular e.l.f.iliates</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
          >
            {influencers.map((influencer) => (
              <InfluencerCard
                key={influencer.id}
                id={influencer.id}
                name={influencer.name}
                avatar={influencer.avatar}
                onPress={navigateToInfluencerProfile}
              />
            ))}
          </ScrollView>
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "Posts" ? styles.activeTab : {}]}
            onPress={() => setActiveTab("Posts")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "Posts" ? styles.activeTabText : {},
              ]}
            >
              Posts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === "e.l.f.iliates" ? styles.activeTab : {},
            ]}
            onPress={() => setActiveTab("e.l.f.iliates")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "e.l.f.iliates" ? styles.activeTabText : {},
              ]}
            >
              e.l.f.iliates
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === "Posts" ? (
          <View style={styles.postsContainer}>
            {posts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                user={post.user}
                content={post.content}
                hashtags={post.hashtags}
                media={post.media}
                engagement={post.engagement}
                onPress={navigateToPost}
                onUserPress={navigateToInfluencerFromPost}
              />
            ))}
          </View>
        ) : (
          <View style={styles.influencersContainer}>
            {influencers.map((influencer) => (
              <View key={influencer.id} style={styles.influencerItem}>
                <InfluencerCard
                  id={influencer.id}
                  name={influencer.name}
                  avatar={influencer.avatar}
                  onPress={navigateToInfluencerProfile}
                />
                <Text style={styles.followerCount}>
                  {influencer.followers.toLocaleString()} followers
                </Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollView: {
    flex: 1,
  },
  heroSection: {
    backgroundColor: "#66CDAA", // Mint green color
    padding: 24,
    alignItems: "center",
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#ffffff",
  },
  heroSubtitle: {
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
  },
  section: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  horizontalScroll: {
    paddingHorizontal: 16,
  },
  tabContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    backgroundColor: "#ffffff",
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
  postsContainer: {
    padding: 16,
  },
  influencersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 16,
    justifyContent: "space-between",
  },
  influencerItem: {
    width: "30%",
    marginBottom: 16,
    alignItems: "center",
  },
  followerCount: {
    fontSize: 12,
    color: "#666666",
    marginTop: 4,
  },
});

export default HomeScreen;
