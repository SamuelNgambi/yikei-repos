"use client";

import Image from 'next/image';
import { useState, FormEvent } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            } else {
                setStatus('error');
                setErrorMessage(data.error || 'Failed to send message');
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Network error. Please try again.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
    };

    return (
        <main>
            <section className="contact-hero">
                <div className="container">
                    <h1>Get in touch</h1>
                    <p className="description">Ready to start your data journey? Let&apos;s build something great together.</p>
                </div>
            </section>

            <section className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        {/* Left: Form */}
                        <div className="premium-card contact-form">
                            <h3>Email Us</h3>
                            <p>We&apos;ll get back to you within 24 hours.</p>

                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        disabled={status === 'loading'}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        disabled={status === 'loading'}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        required
                                        placeholder="+1 (555) 000-0000"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        disabled={status === 'loading'}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject *</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        required
                                        placeholder="How can we help?"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        disabled={status === 'loading'}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={5}
                                        placeholder="Tell us more about your project"
                                        value={formData.message}
                                        onChange={handleChange}
                                        disabled={status === 'loading'}
                                    ></textarea>
                                </div>

                                {status === 'success' && (
                                    <div className="alert alert-success">
                                        ✓ Message sent successfully! We&apos;ll get back to you soon.
                                    </div>
                                )}

                                {status === 'error' && (
                                    <div className="alert alert-error">
                                        ✗ {errorMessage}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="btn btn-gold w-full"
                                    disabled={status === 'loading'}
                                >
                                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>

                        {/* Right: Info */}
                        <div className="premium-card contact-info">
                            <h3>Office</h3>
                            <p>Come visit us at our office, let&apos;s drink coffee.</p>

                            <div className="info-section">
                                <h4>Office Location</h4>
                                <address>
                                    <strong>YIKEI.AI</strong><br />
                                    9 rue des colonnes<br />
                                    75002 Paris<br />
                                    France
                                </address>
                            </div>

                            <div className="info-section">
                                <h4>Direct Contact</h4>
                                <p>Email: <strong>malo_malam@yikei.ai</strong></p>


                                <div className="social-link-wrapper" style={{ marginTop: '1.5rem' }}>
                                    <a
                                        href="https://www.linkedin.com/company/the-data-and-ai-solutions-builder/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="linkedin-link"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                        <span>Connect on LinkedIn</span>
                                    </a>
                                </div>

                                <p className="note" style={{ marginTop: '1.5rem' }}>Available for meetings across EU timezones</p>
                            </div>

                            <div className="map-container">
                                <div className="map-placeholder">
                                    <Image
                                        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
                                        alt="Our Global Presence"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        unoptimized={true}
                                    />
                                    <div className="map-overlay">
                                        <span>Global Operations</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .contact-hero { background: var(--gradient); color: white; padding: 8rem 0 4rem; text-align: center; }
        .contact-hero h1 { color: white; font-size: 3.5rem; }
        .description { font-size: 1.25rem; opacity: 0.9; }

        .contact-content { padding: 6rem 0; }
        .contact-grid { 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          gap: 4rem; 
          align-items: stretch; 
        }

        .contact-form h3 { margin-bottom: 0.5rem; }
        .contact-form p { color: #666; margin-bottom: 2.5rem; }

        .form-group { margin-bottom: 1.5rem; }
        .form-group label { display: block; margin-bottom: 0.5rem; font-weight: 600; font-size: 0.9rem; }
        .form-group input, .form-group textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 0.5px solid rgba(20, 39, 73, 0.05);
          border-radius: 8px;
          font-family: inherit;
          transition: var(--transition);
        }
        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(209, 151, 44, 0.1);
        }
        .form-group input:disabled, .form-group textarea:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .alert {
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        .alert-success {
          background: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }
        .alert-error {
          background: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }

        .contact-form {
          height: 100%;
        }

        .contact-info {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .w-full { width: 100%; }

        .contact-info h3 { margin-bottom: 0.5rem; }
        .contact-info p { color: #666; margin-bottom: 2rem; }

        .info-section { margin-bottom: 2.5rem; }
        .info-section h4 { color: var(--gold); text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; margin-bottom: 1rem; }
        address { font-style: normal; line-height: 1.8; color: var(--navy); }
        .note { font-size: 0.9rem; color: #888; margin-top: 0.5rem; }

        .map-container { margin: 2rem 0; border-radius: 12px; overflow: hidden; height: 250px; position: relative; border: 0.5px solid rgba(20, 39, 73, 0.05); }
        .map-placeholder { position: relative; height: 100%; width: 100%; }
        
        .map-overlay {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          background: rgba(20, 39, 73, 0.8);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .social-section h4 { color: var(--gold); text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; margin-bottom: 1rem; }
        .linkedin-link { display: flex; align-items: center; gap: 0.75rem; color: var(--navy); font-weight: 600; }
        .linkedin-link:hover { color: var(--gold); }

        @media (max-width: 968px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </main>
    );
}
