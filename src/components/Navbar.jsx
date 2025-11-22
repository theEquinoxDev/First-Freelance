import React, { useState } from "react";
import "./Navbar.css";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
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

        <button className="mobile-menu-btn" onClick={() => setOpen(true)}>
          <Menu size={22} />
        </button>
      </nav>

      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          <X size={22} />
        </button>

        <a href="#">PEOPLE</a>
        <a href="#">PLACES</a>
        <a href="#">THINGS</a>
        <a href="#">CLIENTS</a>
        <a href="#">ABOUT</a>
        <a href="#">CONNECT</a>
        <a href="#">SHOP</a>
      </div>
    </>
  );
}
