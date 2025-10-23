import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getProductImageUrlById } from "../../utils/assets";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Icons: any = require("react-icons/tb");
const { TbEye, TbHeart, TbShare, TbEdit, TbTrash } = Icons;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid #eee;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const CardHeader = styled.div`
  position: relative;
`;

const ProductsRow = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
`;

const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  object-fit: cover;
`;

const ProductsCount = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
  padding: 0 1rem;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  color: #333;
`;

const CardDescription = styled.p`
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
  color: #666;
`;

const ViewButton = styled(Link)`
  display: block;
  background-color: #9d4edd;
  color: white;
  text-align: center;
  padding: 0.75rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  margin: 1rem 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    background-color: #8c32d3;
  }
`;

const EngagementStats = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #666;
  padding: 0.5rem 0;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    color: #9d4edd;
  }
`;

interface CollectionCardProps {
  id: number;
  title: string;
  description: string;
  products: Array<{
    id: number;
    name: string;
    image: string;
  }>;
  engagement: {
    views: number;
    likes: number;
    shares: number;
  };
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  id,
  title,
  description,
  products,
  engagement,
}) => {
  return (
    <Card>
      <ActionButtons>
        <ActionButton>
          <TbEdit />
        </ActionButton>
        <ActionButton>
          <TbTrash />
        </ActionButton>
      </ActionButtons>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <ProductsRow>
          {products.slice(0, 4).map((product) => (
            <ProductImage
              key={product.id}
              src={getProductImageUrlById(product.id)}
              alt={product.name}
            />
          ))}
        </ProductsRow>
        {products.length > 4 && (
          <ProductsCount>+{products.length - 4} Products</ProductsCount>
        )}
        <ViewButton to={`/collections/${id}`}>VIEW PRODUCTS</ViewButton>
        <EngagementStats>
          <Stat>
            <TbEye /> {engagement.views.toLocaleString()}
          </Stat>
          <Stat>
            <TbHeart /> {engagement.likes.toLocaleString()}
          </Stat>
          <Stat>
            <TbShare /> {engagement.shares.toLocaleString()}
          </Stat>
        </EngagementStats>
      </CardContent>
    </Card>
  );
};

export default CollectionCard;
