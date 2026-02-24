import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import pricingBgDefault from '../assets/price1.png';
import pricingBgNew from '../assets/price2.png';

const MotionLink = motion(Link);

const Pricing = ({ showTitle = true, showBg = true, customBg = pricingBgNew }) => {
    const featuresA = [
        "Atención automática 24/7",
        "Agenda citas automáticamente",
        "Notificaciones por email"
    ];

    const featuresB = [
        "Inbox unificado",
        "Pipeline visual de ventas",
        "Calendario inteligente",
        "+ Arealyst Agent"
    ];

    return (
        <section id="pricing" style={{ padding: `${showTitle ? '120px' : '80px'} 0 120px 0`, backgroundColor: '#000', position: 'relative', overflow: 'hidden' }}>
            {/* Background Image Layer */}
            {showBg && (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 0,
                        pointerEvents: 'none'
                    }}
                >
                    <img
                        src={customBg}
                        alt=""
                        loading="lazy"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to bottom, transparent 85%, #000 100%), radial-gradient(circle at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)'
                    }}></div>
                </motion.div>
            )}

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                {showTitle && (
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 400, color: '#fff', marginBottom: '80px', letterSpacing: '-0.02em' }}
                    >
                        Define tu estrategia
                    </motion.h2>
                )}

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px',
                    maxWidth: '850px',
                    margin: '0 auto'
                }}>

                    {/* Opción A */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            padding: '32px',
                            borderRadius: '24px',
                            background: 'rgba(10, 10, 10, 0.4)',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            textAlign: 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                        }}
                    >
                        <h3 style={{ fontSize: '1.6rem', fontWeight: 400, color: '#fff', marginBottom: '8px' }}>
                            Arealyst Agent
                        </h3>
                        <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.5)', fontWeight: 300, marginBottom: '20px' }}>
                            Para no perder ningún lead
                        </p>

                        <div style={{ marginBottom: '24px', background: 'rgba(255, 255, 255, 0.05)', padding: '16px', borderRadius: '14px' }}>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                                <span style={{ fontSize: '1.4rem', fontWeight: 500, color: '#fff' }}>US$300</span>
                                <span style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.4)' }}>/mes</span>
                            </div>
                        </div>



                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            {featuresA.map((feature, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                                    style={{ display: 'flex', alignItems: 'start', gap: '12px', color: 'rgba(255, 255, 255, 0.8)' }}
                                >
                                    <Check size={14} style={{ color: 'rgba(255, 255, 255, 0.3)', flexShrink: 0, marginTop: '4px' }} />
                                    <span style={{ fontWeight: 300, fontSize: '0.9rem', lineHeight: 1.4 }}>{feature}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <a
                            href="https://wa.me/18297500718"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{
                                marginTop: 'auto',
                                width: '100%'
                            }}
                        >
                            7 DÍAS DE PRUEBA <span>›</span>
                        </a>
                    </motion.div>

                    {/* Opción B */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            padding: '32px',
                            borderRadius: '24px',
                            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 35, 128, 0.45) 60%, rgba(0, 71, 255, 0.65) 100%)',
                            border: '1px solid rgba(0, 71, 255, 0.3)',
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            boxShadow: '0 20px 60px rgba(0, 71, 255, 0.3), 0 0 80px rgba(0, 71, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                            textAlign: 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative'
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            background: '#fff',
                            color: '#0047FF',
                            padding: '4px 10px',
                            borderRadius: '100px',
                            fontSize: '0.6rem',
                            fontWeight: 800,
                            letterSpacing: '0.05em'
                        }}>
                            RECOMENDADO
                        </div>

                        <h3 style={{ fontSize: '1.6rem', fontWeight: 400, color: '#fff', marginBottom: '8px', paddingRight: '100px' }}>
                            Arealyst Agent + Arealyst System
                        </h3>
                        <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)', fontWeight: 300, marginBottom: '20px', paddingRight: '100px' }}>
                            Para escalar tu negocio con control total
                        </p>

                        <div style={{ marginBottom: '24px', background: 'rgba(255, 255, 255, 0.05)', padding: '16px', borderRadius: '14px' }}>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                                <span style={{ fontSize: '1.4rem', fontWeight: 500, color: '#fff' }}>US$325</span>
                                <span style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)' }}>/mes</span>
                            </div>
                        </div>



                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            {featuresB.map((feature, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.35 + i * 0.1, ease: "easeOut" }}
                                    style={{ display: 'flex', alignItems: 'start', gap: '12px', color: '#fff' }}
                                >
                                    <Check size={14} style={{ color: '#fff', flexShrink: 0, marginTop: '4px' }} />
                                    <span style={{ fontWeight: 300, fontSize: '0.9rem', lineHeight: 1.4 }}>{feature}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <a
                            href="https://wa.me/18297500718"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{
                                marginTop: 'auto',
                                width: '100%'
                            }}
                        >
                            14 DÍAS DE PRUEBA <span>›</span>
                        </a>
                    </motion.div>
                </div>

                <div style={{ marginTop: '80px' }}>
                    <p style={{ color: 'rgba(255, 255, 255, 0.4)', fontWeight: 300, fontSize: '0.95rem' }}>
                        Sin permanencia. Cancela cuando quieras.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
