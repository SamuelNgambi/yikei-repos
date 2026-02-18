"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link href="/" style={{ textDecoration: 'none' }}>
              <div className="logo-container">
                <Image
                  src="/yikei-logo-v1.jpeg"
                  alt="yikei.ai logo"
                  width={32}
                  height={32}
                  className="footer-logo"
                  unoptimized={true}
                />
                <div className="brand-text">yikei<span>.ai</span></div>
              </div>
            </Link>
            <p>Empowering Your Business with Data & AI-Driven Solutions.</p>
          </div>

          <div className="footer-links-group">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <div className="footer-links">
                <Link href="/services">Services</Link>
                <Link href="/about">About us</Link>
                <Link href="/careers">Careers</Link>
                <Link href="/contact">Get in touch</Link>
              </div>
            </div>

            <div className="footer-section">
              <h4>Contact</h4>
              <ul className="footer-contact-list">
                <li>Email: malo_malam@yikei.ai</li>

                <li>HQ: Paris, France</li>
              </ul>
            </div>
          </div>

          <div className="footer-social">
            <a
              href="https://www.linkedin.com/company/the-data-and-ai-solutions-builder/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} yikei.ai. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--navy);
          color: white;
          padding: 4rem 0 2rem;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .logo-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.75rem;
          color: white;
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .footer-logo {
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

        .footer-brand p {
          color: rgba(255, 255, 255, 0.7);
          max-width: 300px;
        }

        .footer-links-group {
          display: flex;
          gap: 4rem;
        }

        .footer-section h4 {
          color: var(--gold);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          font-weight: 500;
          transition: var(--transition);
        }

        .footer-links a:hover {
          color: var(--gold);
        }

        .footer-contact-list {
          list-style: none;
          color: rgba(255, 255, 255, 0.7);
        }

        .footer-contact-list li {
          margin-bottom: 0.5rem;
        }

        .footer-social a {
          color: white;
          transition: var(--transition);
        }

        .footer-social a:hover {
          color: var(--gold);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
          text-align: center;
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .footer-links-group {
            flex-direction: column;
            gap: 2rem;
          }

          .footer-links {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
