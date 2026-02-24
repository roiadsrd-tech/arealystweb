import React from 'react';
import { motion } from 'framer-motion';
import logo1 from '../assets/logos/CTA-38.webp';
import logo2 from '../assets/logos/chatglogo.png';
import logo3 from '../assets/logos/claude.jpg';
import logo4 from '../assets/logos/gemini.png';
import logo5 from '../assets/logos/Google_Antigravity_Logo_2025_icon.png';

const logos = [logo1, logo2, logo3, logo4, logo5];

const LogoGrid = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
                duration: 1.2,
                delay: 0.6,
                ease: [0.2, 0.65, 0.3, 0.9]
            }}
            style={{ padding: '40px 0 60px 0', overflow: 'hidden' }}
        >
            <style dangerouslySetInnerHTML={{
                __html: `
                .logo-marquee-track {
                    gap: 100px;
                    padding-right: 100px;
                }
                .mobile-text { display: none; }
                .desktop-text { display: inline; }
                @media (max-width: 768px) {
                    .logo-marquee-track {
                        gap: 50px;
                        padding-right: 50px;
                    }
                    .mobile-text { display: inline; }
                    .desktop-text { display: none; }
                }
                `
            }} />
            <div className="container">
                <p className="text-secondary text-center" style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '40px', color: '#EDECE4', opacity: 0.5 }}>
                    <span className="desktop-text">IMPULSADO POR LOS MEJORES MODELOS DE IA:</span>
                    <span className="mobile-text">USAMOS LAS MEJORES HERRAMIENTAS</span>
                </p>
            </div>

            <div style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
                {/* Gradient mask overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%)',
                    pointerEvents: 'none',
                    zIndex: 1
                }}></div>

                <motion.div
                    className="flex items-center logo-marquee-track"
                    animate={{ x: [0, -1035] }}
                    transition={{
                        duration: 120,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear"
                    }}
                >
                    {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt="Client Logo"
                            style={{
                                height: '38px',
                                maxWidth: '160px',
                                objectFit: 'contain',
                                opacity: 0.5,
                                transition: 'all 0.4s ease'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.opacity = '1';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.opacity = '0.5';
                            }}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default LogoGrid;
