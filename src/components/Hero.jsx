
import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/bg3.jpg';
import LogoGrid from './LogoGrid';

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-between" style={{ minHeight: '100vh', paddingTop: '120px' }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 768px) {
                    .hero-content {
                        margin-top: -60px;
                    }
                    .hero-subtext {
                        padding: 0 16px;
                    }
                    .hero-btn-container {
                        display: none !important;
                    }
                    .hero-main-headline {
                        font-size: 2.8rem !important;
                    }
                    .mobile-highlight {
                        font-weight: 700 !important;
                        color: #ffffff !important;
                    }
                }
                `
            }} />
            {/* Direct Background Image Layer */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                }}
            >
                <img src={heroBg} alt="" style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }} />
            </motion.div>

            {/* Empty top space for flex alignment */}
            <div style={{ height: '60px' }}></div>

            <div className="container text-center hero-content" style={{ position: 'relative', zIndex: 1, padding: '0 12px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    style={{ willChange: 'transform, opacity' }}
                    transition={{
                        duration: 1.2,
                        ease: [0.2, 0.65, 0.3, 0.9]
                    }}
                >
                    <h1 className="hero-main-headline" style={{
                        fontSize: 'clamp(3.5rem, 10vw, 5.5rem)',
                        lineHeight: 1.1,
                        marginBottom: '48px',
                        fontWeight: 400,
                        color: '#ffffff'
                    }}>
                        El que responde <span style={{ background: 'linear-gradient(90deg, #ffffff 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'inline-block' }}>primero</span>,<br />
                        se queda con el <span style={{ background: 'linear-gradient(90deg, #ffffff 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'inline-block' }}>cliente</span>.
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.2,
                            delay: 0.2,
                            ease: [0.2, 0.65, 0.3, 0.9]
                        }}
                        className="text-secondary hero-subtext"
                        style={{ fontSize: 'clamp(1.15rem, 2vw, 1.2rem)', maxWidth: '650px', margin: '0 auto 48px auto', color: '#EDECE4' }}
                    >
                        Instalamos sistemas con IA para negocios que quieren responder <span className="mobile-highlight">más rápido</span> y cerrar <span className="mobile-highlight">más ventas</span>.
                    </motion.p>

                    <motion.div
                        className="hero-btn-container"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.2,
                            delay: 0.4,
                            ease: [0.2, 0.65, 0.3, 0.9]
                        }}
                    >
                        <a href="#contact" className="btn btn-primary">
                            GET IN TOUCH <span>›</span>
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Logos integrated at the bottom of hero */}
            <div style={{ width: '100%', position: 'relative', zIndex: 1, paddingTop: '60px' }}>
                <LogoGrid />
            </div>
        </section>
    );
};

export default Hero;
