import React from "react";
import styled from "styled-components";
import CollectionCard from "../components/collections/CollectionCard";
import collectionsData from "../data/collections.json";

const CollectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CollectionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const Collections: React.FC = () => {
  return (
    <div className="collections-content">
      <div className="collections-header">
        <h2>Collections</h2>
        <p>
          Curated product collections to help you promote e.l.f. products to your
          audience. Share these collections on your social media or website to
          earn commission on sales.
        </p>
      </div>

      <CollectionsGrid className="collections-grid">
        {collectionsData.collections.map((collection) => (
          <CollectionCard
            key={collection.id}
            id={collection.id}
            title={collection.title}
            description={collection.description}
            products={collection.products}
            engagement={collection.engagement}
          />
        ))}
      </CollectionsGrid>
    </div>
  );
};

export default Collections;
