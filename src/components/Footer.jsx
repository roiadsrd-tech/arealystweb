
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import footerBg from '../assets/last2.jpg';

import { Link } from 'react-router-dom';
import FAQ from './FAQ';

const Footer = () => {
    return (
        <>
            <FAQ />
            <footer className="relative overflow-hidden" style={{ padding: '120px 0 60px 0', background: '#000' }}>
                {/* Last Section Background - Absolute Layer */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 0,
                    }}
                >
                    <motion.img
                        src={footerBg}
                        alt=""
                        loading="lazy"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 3, delay: 1.5, ease: "easeOut" }}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            opacity: 0.4
                        }}
                    />
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to bottom, #000 0%, transparent 3%), radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
                        pointerEvents: 'none'
                    }}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    {/* CTA Section - Hero-style entrance */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{ textAlign: 'center', marginBottom: '80px' }}
                    >
                        <style dangerouslySetInnerHTML={{
                            __html: `
                            @media (max-width: 768px) {
                                .mobile-bold {
                                    font-weight: 500 !important;
                                }
                            }
                            `
                        }} />
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.2, marginBottom: '80px', fontWeight: 300, color: '#fff' }}>
                            El que responde tarde, <span className="mobile-bold">pierde.</span><br />
                            El que tiene sistema, <span className="mobile-bold">gana.</span>
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
                                style={{
                                    display: 'block',
                                    marginTop: '48px',
                                    background: 'linear-gradient(90deg, #fff 0%, #3b82f6 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}>
                                Nosotros instalamos esa ventaja.
                            </motion.span>
                        </h2>
                        <a href="https://wa.me/18297500718" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            CONTACTO <span>›</span>
                        </a>
                    </motion.div>

                    <div className="flex flex-row justify-between items-center flex-wrap" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '60px', gap: '30px' }}>
                        <Link to="/" className="flex items-center gap-3 decoration-none" style={{ textDecoration: 'none' }}>
                            <svg width="24" height="20" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 24L8 0H14L6 24H0Z" fill="white" />
                                <path d="M9 24L17 0H23L15 24H9Z" fill="white" />
                                <path d="M18 24L26 0H32L24 24H18Z" fill="white" />
                            </svg>
                            <span style={{ fontWeight: 400, fontSize: '1rem', color: '#fff' }}>Arealyst</span>
                        </Link>

                        <div className="flex gap-8" style={{ fontSize: '0.75rem' }}>

                            <Link to="/" className="hover:text-white transition-all" style={{ color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none' }}>Privacy Policy</Link>
                            <a href="https://www.instagram.com/adrianmalln/" className="hover:text-white transition-all" style={{ color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none' }}>Instagram</a>
                        </div>

                        <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.5)' }}>
                            © 2024 Arealyst. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
