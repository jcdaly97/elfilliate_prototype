import React from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import collectionsData from "../data/collections.json";
import { getProductImageUrlById } from "../utils/assets";

const Container = styled.div`
  max-width: 1200px;
  margin: 30px auto;
  padding: 0 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin: 0;
`;

const BackLink = styled(Link)`
  color: #9d4edd;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 12px 14px;
`;

const Name = styled.div`
  font-weight: 600;
  margin-bottom: 6px;
`;

const Price = styled.div`
  color: #9d4edd;
  font-weight: 600;
  margin-bottom: 8px;
`;

const Blurb = styled.div`
  color: #777;
  font-size: 0.9rem;
`;

type Product = { id: number; name: string; price?: number };

const buildDummyProducts = (count = 8): Product[] =>
  Array.from({ length: count }).map((_, i) => ({
    id: 1000 + i,
    name: `Sample Product ${i + 1}`,
    price: 9.99 + i,
  }));

const CollectionDetail: React.FC = () => {
  const params = useParams();
  const id = Number(params.id);

  const collection = collectionsData.collections.find((c) => c.id === id);

  const title = collection?.title ?? `Collection #${id}`;
  const desc =
    collection?.description ??
    "Curated picks to showcase e.l.f. products you can promote.";

  const products: Product[] =
    collection?.products?.map((p) => ({ id: p.id, name: p.name, price: p.price })) ||
    buildDummyProducts();

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <BackLink to="/collections">← Back to collections</BackLink>
      </Header>

      <Description>{desc}</Description>

      <Grid>
        {products.map((p) => (
          <Card key={p.id}>
            <Image src={getProductImageUrlById(p.id)} alt={p.name} />
            <CardBody>
              <Name>{p.name}</Name>
              <Price>{p.price ? `$${p.price.toFixed(2)}` : "$9.99"}</Price>
              <Blurb>
                Effortless, cruelty‑free beauty. Great payoff and everyday wear.
              </Blurb>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default CollectionDetail;

