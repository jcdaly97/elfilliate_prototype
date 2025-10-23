import React from "react";
import styled from "styled-components";
import PostCard from "../components/posts/PostCard";
import postsData from "../data/posts.json";

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const PostsIntro = styled.div`
  margin-bottom: 2rem;
`;

const Posts: React.FC = () => {
  return (
    <div className="posts-content">
      <h2>Posts</h2>

      <PostsIntro>
        <p>
          Share your e.l.f. product experiences and earn commission when your
          followers make purchases. Create engaging content that showcases your
          favorite products and how you use them.
        </p>
      </PostsIntro>

      {postsData.posts.map((post) => (
        <PostCard
          key={post.id}
          user={post.user}
          content={post.content}
          hashtags={post.hashtags}
          media={{
            ...post.media,
            type: post.media.type as "image" | "video",
          }}
          products={post.products}
          engagement={post.engagement}
        />
      ))}
    </div>
  );
};

export default Posts;
