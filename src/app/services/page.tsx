"use client";

import Link from "next/link";
import Image from "next/image";
import BrandText from "@/components/BrandText";

export default function ServicesPage() {
    const services = [
        {
            id: "strategic-advisory",
            title: "Strategic Advisory",
            icon: "/images/icons/strategic-advisory.png",
            description: "We help leadership teams determine the optimal path forward for their organization. Through structured assessments and pragmatic roadmaps, we identify which investments in architecture, governance, and AI readiness will deliver real business value.",
            deliverables: [
                "Current state assessment and gap analysis",
                "Prioritized transformation roadmap",
                "Architecture principles that fit your reality",
                "Build vs buy recommendations",
                "AI/ML readiness evaluation",
                "Executive briefings on what actually matters"
            ],
            cards: ["Analysis", "Roadmap", "Architecture", "Strategy"],
            cta: "Learn More"
        },
        {
            id: "poc",
            title: "Proof of Concept",
            icon: "/images/icons/proof-of-concept.png",
            subtitle: "Validate ideas before committing resources",
            description: "Test your hypotheses with focused experiments that provide real answers. We build working prototypes that demonstrate feasibility, uncover hidden challenges, and give you the confidence to make informed decisions about larger investments.",
            deliverables: [
                "Rapid prototype development (2-4 weeks)",
                "Technical feasibility assessment",
                "Cost and effort estimates",
                "Risk identification and mitigation strategies",
                "Working demo with real data",
                "Clear go/no-go recommendation"
            ],
            process: [
                { title: "Hypothesis", desc: "Define success criteria" },
                { title: "Build", desc: "Rapid prototype development" },
                { title: "Test", desc: "Validate with real data" },
                { title: "Decide", desc: "Go/no-go recommendation" }
            ],
            cta: "Start a PoC"
        },
        {
            id: "consultancy",
            title: "Consultancy",
            icon: "/images/icons/consultancy.png",
            description: <>Sometimes you need an experienced perspective on a specific challenge. Our consultancy services provide targeted expertise to help you make better decisions, avoid common pitfalls, and move forward with confidence. In a nutshell At <BrandText />, we empower organizations to unlock the full potential of their data with intelligent, scalable AI solutions.</>,
            deliverables: [
                "mastering front office trading/sales technology",
                "front-to-back risk management systems",
                "finance technology platforms and compliance solutions",
                "Architecture reviews and recommendations",
                "Technology selection guidance",
                "Build resilient pipelines that deliver up-to-the-second analytics with integrated data validation, CI/CD, and proactive error detection—empowering teams to act fast and confidently",
                "Deploy Agentic AI to intelligently capture, extract, and process documents, seamlessly integrating with enterprise systems for end-to-end automation",
                "Orchestrate specialized AI agents enhanced by advanced context engineering to tackle complex, dynamic enterprise scenarios with precision and flexibility and drive innovation at scale."
            ],
            expertise: ["Solutions Architecture", "Financial Services", "Data Streaming & Agentic AI", "AI/Data Governance & Compliance"],
            cta: "Get Expert Advice"
        },
        {
            id: "training",
            title: "Tailored Training Programs",
            icon: "/images/icons/training.png",
            subtitle: "Build the skills that unlock your organization's data & AI potential.",
            description: "Hands-on courses that transform how your teams work with data and AI. From platform engineering to AI-assisted development, we teach the practical skills needed to leverage modern data & AI tools effectively.",
            deliverables: ["Tailored Training Programs"],
            programs: ["Governing AI Agents", "Financial Regulatory Reporting using Agentic AI", "Building Streaming & Agentic AI Apps", "Agentic AI Documents Processing & Automation"],
            cta: "Explore Programs"
        }
    ];

    return (
        <main>
            <section className="services-hero">
                <div className="container">
                    <h1>Our Services</h1>
                    <p className="description">
                        Pragmatic solutions that bridge the gap between what&apos;s possible and what actually works for your organization
                    </p>
                </div>
            </section>

            {services.map((service, index) => (
                <section key={service.id} id={service.id} className={`service-detail ${index % 2 !== 0 ? 'bg-light' : ''}`}>
                    <div className="container">
                        <div className="service-layout">
                            <div className="service-content">
                                <div className="title-with-icon">
                                    <div className="service-icon-wrapper">
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            width={48}
                                            height={48}
                                            className="service-icon"
                                        />
                                    </div>
                                    <h2>{service.title}</h2>
                                </div>
                                {service.subtitle && <h3 className="subtitle">{service.subtitle}</h3>}
                                <p>{service.description}</p>

                                <div className="deliverable-card premium-card">
                                    <h4>What We Deliver:</h4>
                                    <ul>
                                        {service.deliverables.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="service-visual">
                                {service.cards && (
                                    <div className="cards-container">
                                        <div className="visual-grid">
                                            {service.cards.map(card => (
                                                <div key={card} className="mini-card">
                                                    {card === 'Analysis' && (
                                                        <svg className="card-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="8" y="24" width="6" height="12" fill="#D1972C" />
                                                            <rect x="17" y="16" width="6" height="20" fill="#D1972C" />
                                                            <rect x="26" y="8" width="6" height="28" fill="#D1972C" />
                                                            <path d="M8 12L17 18L26 8" stroke="#142749" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    )}
                                                    {card === 'Roadmap' && (
                                                        <svg className="card-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="10" cy="20" r="4" fill="#D1972C" />
                                                            <circle cx="20" cy="12" r="4" fill="#D1972C" />
                                                            <circle cx="30" cy="20" r="4" fill="#D1972C" />
                                                            <path d="M14 20H16M24 12H26M10 24V28M30 24V28" stroke="#142749" strokeWidth="2" strokeLinecap="round" />
                                                            <path d="M14 18L16 14M24 14L26 18" stroke="#D1972C" strokeWidth="2" strokeLinecap="round" />
                                                        </svg>
                                                    )}
                                                    {card === 'Architecture' && (
                                                        <svg className="card-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="8" y="8" width="10" height="10" fill="#D1972C" />
                                                            <rect x="22" y="8" width="10" height="10" fill="#D1972C" />
                                                            <rect x="8" y="22" width="10" height="10" fill="#D1972C" />
                                                            <rect x="22" y="22" width="10" height="10" fill="#D1972C" />
                                                            <line x1="13" y1="18" x2="13" y2="22" stroke="#142749" strokeWidth="2" />
                                                            <line x1="27" y1="18" x2="27" y2="22" stroke="#142749" strokeWidth="2" />
                                                            <line x1="18" y1="13" x2="22" y2="13" stroke="#142749" strokeWidth="2" />
                                                        </svg>
                                                    )}
                                                    {card === 'Strategy' && (
                                                        <svg className="card-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="20" cy="20" r="12" stroke="#D1972C" strokeWidth="2" fill="none" />
                                                            <circle cx="20" cy="20" r="6" fill="#D1972C" />
                                                            <path d="M20 8V14M20 26V32M8 20H14M26 20H32" stroke="#D1972C" strokeWidth="2" strokeLinecap="round" />
                                                        </svg>
                                                    )}
                                                    <span>{card}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {service.process && (
                                    <div className="process-card premium-card">
                                        <h4>PoC Process</h4>
                                        <div className="steps-list">
                                            {service.process.map((step, i) => (
                                                <div key={i} className="step-item" style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '1rem'
                                                }}>
                                                    <div style={{
                                                        width: '32px',
                                                        height: '32px',
                                                        borderRadius: '50%',
                                                        background: `linear-gradient(135deg, #142749 0%, #D1972C ${120 - (i * 30)}%)`,
                                                        color: 'white',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontWeight: 'bold',
                                                        flexShrink: 0,
                                                        fontSize: '0.9rem',
                                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                                    }}>
                                                        {i + 1}
                                                    </div>
                                                    <div>
                                                        <strong>{step.title}</strong>: {step.desc}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {service.expertise && (
                                    <div className="cards-container">
                                        <div className="expertise-grid visual-grid">
                                            {service.expertise.map(item => (
                                                <div key={item} className="mini-card">
                                                    {item === 'Solutions Architecture' && (
                                                        <svg className="card-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="4" y="4" width="14" height="14" rx="2" fill="#D1972C" />
                                                            <rect x="22" y="4" width="14" height="14" rx="2" fill="#D1972C" />
                                                            <rect x="4" y="22" width="14" height="14" rx="2" fill="#D1972C" />
                                                            <rect x="22" y="22" width="14" height="14" rx="2" fill="#D1972C" />
                                                            <circle cx="20" cy="20" r="3" fill="#142749" />
                                                            <line x1="11" y1="18" x2="11" y2="22" stroke="#142749" strokeWidth="1.5" />
                                                            <line x1="29" y1="18" x2="29" y2="22" stroke="#142749" strokeWidth="1.5" />
                                                            <line x1="18" y1="11" x2="22" y2="11" stroke="#142749" strokeWidth="1.5" />
                                                            <line x1="18" y1="29" x2="22" y2="29" stroke="#142749" strokeWidth="1.5" />
                                                        </svg>
                                                    )}
                                                    {item === 'Financial Services' && (
                                                        <svg className="card-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="8" y="28" width="4" height="8" fill="#D1972C" />
                                                            <rect x="14" y="22" width="4" height="14" fill="#D1972C" />
                                                            <rect x="20" y="18" width="4" height="18" fill="#D1972C" />
                                                            <rect x="26" y="12" width="4" height="24" fill="#D1972C" />
                                                            <path d="M10 20L16 14L22 16L28 8" stroke="#142749" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <circle cx="10" cy="20" r="2" fill="#142749" />
                                                            <circle cx="16" cy="14" r="2" fill="#142749" />
                                                            <circle cx="22" cy="16" r="2" fill="#142749" />
                                                            <circle cx="28" cy="8" r="2" fill="#142749" />
                                                        </svg>
                                                    )}
                                                    {item === 'Data Streaming & Agentic AI' && (
                                                        <svg className="card-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="10" cy="20" r="5" fill="#D1972C" />
                                                            <circle cx="30" cy="20" r="5" fill="#D1972C" />
                                                            <path d="M15 20H25" stroke="#D1972C" strokeWidth="2" />
                                                            <path d="M18 16L22 20L18 24" stroke="#142749" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <circle cx="20" cy="8" r="3" fill="#142749" />
                                                            <circle cx="20" cy="32" r="3" fill="#142749" />
                                                            <line x1="20" y1="11" x2="20" y2="15" stroke="#D1972C" strokeWidth="1.5" />
                                                            <line x1="20" y1="25" x2="20" y2="29" stroke="#D1972C" strokeWidth="1.5" />
                                                        </svg>
                                                    )}
                                                    {item === 'AI/Data Governance & Compliance' && (
                                                        <svg className="card-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M20 6L28 10V18C28 24 24 28 20 32C16 28 12 24 12 18V10L20 6Z" fill="#D1972C" />
                                                            <path d="M16 20L18.5 22.5L24 17" stroke="#142749" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    )}
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {service.programs && (
                                    <div className="cards-container">
                                        <div className="programs-grid visual-grid">
                                            {service.programs.map(item => (
                                                <div key={item} className="mini-card">
                                                    {item === 'Governing AI Agents' && (
                                                        <svg className="card-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="20" cy="20" r="14" stroke="#D1972C" strokeWidth="2" fill="none" />
                                                            <path d="M14 20L18 24L26 16" stroke="#D1972C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <circle cx="10" cy="10" r="3" fill="#142749" />
                                                            <circle cx="30" cy="10" r="3" fill="#142749" />
                                                            <circle cx="10" cy="30" r="3" fill="#142749" />
                                                            <circle cx="30" cy="30" r="3" fill="#142749" />
                                                        </svg>
                                                    )}
                                                    {item === 'Financial Regulatory Reporting using Agentic AI' && (
                                                        <svg className="card-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="8" y="10" width="24" height="26" rx="2" stroke="#D1972C" strokeWidth="2" fill="none" />
                                                            <line x1="12" y1="16" x2="28" y2="16" stroke="#D1972C" strokeWidth="1.5" />
                                                            <line x1="12" y1="20" x2="24" y2="20" stroke="#D1972C" strokeWidth="1.5" />
                                                            <line x1="12" y1="24" x2="28" y2="24" stroke="#D1972C" strokeWidth="1.5" />
                                                            <line x1="12" y1="28" x2="20" y2="28" stroke="#D1972C" strokeWidth="1.5" />
                                                            <circle cx="28" cy="12" r="4" fill="#142749" />
                                                            <path d="M26 12L27.5 13.5L30 11" stroke="#D1972C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    )}
                                                    {item === 'Building Streaming & Agentic AI Apps' && (
                                                        <svg className="card-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="6" y="12" width="28" height="20" rx="2" stroke="#D1972C" strokeWidth="2" fill="none" />
                                                            <path d="M16 20L20 24L16 28" stroke="#142749" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <line x1="22" y1="28" x2="26" y2="20" stroke="#142749" strokeWidth="2" strokeLinecap="round" />
                                                            <circle cx="32" cy="8" r="3" fill="#D1972C" />
                                                            <path d="M10 8L14 8" stroke="#D1972C" strokeWidth="2" strokeLinecap="round" />
                                                            <path d="M18 8L22 8" stroke="#D1972C" strokeWidth="2" strokeLinecap="round" />
                                                        </svg>
                                                    )}
                                                    {item === 'Agentic AI Documents Processing & Automation' && (
                                                        <svg className="card-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="10" y="6" width="20" height="28" rx="2" stroke="#D1972C" strokeWidth="2" fill="none" />
                                                            <line x1="14" y1="12" x2="26" y2="12" stroke="#D1972C" strokeWidth="1.5" />
                                                            <line x1="14" y1="16" x2="22" y2="16" stroke="#D1972C" strokeWidth="1.5" />
                                                            <line x1="14" y1="20" x2="26" y2="20" stroke="#D1972C" strokeWidth="1.5" />
                                                            <circle cx="30" cy="28" r="6" fill="#142749" />
                                                            <path d="M27 28L29 30L33 26" stroke="#D1972C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    )}
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="section-footer">
                            <Link href="/contact" className="btn btn-gold">{service.cta}</Link>
                        </div>
                    </div>
                </section>
            ))}

            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Transform Your Data Capabilities and confidently Launch AI Adoption?</h2>
                        <p>Let&apos;s have a pragmatic conversation about what your organization actually needs to succeed with data and AI.</p>
                        <Link href="/contact" className="btn btn-gold">Schedule a Discussion +</Link>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .services-hero {
          background: var(--gradient);
          color: white;
          padding: 8rem 0 4rem;
          text-align: center;
        }

        .services-hero h1 { color: white; font-size: 3.5rem; }
        .services-hero .description { font-size: 1.25rem; opacity: 0.9; max-width: 800px; margin: 1rem auto; }

        .service-detail { padding: 6rem 0; }
        .bg-light { background: #f8f9fa; }

        .service-layout {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .title-with-icon {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .service-icon-wrapper {
          width: 56px;
          height: 56px;
          flex-shrink: 0;
          border-radius: 12px;
          border: 1px solid var(--navy);
          background: rgba(209, 151, 44, 0.1);
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service-icon {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .service-content h2 { font-size: 2.5rem; margin-bottom: 0; }
        .subtitle { color: var(--gold); margin-bottom: 1.5rem; font-size: 1.25rem; }
        .service-content p { margin-bottom: 2rem; color: #444; }

        .deliverable-card h4 { margin-bottom: 1.5rem; }
        .deliverable-card ul { list-style: none; }
        .deliverable-card li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .deliverable-card li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--gold);
          font-weight: bold;
        }

        .visual-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .cards-container {
          padding: 2rem;
          background: white;
          border-radius: 12px;
          border: 0.5px solid rgba(20, 39, 73, 0.05);
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        }

        .mini-card {
          background: rgba(173, 216, 230, 0.15);
          padding: 1.5rem;
          border-radius: 8px;
          border: 0.5px solid rgba(20, 39, 73, 0.05);
          text-align: center;
          font-weight: 600;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          transition: var(--transition);
        }

        .card-icon {
          width: 40px;
          height: 40px;
        }

        .mini-card span {
          display: block;
        }

        .mini-card:hover { border-color: var(--gold); transform: translateY(-3px); }

        .process-card h4 { margin-bottom: 1.5rem; }
        .step-item { margin-bottom: 1rem; }

        .section-footer { margin-top: 3rem; }

        .cta-section { background: var(--navy); color: white; text-align: center; padding: 6rem 0; }
        .cta-section h2 { color: white; font-size: 2.5rem; margin-bottom: 1.5rem; }
        .cta-section p { font-size: 1.25rem; margin-bottom: 2.5rem; opacity: 0.9; }

        @media (max-width: 968px) {
          .service-layout { grid-template-columns: 1fr; gap: 2rem; }
          .service-visual { order: -1; }
        }
      `}</style>
        </main>
    );
}
