import React from "react";
import "./header.scss";

type HeaderProps = {
  home: string;
  contact: string;
  hireMe: string;
};

const Header = ({ home, contact, hireMe }: HeaderProps) => {
  return (
    <nav>
      <ul>
        <li>{home}</li>
        <li>{contact}</li>
        <li>{hireMe}</li>
      </ul>
    </nav>
  );
};

export default Header;
