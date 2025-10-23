import React from "react";
import styled from "styled-components";
import Header from "./Header";
import PromotionalBanners from "./PromotionalBanners";
import Navigation from "./Navigation";

const Main = styled.main`
  padding: 2rem 1rem;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <PromotionalBanners />
      <div className="elfiliate-header">
        <h1>e.l.f.iliate</h1>
      </div>
      <Navigation />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
