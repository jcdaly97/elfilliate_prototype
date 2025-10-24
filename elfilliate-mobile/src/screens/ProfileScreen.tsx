import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Header from "../components/common/Header";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileTabs from "../components/profile/ProfileTabs";
import PostCard from "../components/home/PostCard";
import CollectionCard from "../components/profile/CollectionCard";
import ProductCard from "../components/profile/ProductCard";
import { influencers } from "../data/influencers";
import { posts } from "../data/posts";

interface ProfileScreenProps {
  navigation?: any;
  route?: {
    params: {
      id: number;
    };
  };
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation, route }) => {
  // For demo purposes, we'll use the first influencer
  const influencerId = route?.params?.id || 1;
  const influencer =
    influencers.find((inf) => inf.id === influencerId) || influencers[0];

  const [activeTab, setActiveTab] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const tabs = ["Posts", "Collections", "Products"];

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const navigateToPost = (id: number) => {
    console.log(`Navigate to post: ${id}`);
    // If we had navigation set up:
    // navigation.navigate('PostDetail', { id });
  };

  const navigateToCollection = (id: number) => {
    // Jump to Products tab when tapping "VIEW ALL" on a collection
    setActiveTab(2);
  };

  const navigateToProduct = (id: number) => {
    console.log(`Navigate to product: ${id}`);
    // If we had navigation set up:
    // navigation.navigate('ProductDetail', { id });
  };

  const handleBackPress = () => {
    if (navigation?.goBack) {
      navigation.goBack();
    }
  };

  // Filter posts by this influencer
  const influencerPosts = posts.filter((post) =>
    influencer.posts.includes(post.id)
  );

  return (
    <View style={styles.container}>
      <Header title="" showBackButton onBackPress={handleBackPress} />

      <ScrollView style={styles.scrollView}>
        <ProfileHeader
          name={influencer.name}
          avatar={influencer.avatar}
          bio={influencer.bio}
          isFavorite={isFavorite}
          onFavoritePress={toggleFavorite}
        />

        <ProfileTabs
          tabs={tabs}
          initialTab={activeTab}
          onTabChange={handleTabChange}
        />

        {activeTab === 0 && (
          <View style={styles.contentContainer}>
            {influencerPosts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                user={post.user}
                content={post.content}
                hashtags={post.hashtags}
                media={post.media}
                engagement={post.engagement}
                onPress={navigateToPost}
              />
            ))}
          </View>
        )}

        {activeTab === 1 && (
          <View style={styles.contentContainer}>
            {influencer.collections.map((collection) => (
              <CollectionCard
                key={collection.id}
                id={collection.id}
                title={collection.title}
                products={collection.products}
                onPress={navigateToCollection}
              />
            ))}
          </View>
        )}

        {activeTab === 2 && (
          <View style={styles.productsContainer}>
            {influencer.products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                rating={product.rating}
                reviews={product.reviews}
                shades={product.shades}
                onPress={navigateToProduct}
              />
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
  contentContainer: {
    padding: 16,
  },
  productsContainer: {
    padding: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default ProfileScreen;
