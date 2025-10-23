import React from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProfileCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const ProfileAvatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #9d4edd;
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const ProfileName = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
`;

const ProfileBio = styled.p`
  margin: 0;
  color: #666;
`;

const ProfileStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background-color: #f8f8f8;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #9d4edd;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const Profile: React.FC = () => {
  return (
    <ProfileContainer>
      <h2>Profile</h2>

      <ProfileCard>
        <ProfileHeader>
          <ProfileAvatar>J</ProfileAvatar>
          <ProfileInfo>
            <ProfileName>Jane Doe</ProfileName>
            <ProfileBio>
              Beauty enthusiast and makeup artist. I love sharing my favorite
              e.l.f. products and makeup tips with my followers.
            </ProfileBio>
          </ProfileInfo>
        </ProfileHeader>

        <ProfileStats>
          <StatCard>
            <StatValue>$3,247</StatValue>
            <StatLabel>Total Earnings</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>11,340</StatValue>
            <StatLabel>Page Views</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>8,134</StatValue>
            <StatLabel>Products Sold</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>7.2%</StatValue>
            <StatLabel>Conversion Rate</StatLabel>
          </StatCard>
        </ProfileStats>

        <p>
          This is a placeholder for the Profile page. In a complete
          implementation, this page would include more detailed profile
          information, account settings, payment details, and other
          user-specific information.
        </p>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default Profile;
