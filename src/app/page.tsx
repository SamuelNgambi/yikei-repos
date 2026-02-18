"use client";

import Link from "next/link";
import Image from "next/image";
import BrandText from "@/components/BrandText";

export default function Home() {
  const services = [
    {
      title: "Strategic Advisory",
      description: "Expert guidance for your data journey.",
      link: "/services#strategic-advisory",
      icon: "/images/icons/strategic-advisory.png"
    },
    {
      title: "Proof of Concept",
      description: "Validate ideas before committing resources.",
      link: "/services#poc",
      icon: "/images/icons/proof-of-concept.png"
    },
    {
      title: "Consultancy",
      description: "Targeted expertise for specific challenges.",
      link: "/services#consultancy",
      icon: "/images/icons/consultancy.png"
    },
    {
      title: "Tailored Training Programs",
      description: "Build the skills that unlock your organization's potential for winning AI Adoption.",
      link: "/services#training",
      icon: "/images/icons/training.png"
    }
  ];

  const values = [
    {
      title: "Expert Guidance",
      description: "Seasoned data and AI professionals leading your transformation.",
      icon: "/images/icons/expert-guidance.png"
    },
    {
      title: "Innovative Tech",
      description: "Leveraging cutting-edge tools to drive business outcomes.",
      icon: "/images/icons/innovative-tech.png"
    },
    {
      title: "Proven Methods",
      description: "Methodologies that ensure reliable and scalable AI deployment.",
      icon: "/images/icons/proven-methods.png"
    }
  ];

  const certifications = [
    { title: "Governing AI Agents with Databricks", description: "DeepLearning.AI", image: "/images/badges/deeplearning-logo.png" },
    { title: "Document AI: from OCR to Agentic Doc Extraction", description: "DeepLearning.AI", image: "/images/badges/deeplearning-logo.png" },
    { title: "Databricks Fundamentals", description: "Databricks", image: "/images/badges/databricks.png" },
    { title: "Databricks Streaming & LakeFlow Declarative Pipeline Professional", description: "Databricks", image: "/images/badges/databricks.png" },
    { title: "Deploying and Evaluating GenAI Apps with MongoDB Atlas Search", description: "MongoDB", image: "/images/badges/mongodb-deploying.png" },
    { title: "Building GenAI Apps with MongoDB Atlas Search", description: "MongoDB", image: "/images/badges/mongodb-building.png" },
    { title: "Dremio Verified Data Product Developer", description: "Dremio", image: "/images/badges/dremio-verified.png" },
    { title: "Fundamentals of MCP", description: "Hugging Face", image: "/images/badges/huggingface.svg" }
  ];

  return (
    <main>
      {/* 1. Hero Section */}
      <section className="hero">
        <div className="container">
          <span className="section-tag">A Data & AI Solutions Builder</span>
          <h1>Empowering Your Business with Data & AI-Driven Solutions</h1>
          <p className="description">
            We help organizations scale AI while remaining Compliant with global legislation be it AI Act, GDPR or Financial Regulations.
          </p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-gold">Get in touch</Link>
          </div>
        </div>
      </section>

      {/* 2. Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Do</span>
            <h2>Our Services</h2>
            <p className="section-description">
              Comprehensive data & AI services to accelerate your digital transformation journey.
            </p>
          </div>
          <div className="grid">
            {services.map((service, index) => (
              <div key={index} className="premium-card">
                <div className="card-icon">
                  <Image src={service.icon} alt={service.title} width={48} height={48} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="card-footer">
                  <Link href={service.link} className="learn-more">
                    Learn More <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose Yikei Section */}
      <section className="why-yikei bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">About </span>
            <h2>Why Choose Yikei</h2>
            <p className="section-description">
              At <BrandText />, we are passionate about leveraging the power of data and artificial intelligence to help your organization innovate and grow.
              Our mission is to bridge the gap between complex technology and practical business outcomes, ensuring you achieve measurable results through tailored AI-driven strategies.
            </p>
          </div>

          <div className="grid">
            {values.map((value, index) => (
              <div key={index} className="premium-card">
                <div className="card-icon">
                  <Image src={value.icon} alt={value.title} width={48} height={48} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>

          <div className="section-footer">
            <Link href="/about" className="btn btn-outline">Learn Our Story</Link>
          </div>
        </div>
      </section>

      {/* 4. Certifications Section */}
      <section className="certifications">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Credentials</span>
            <h2>Certifications</h2>
            <p className="section-description">
              Recognized expertise and industry certifications that validate our technical capabilities and project/program management.
            </p>
          </div>
          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="premium-card cert-card">
                <div className="cert-badge">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={cert.image} alt={cert.title} />
                </div>
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Pre-footer CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Data and confidently Launch AI Adoption?</h2>
            <p>Let&apos;s discuss how we can help you unlock the full potential of your data assets.</p>
            <Link href="/contact" className="btn btn-gold">Get In Touch</Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          min-height: 80vh;
          display: flex;
          align-items: center;
          background: var(--gradient);
          color: white;
          text-align: center;
          padding-top: 100px;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(209, 151, 44, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero h1 {
          color: white;
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-bottom: 1.5rem;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.1;
        }

        .hero .description {
          font-size: 1.25rem;
          max-width: 700px;
          margin: 0 auto 2.5rem;
          opacity: 0.9;
        }

        .section-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 4rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .section-description {
          font-size: 1.1rem;
          color: var(--navy);
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .bg-light {
          background-color: #f8f9fa;
        }

        .card-icon {
          width: 64px;
          height: 64px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          background: rgba(209, 151, 44, 0.1);
          border: 1px solid var(--navy);
          transition: var(--transition);
        }

        .premium-card:hover .card-icon {
          transform: scale(1.1);
          background: rgba(209, 151, 44, 0.2);
        }

        .card-footer {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(20, 39, 73, 0.05);
        }

        .section-footer {
          text-align: center;
          margin-top: 4rem;
        }

        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .cert-card {
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          text-align: center;
          min-height: 240px;
          border: 1px solid rgba(20, 39, 73, 0.05);
        }

        .cert-badge {
            width: 100%;
            height: 80px;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .cert-badge img {
            max-width: 200px;
            max-height: 100%;
            object-fit: contain;
        }

        .cert-card h3 {
          font-size: 1rem;
          margin-bottom: 0.5rem;
          color: var(--navy);
          line-height: 1.4;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cert-card p {
          font-size: 0.85rem;
          color: #666;
          margin: 0;
          margin-top: auto;
        }

        .cta-section {
          background: var(--navy);
          color: white;
          text-align: center;
          padding: 6rem 0;
        }

        .cta-section h2 {
          color: white;
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-section p {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .section-header h2, .cta-section h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </main>
  );
}
