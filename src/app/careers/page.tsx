"use client";

import Link from "next/link";
import BrandText from "@/components/BrandText";

export default function CareersPage() {
    const values = [
        {
            title: "Innovation",
            description: "We constantly push boundaries and challenge the status quo to deliver cutting-edge solutions."
        },
        {
            title: "Collaboration",
            description: "We believe the best solutions come from diverse perspectives working together towards a common goal."
        },
        {
            title: "Excellence",
            description: "We take pride in delivering exceptional quality in everything we do, exceeding expectations every time."
        }
    ];

    const process = [
        { step: 1, title: "Initial Screening", desc: "We review your application and resume to ensure a good fit." },
        { step: 2, title: "Technical Assessment", desc: "A practical assessment to evaluate your skills." },
        { step: 3, title: "Team Interview", desc: "Meet with potential team members to discuss the role and your experience." },
        { step: 4, title: "Offer", desc: "If everything aligns, we'll extend an offer to join our team." }
    ];

    return (
        <main>
            <section className="careers-hero">
                <div className="container">
                    <h1 style={{ marginBottom: '2rem' }}>Careers</h1>
                    <p className="description">
                        Join our team of innovators, builders, agents and help shape the future of data-driven solutions. We&apos;re looking for passionate individuals who want to make a real impact in the world of data analytics and AI.
                    </p>
                </div>
            </section>

            <section className="why-join">
                <div className="container">
                    <div className="split-layout">
                        <div className="content">
                            <h2 style={{ marginBottom: '2rem' }}>Why Join Us</h2>
                            <p>
                                Join <BrandText /> to build the future of data and AI solutions for innovative organizations. We&apos;re a specialized team focused on making governance and compliance accelerators for business innovation, not obstacles.
                            </p>
                            <p>
                                We work with cutting-edge technologies to deliver innovative data-driven enterprise AI solutions. Our expertise spans stakeholders engagement, data & AI solutions architecture, deployment and governance, helping organizations build production-ready AI capabilities.
                            </p>
                            <p>
                                At <BrandText />, you&apos;ll work alongside experts who combine business requirement elicitation acumen, deep technical knowledge with practical implementation experience. We&apos;re looking for people who share our passion for building solutions that enable organizations to independently deploy AI systems through knowledge transfer and hands-on collaboration.
                            </p>
                        </div>
                        <div className="visual">
                            {/* Mockup of people working */}
                            <div className="mockup-image">
                                <div className="image-overlay">
                                    <span>Innovating Together</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="core-values bg-light">
                <div className="container">
                    <div className="section-header">
                        <h2 style={{ marginBottom: '2rem' }}>Our Core Values</h2>
                        <p className="subtitle">These principles guide everything we do at <BrandText />, from how we work together to how we serve our clients.</p>
                    </div>
                    <div className="grid">
                        {values.map((v, i) => (
                            <div key={i} className="premium-card center-card">
                                <div className="value-icon">
                                    {v.title === 'Innovation' && (
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 4C18.48 4 14 8.48 14 14C14 19.52 18 25 24 25C30 25 34 19.52 34 14C34 8.48 29.52 4 24 4Z" stroke="#D1972C" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M20 30H28M22 36H26" stroke="#142749" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M24 25V30" stroke="#142749" strokeWidth="2" />
                                            <path d="M24 40V44" stroke="#D1972C" strokeWidth="2" />
                                        </svg>
                                    )}
                                    {v.title === 'Collaboration' && (
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16" cy="18" r="6" stroke="#142749" strokeWidth="2" />
                                            <circle cx="32" cy="18" r="6" stroke="#142749" strokeWidth="2" />
                                            <path d="M10 32C10 28.6863 12.6863 26 16 26C19.3137 26 22 28.6863 22 32" stroke="#D1972C" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M26 32C26 28.6863 28.6863 26 32 26C35.3137 26 38 28.6863 38 32" stroke="#D1972C" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M19 14L29 14" stroke="#142749" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    )}
                                    {v.title === 'Excellence' && (
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 4L29.5 16.5L42 18L32 26.5L35 40L24 33L13 40L16 26.5L6 18L18.5 16.5L24 4Z" stroke="#D1972C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <circle cx="24" cy="22" r="6" stroke="#142749" strokeWidth="2" />
                                        </svg>
                                    )}
                                </div>
                                <h3>{v.title}</h3>
                                <hr style={{ border: '0', borderTop: '1px solid rgba(20, 39, 73, 0.1)', margin: '1rem auto', width: '100%' }} />
                                <p>{v.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="hiring-process">
                        <h3>Our Selection Process</h3>
                        <p>Our hiring process is designed to be thorough yet efficient. Here&apos;s what you can expect:</p>
                        <div className="process-grid">
                            {process.map((p, i) => (
                                <div key={i} className="process-item">
                                    <div className="step-num">{p.step}</div>
                                    <div className="step-content">
                                        <h4>{p.title}</h4>
                                        <p>{p.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="open-positions">
                <div className="container">
                    <div className="section-header">
                        <h2 style={{ marginBottom: '2rem' }}>Open Positions</h2>
                        <p className="subtitle">Ready to join our mission? Explore our current openings and find your perfect role. We&apos;re always looking for talented individuals who share our passion for tailored made enterprises data & AI solutions and innovation.</p>
                    </div>

                    <div className="premium-card join-journey">
                        <h3 style={{ marginBottom: '2rem' }}>Ready to Join Our Journey?</h3>
                        <p>Take the next step in your career and help us build the future of enterprises innovation. We can&apos;t wait to meet you and explore how we can grow together.</p>
                        <p>Do not see the perfect role listed? Feel free to reach out to explore opportunities!</p>
                        <Link href="/contact" className="btn btn-gold">Contact Our Team</Link>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .careers-hero { background: var(--gradient); color: white; padding: 8rem 0 4rem; text-align: center; }
        .careers-hero h1 { color: white; font-size: 3.5rem; }
        .description { font-size: 1.25rem; opacity: 0.9; max-width: 800px; margin: 1rem auto; }

        .why-join { padding: 6rem 0; }
        .split-layout { display: grid; grid-template-columns: 1.2fr 1fr; gap: 4rem; align-items: center; }
        .content p { margin-bottom: 1.5rem; color: #444; }

        .mockup-image {
          height: 400px;
          background: linear-gradient(rgba(20, 39, 73, 0.4), rgba(20, 39, 73, 0.4)), url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80') center/cover;
          border-radius: 20px;
          position: relative;
          box-shadow: var(--shadow);
        }

        .image-overlay {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: var(--gold);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-weight: 700;
        }

        .section-header { text-align: center; max-width: 800px; margin: 0 auto 4rem; }
        .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-bottom: 4rem; }

        .center-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .value-icon {
            margin-bottom: 1.5rem;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: rgba(20, 39, 73, 0.05);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .hiring-process { margin-top: 6rem; background: white; padding: 3rem; border-radius: 20px; box-shadow: var(--shadow); }
        .hiring-process h3 { margin-bottom: 1rem; }
        .process-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; margin-top: 2rem; }
        .process-item { display: flex; flex-direction: column; align-items: flex-start; }
        .step-num { width: 40px; height: 40px; background: var(--gold); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; margin-bottom: 1rem; }
        .step-content h4 { margin-bottom: 0.5rem; }

        .join-journey { text-align: center; padding: 4rem; }
        .join-journey h3 { margin-bottom: 1.5rem; font-size: 2rem; }
        .join-journey p { margin-bottom: 1rem; color: #444; }
        .join-journey .btn { margin-top: 2rem; }

        @media (max-width: 968px) {
          .split-layout { grid-template-columns: 1fr; }
          .grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </main>
    );
}
