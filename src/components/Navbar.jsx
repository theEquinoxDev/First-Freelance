import React, { useState } from "react";
import "./Navbar.css";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom'

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
          <Link to="#">PEOPLE</Link>
          <Link to="#">PLACES</Link>
          <Link to="#">THINGS</Link>
          <Link to="#">CLIENTS</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="#">CONNECT</Link>
          <Link to="#">SHOP</Link>
        </div>

        <button className="mobile-menu-btn" onClick={() => setOpen(true)}>
          <Menu size={22} />
        </button>
      </nav>

      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          <X size={22} />
        </button>

        <Link to="#" onClick={() => setOpen(false)}>PEOPLE</Link>
        <Link to="#" onClick={() => setOpen(false)}>PLACES</Link>
        <Link to="#" onClick={() => setOpen(false)}>THINGS</Link>
        <Link to="#" onClick={() => setOpen(false)}>CLIENTS</Link>
        <Link to="/about" onClick={() => setOpen(false)}>ABOUT</Link>
        <Link to="#" onClick={() => setOpen(false)}>CONNECT</Link>
        <Link to="#" onClick={() => setOpen(false)}>SHOP</Link>
      </div>
    </>
  );
}
