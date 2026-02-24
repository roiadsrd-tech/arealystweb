import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot } from 'lucide-react';
import heroBg from '../assets/hero3.JPG';

const DemoSection = () => {
    return (
        <section className="demo-section-container" style={{ padding: '160px 0 120px 0', marginTop: '-160px', position: 'relative', overflow: 'hidden', minHeight: '85vh', display: 'flex', alignItems: 'center', background: '#000' }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 768px) {
                    .demo-mobile-hide {
                        display: none !important;
                    }
                    .demo-section-container {
                        padding-bottom: 20px !important;
                        min-height: auto !important;
                    }
                }
                `
            }} />
            {/* Background Image */}
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
                <img src={heroBg} alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 10, width: '100%' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>


                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{
                            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                            fontWeight: 400,
                            marginBottom: '32px',
                            color: '#fff',
                            lineHeight: 1.1,
                            letterSpacing: '-0.02em',
                            textShadow: '0 10px 40px rgba(0,0,0,0.5)'
                        }}
                    >
                        Haz la prueba en <span style={{ color: '#fff' }}>30 segundos</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                            alignItems: 'center'
                        }}
                    >
                        <p className="demo-mobile-hide" style={{
                            fontSize: '1.1rem',
                            color: 'rgba(255, 255, 255, 0.6)',
                            fontWeight: 400,
                            lineHeight: 1.5,
                            maxWidth: '550px'
                        }}>
                            Interactúa con Arealyst en tiempo real. Abre el chat y descubre cómo podemos transformar tu atención al cliente.
                        </p>

                        <div style={{
                            background: 'transparent',
                            padding: '10px 0',
                            display: 'inline-block',
                            textAlign: 'left',
                        }}>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <li style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '14px',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    padding: '12px 20px',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(5px)'
                                }}>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6', flexShrink: 0, boxShadow: '0 0 10px #3B82F6' }}>
                                    </div>
                                    <div style={{ fontSize: '1.05rem', color: '#fff', fontWeight: 500, letterSpacing: '-0.01em' }}>
                                        Dile qué negocio tienes.
                                    </div>
                                </li>
                                <li style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '14px',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    padding: '12px 20px',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(5px)'
                                }}>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6', flexShrink: 0, boxShadow: '0 0 10px #3B82F6' }}>
                                    </div>
                                    <div style={{ fontSize: '1.05rem', color: '#fff', fontWeight: 500, letterSpacing: '-0.01em' }}>
                                        Mira cómo responde como tu recepcionista.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{
                            x: [0, 15, 0],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}
                    >
                        <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                            <ArrowRight strokeWidth={1.5} style={{ width: '28px', height: '28px', color: '#fff' }} />
                        </div>
                        <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 600, color: 'rgba(255,255,255,0.5)' }}>El chat está abajo a la derecha</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DemoSection;
