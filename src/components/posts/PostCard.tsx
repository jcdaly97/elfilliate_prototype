import React from "react";
import styled from "styled-components";
// Import Tabler icons as any to avoid TSX JSX.Element type issues in this setup
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Icons: any = require("react-icons/tb");
const { TbEye, TbHeart, TbShare, TbMessageCircle, TbPlayerPlay, TbUser } = Icons;
import { getSocialImageUrlById, getProductImageUrlById } from "../../utils/assets";

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 2rem;
  border: 1px solid #eee;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #9d4edd;
  font-size: 1.2rem;
`;

const AvatarImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const UserInfo = styled.div`
  flex: 1;
`;

const UserName = styled.div`
  font-weight: 600;
`;

const PostDate = styled.div`
  font-size: 0.8rem;
  color: #999;
`;

const MediaContainer = styled.div`
  position: relative;
  background-color: #f5f5f5;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 0.9rem;
  overflow: hidden;
`;

const MediaImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const PlayButton = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9d4edd;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const ContentContainer = styled.div`
  padding: 1rem;
`;

const PostContent = styled.p`
  margin: 0 0 1rem 0;
  line-height: 1.5;
`;

const Hashtags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Hashtag = styled.span`
  color: #9d4edd;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding: 0.5rem 0;
  margin-bottom: 1rem;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 4px;
  }
`;

const ProductItem = styled.img`
  min-width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
`;

const MoreProducts = styled.div`
  min-width: 60px;
  height: 60px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 500;
  color: #666;
  cursor: pointer;
`;

const EngagementStats = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-top: 1px solid #eee;
  font-size: 0.9rem;
  color: #666;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

interface PostCardProps {
  user: {
    id: number;
    name: string;
    avatar: string;
    date: string;
  };
  content: string;
  hashtags: string[];
  media: {
    type: "image" | "video";
    url: string;
    thumbnail?: string;
  };
  products: Array<{
    id: number;
    name: string;
    image: string;
  }>;
  engagement: {
    views: number;
    likes: number;
    shares: number;
    comments: number;
  };
}

const PostCard: React.FC<PostCardProps> = ({
  user,
  content,
  hashtags,
  media,
  products,
  engagement,
}) => {
  return (
    <Card>
      <CardHeader>
        {user.avatar ? (
          <AvatarImage
            src={
              process.env.PUBLIC_URL +
              `/elfilliate-assets/images/${user.avatar}`
            }
            alt={user.name}
          />
        ) : (
          <Avatar aria-label="User avatar placeholder">
            <TbUser />
          </Avatar>
        )}
        <UserInfo>
          <UserName>{user.name}</UserName>
          <PostDate>{user.date}</PostDate>
        </UserInfo>
      </CardHeader>

      <MediaContainer>
        {media.type === "image" ? (
          <MediaImage src={getSocialImageUrlById(user.id)} alt="Post media" />
        ) : (
          <>
            <MediaImage
              src={getSocialImageUrlById(user.id + 1000)}
              alt="Video thumbnail"
            />
            <PlayButton>
              <TbPlayerPlay />
            </PlayButton>
          </>
        )}
      </MediaContainer>

      <ContentContainer>
        <PostContent>{content}</PostContent>

        <Hashtags>
          {hashtags.map((tag, index) => (
            <Hashtag key={index}>{tag}</Hashtag>
          ))}
        </Hashtags>

        <ProductsContainer>
          {products.slice(0, 4).map((product) => (
            <ProductItem
              key={product.id}
              src={getProductImageUrlById(product.id)}
              alt={product.name}
            />
          ))}
          {products.length > 4 && (
            <MoreProducts>+{products.length - 4}</MoreProducts>
          )}
        </ProductsContainer>
      </ContentContainer>

      <EngagementStats>
        <Stat>
          <TbEye /> {engagement.views.toLocaleString()}
        </Stat>
        <Stat>
          <TbHeart /> {engagement.likes.toLocaleString()}
        </Stat>
        <Stat>
          <TbMessageCircle /> {engagement.comments.toLocaleString()}
        </Stat>
        <Stat>
          <TbShare /> {engagement.shares.toLocaleString()}
        </Stat>
      </EngagementStats>
    </Card>
  );
};

export default PostCard;
