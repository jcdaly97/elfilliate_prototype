import React from "react";

const Header: React.FC = () => {
  const src =
    process.env.PUBLIC_URL + "/elfilliate-assets/images/fake-top-nav.png";

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "#fff",
        boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
      }}
    >
      <img
        src={src}
        alt="Top navigation"
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </header>
  );
};

export default Header;
