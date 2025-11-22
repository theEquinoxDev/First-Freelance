
import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left" />

      <div className="nav-center">
        <img src="/pm-caps.webp" alt="Logo" className="nav-logo" />
      </div>

      <div className="nav-right">
        <a href="#">PEOPLE</a>
        <a href="#">PLACES</a>
        <a href="#">THINGS</a>
        <a href="#">CLIENTS</a>
        <a href="#">ABOUT</a>
        <a href="#">CONNECT</a>
        <a href="#">SHOP</a>
      </div>
    </nav>
  );
}
