import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Collections from "./pages/Collections";
import Posts from "./pages/Posts";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import "./App.css";
import "./styles.css";
import CollectionDetail from "./pages/CollectionDetail";

const AppContainer = styled.div`
  min-height: 100vh;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/collections/:id" element={<CollectionDetail />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </Router>
    </AppContainer>
  );
};

export default App;
