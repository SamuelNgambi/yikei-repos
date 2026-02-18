"use client";

import Link from "next/link";
import Image from "next/image";
import BrandText from "@/components/BrandText";

export default function AboutPage() {
    const pillars = [
        {
            title: "Education & Empowerment",
            description: "Transfer knowledge to build lasting AI capabilities within client teams"
        },
        {
            title: "Operational Excellence",
            description: "Elevate clients' AI deployment and operational maturity"
        },
        {
            title: "Quality & Alignment",
            description: "Deliver high-quality products that directly serve client goals"
        },
        {
            title: "Practical Innovation",
            description: "Apply practical, fit-for-purpose tools over hype-driven solutions"
        }
    ];

    const approach = [
        "Engage stakeholders & users: We listen first, building a shared understanding and trust from the start.",
        "Clarify business challenges: Dive deep to define and validate pain points, ensuring every project solves the right problem.",
        "Co-design solutions: Collaborate closely with subject matter experts to shape requirements and solution blueprints together.",
        "Rapid prototyping & evaluation: Test, iterate, and refine in partnership with your teams for real business value.",
        "Enterprise-ready delivery: Ensure solutions fit your organization, scale seamlessly, and enable long-term success"
    ];

    return (
        <main>
            <section className="about-hero">
                <div className="container">
                    <h1>Meet Our Expert Team</h1>
                    <div className="premium-card team-intro">
                        <strong>
                            <p>
                                <BrandText /> brings 30+ years of combined experience in financial services industry, data analysis, data modeling, data architecture, data engineering, governance automation, ML & AI and enterprise transformation.
                            </p>
                        </strong>
                    </div>

                    <div className="expertise-content">
                        <h3>Our expertise includes:</h3>
                        <ul>
                            <li>Deep expertise in Financial Services and Insurance domains</li>
                            <li>Certified Databricks, MongoDB, Dremio & Agentic AI experts</li>
                            <li>Deep knowledge of Agentic AI technologies</li>
                            <li>Self-governing data platform architecture</li>
                            <li>Data & AI Governance</li>
                        </ul>
                        <p>
                            Every team member brings unique skills and perspectives to solve complex data and AI challenges. We&apos;re committed to continuous learning and staying at the forefront of Financial services industry challenges and data &amp; AI technology trends.
                        </p>
                    </div>
                </div>
            </section>

            <section className="core-purpose bg-light">
                <div className="container">
                    <span className="section-tag">Our core beliefs</span>
                    <h2>Core Purpose</h2>
                    <div className="premium-card">
                        <p className="bold">Enable clients to independently build and deploy AI systems through knowledge transfer, in addition to delivery.</p>
                        <p>
                            We leverage the power of data and artificial intelligence to help your organization innovate and grow. Our mission is to bridge the gap between complex technology and practical business outcomes, ensuring you achieve measurable results through tailored AI-driven strategies. At <BrandText />, we don&apos;t just build solutions—we build the future of your business.
                        </p>
                        <ul>
                            <li>Expert guidance from seasoned data and AI professionals</li>
                            <li>Innovative technologies</li>
                            <li>Proven methodologies for data transformation</li>
                            <li>Comprehensive support throughout your data journey</li>
                            <li>Knowledge transfer that enables long-term independence</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="pillars">
                <div className="container">
                    <h2>Key Pillars</h2>
                    <p className="subtitle">The foundational principles that guide our approach to every engagement</p>
                    <div className="grid">
                        {pillars.map((pillar, j) => (
                            <div key={j} className="premium-card pillar-card">
                                <div className="pillar-icon">
                                    {pillar.title === 'Education & Empowerment' && (
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 10L4 20L24 30L44 20L24 10Z" stroke="#D1972C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 23V34C10 34 14 38 24 38C34 38 38 34 38 34V23" stroke="#142749" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M24 30V44" stroke="#D1972C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                    {pillar.title === 'Operational Excellence' && (
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="24" cy="24" r="10" stroke="#142749" strokeWidth="2" />
                                            <path d="M24 8V14M24 34V40M8 24H14M34 24H40" stroke="#D1972C" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M12.68 12.68L16.92 16.92M31.08 31.08L35.32 35.32M12.68 35.32L16.92 31.08M31.08 16.92L35.32 12.68" stroke="#D1972C" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    )}
                                    {pillar.title === 'Quality & Alignment' && (
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 4L29.5 16.5L42 18L32 26.5L35 40L24 33L13 40L16 26.5L6 18L18.5 16.5L24 4Z" stroke="#142749" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M24 14L27 21L34 22L28 27L30 34L24 30L18 34L20 27L14 22L21 21L24 14Z" fill="#D1972C" />
                                        </svg>
                                    )}
                                    {pillar.title === 'Practical Innovation' && (
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 4C18.48 4 14 8.48 14 14C14 19.52 18 25 24 25C30 25 34 19.52 34 14C34 8.48 29.52 4 24 4Z" stroke="#D1972C" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M20 30H28M22 36H26" stroke="#142749" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M24 25V30" stroke="#142749" strokeWidth="2" />
                                            <path d="M24 40V44" stroke="#D1972C" strokeWidth="2" />
                                        </svg>
                                    )}
                                </div>
                                <h3>{pillar.title}</h3>
                                <hr className="pillar-divider" />
                                <p>{pillar.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="approach bg-light">
                <div className="container">
                    <h2>Our Approach</h2>
                    <br />
                    <div className="premium-card">
                        <ol className="approach-list">
                            {approach.map((step, i) => {
                                const parts = step.split(':');
                                const title = parts[0] + ':';
                                const description = parts.slice(1).join(':');
                                return (
                                    <li key={i}>
                                        <span style={{ fontWeight: 700, color: 'var(--navy)' }}>{title}</span>
                                        {description}
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                </div>
            </section>

            <section className="about-cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Let&apos;s Build Your AI Capability?</h2>
                        <p>Ready to build true AI capability in your organization? Let&apos;s discuss how <BrandText /> can empower your team to independently <br />own and evolve AI solutions.<br /><br /></p>
                        <div className="cta-details">
                            <p>We&apos;re here to:</p>
                            <ul>
                                <li>Transfer knowledge, not just deliver projects</li>
                                <li>Build your team&apos;s capabilities</li>
                                <li>Ensure you can continue independently</li>
                                <li>Support your journey to AI self-sufficiency</li>
                            </ul>
                        </div>
                        <Link href="/contact" className="btn btn-gold">Get In Touch</Link>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .about-hero { background: var(--gradient); color: white; padding: 8rem 0 4rem; }
        .about-hero h1 { color: white; font-size: 3.5rem; text-align: center; margin-bottom: 3rem; }
        .team-intro { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: white; font-size: 1.25rem; margin-bottom: 3rem; }
        .expertise-content h3 { color: var(--gold); margin-bottom: 1.5rem; }
        .expertise-content ul { margin-bottom: 2rem; }
        .expertise-content li { margin-bottom: 0.5rem; list-style: disc; margin-left: 1.5rem; }

        .core-purpose h2 { margin-bottom: 2rem; }
        .bold { font-weight: 700; font-size: 1.2rem; display: block; margin-bottom: 1.5rem; color: var(--navy); }
        .core-purpose ul { margin-top: 1.5rem; list-style: disc; margin-left: 1.5rem; }
        .core-purpose li { margin-bottom: 0.5rem; }

        .pillars { padding: 6rem 0; }
        .pillars h2 { text-align: center; margin-bottom: 1rem; color: var(--gold); }
        .pillars .subtitle { text-align: center; margin-bottom: 4rem; color: var(--navy); font-weight: 500; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }

        .pillar-card {
          text-align: center;
          padding: 2.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: rgba(20, 39, 73, 0.90);
          color: white;
          border-radius: 12px;
        }

        .pillar-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }

        .pillar-icon {
          margin-bottom: 1.5rem;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .pillar-card h3 { color: var(--gold); margin-bottom: 0.5rem; }

        .pillar-divider {
          border: 0;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          margin: 1rem 0;
          width: 100%;
        }

        .approach-list { list-style: none; counter-reset: approach-counter; }
        .approach-list li {
          position: relative;
          padding-left: 3.5rem;
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }
        .approach-list li::before {
          counter-increment: approach-counter;
          content: counter(approach-counter);
          position: absolute;
          left: 0;
          top: 0;
          width: 2.5rem;
          height: 2.5rem;
          background: var(--gold);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }

        .about-cta { background: var(--navy); color: white; text-align: center; padding: 6rem 0; }
        .cta-content { display: flex; flex-direction: column; align-items: center; }
        .about-cta h2 { color: white; font-size: 2.5rem; margin-bottom: 1.5rem; }
        .cta-details { text-align: left; width: fit-content; margin: 0 auto 2rem; }
        .about-cta ul { list-style: disc; margin-top: 1rem; }
        .about-cta li { margin-bottom: 0.5rem; opacity: 0.9; }

        @media (max-width: 768px) {
          .about-hero h1 { font-size: 2.5rem; }
        }
      `}</style>
        </main>
    );
}
