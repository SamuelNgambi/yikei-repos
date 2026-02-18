"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div className="logo-container">
            <Image
              src="/yikei-logo-v1.jpeg"
              alt="yikei.ai logo"
              width={40}
              height={40}
              className="navbar-logo"
              unoptimized={true}
            />
            <div className="brand-text">yikei<span>.ai</span></div>
          </div>
        </Link>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About us</Link>
          <Link href="/careers" onClick={() => setIsOpen(false)}>Careers</Link>
          <Link href="/contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>Get in touch</Link>
        </div>

        <button className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <style jsx>{`
        .navbar {
          height: 80px;
          display: flex;
          align-items: center;
          position: sticky;
          top: 0;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          z-index: 1000;
          border-bottom: 1px solid rgba(20, 39, 73, 0.05);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .logo-link {
          text-decoration: none;
        }

        .logo-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1rem;
          font-size: 24px;
          font-weight: 800;
          color: var(--navy);
          letter-spacing: -0.5px;
        }

        .navbar-logo {
          border-radius: 4px;
          flex-shrink: 0;
        }

        .brand-text {
          display: flex;
          align-items: center;
          line-height: 1;
        }

        .brand-text span {
          color: var(--gold);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .nav-links a {
          font-weight: 500;
          color: var(--navy);
        }

        .nav-links a:hover {
          color: var(--gold);
        }

        .nav-links .btn {
          padding: 0.6rem 1.5rem;
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
        }

        .mobile-menu span {
          width: 25px;
          height: 2px;
          background: var(--navy);
          transition: var(--transition);
        }

        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 80px;
            left: 0;
            width: 100%;
            height: calc(100vh - 80px);
            background: white;
            flex-direction: column;
            padding: 2rem;
            transform: translateX(100%);
            transition: transform 0.3s ease;
          }

          .nav-links.open {
            transform: translateX(0);
          }

          .mobile-menu {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
