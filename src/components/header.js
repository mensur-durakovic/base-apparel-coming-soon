import React from "react";

const Header = React.memo((props) => {
  return (
    <header>
      <div className="logo"></div>
    </header>
  );
});

export default Header;
