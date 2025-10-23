import React from "react";
import styled from "styled-components";

const PromoBar = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px 20px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #eee;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const PromoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const PromoIcon = styled.div<{ bgColor: string }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden;
  font-size: 0.8rem;
  background-color: ${(props) => props.bgColor};
`;

const BeautySquadText = styled.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 1;
  text-align: center;
`;

const PromoText = styled.div`
  h3 {
    font-size: 0.9rem;
    margin-bottom: 2px;
  }

  p {
    font-size: 0.8rem;
    color: #666;
  }
`;

const PromotionalBanners: React.FC = () => {
  return (
    <PromoBar>
      <PromoItem>
        <PromoIcon bgColor="#9d4edd">
          <BeautySquadText>beauty squad</BeautySquadText>
        </PromoIcon>
        <PromoText>
          <h3>Get Free Shipping</h3>
          <p>on your 1st order when you join Beauty Squad</p>
        </PromoText>
      </PromoItem>

      <PromoItem>
        <PromoIcon bgColor="#ff9800">
          <BeautySquadText>beauty squad</BeautySquadText>
        </PromoIcon>
        <PromoText>
          <h3>You have $6 to spend</h3>
          <p>Redeem your points at checkout</p>
        </PromoText>
      </PromoItem>

      <PromoItem>
        <PromoIcon bgColor="#4caf50">
          <BeautySquadText>beauty squad</BeautySquadText>
        </PromoIcon>
        <PromoText>
          <h3>Scan your receipts for rewards</h3>
          <p>when you join Beauty Squad. Join Now</p>
        </PromoText>
      </PromoItem>
    </PromoBar>
  );
};

export default PromotionalBanners;
