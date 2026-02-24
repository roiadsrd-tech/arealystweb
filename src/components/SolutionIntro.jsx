
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import solutionBg from '../assets/thats why we built company2.jpg';

const SolutionIntro = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Background starts revealing earlier (at 5% scroll) to ensure it's first
    const bgOpacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);

    return (
        <div ref={containerRef} style={{ height: '140vh', position: 'relative' }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 768px) {
                    .solution-intro-content {
                        padding: 0 10px !important;
                    }
                    .solution-headline {
                        font-size: 2.4rem !important;
                    }
                }
                `
            }} />
            {/* STICKY WRAPPER - Creates the momentary stop in scroll */}
            <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>

                {/* Background Layer */}
                <motion.div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 1,
                        zIndex: -1,
                        pointerEvents: 'none'
                    }}
                >
                    <img src={solutionBg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0)' }}></div>


                </motion.div>

                {/* Content Container - NOW USING ONE-TIME HERO ANIMATION */}
                <div className="text-center solution-intro-content" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '1400px', margin: '0 auto', padding: '0 30px' }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-20%" }}
                        style={{
                            position: 'relative',
                            zIndex: 10,
                            width: '100%'
                        }}
                    >
                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 2.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="solution-headline"
                            style={{
                                fontSize: 'clamp(3.1rem, 9vw, 5rem)',
                                fontWeight: 400,
                                lineHeight: 1.1,
                                marginBottom: '48px',
                                background: 'linear-gradient(90deg, #fff 0%, var(--accent-color) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            Por eso creamos Arealyst.
                        </motion.h2>

                        <motion.h3
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                fontSize: 'clamp(1.4rem, 2.8vw, 1.8rem)',
                                fontWeight: 400,
                                marginBottom: '32px',
                                color: '#fff'
                            }}
                        >
                            IA que convierte mensajes en citas.
                        </motion.h3>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 2, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
                            style={{ maxWidth: '1000px', margin: '0 auto' }}
                        >
                            <p className="text-secondary" style={{
                                fontSize: 'clamp(1.1rem, 2vw, 1.2rem)',
                                lineHeight: 1.6,
                                marginBottom: '32px',
                                color: '#EDECE4',
                                opacity: 0.8
                            }}>
                                Responde en Instagram y WhatsApp, agenda sola y organiza todo.
                            </p>

                            <p style={{
                                fontSize: 'clamp(1.2rem, 2.5vw, 1.4rem)',
                                fontWeight: 400,
                                marginBottom: '60px',
                                color: '#fff'
                            }}>
                                Trabaja menos. <span style={{ fontWeight: 700 }}>Cierra más.</span>
                            </p>

                            <a href="#contact" className="btn btn-primary" style={{ display: 'inline-block', marginBottom: '180px' }}>
                                GET IN TOUCH <span>›</span>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default SolutionIntro;
