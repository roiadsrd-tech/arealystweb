import React from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, Zap, MessageCircle, Database, LayoutList, TrendingUp, Layout, CheckCircle } from 'lucide-react';

const BeforeAfter = () => {

    const beforeList = [
        "Mensajes en Instagram y WhatsApp sin orden.",
        "Respondes cuando puedes, no cuando el cliente escribe.",
        "Preguntas repetidas todos los días.",
        "Citas anotadas en libreta o Excel.",
        "No sabes quién está listo para comprar."
    ];

    const afterList = [
        { text: "Todos los mensajes en un solo sistema.", icon: Layout },
        { text: "Respuestas automáticas en segundos.", icon: Zap },
        { text: "La IA agenda citas sola.", icon: CheckCircle },
        { text: "Seguimiento claro a cada interesado.", icon: LayoutList },
        { text: "Sabes exactamente dónde está cada cliente.", icon: TrendingUp }
    ];

    return (
        <section style={{ padding: '160px 0', backgroundColor: '#000', overflow: 'hidden' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>

                <div style={{ textAlign: 'center', marginBottom: '100px' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                            fontWeight: 400,
                            marginBottom: '32px',
                            color: '#fff',
                            lineHeight: 1.1,
                            letterSpacing: '-0.03em',
                            textShadow: '0 10px 40px rgba(0,0,0,0.5)'
                        }}
                    >
                        Antes <span style={{ opacity: 0.3 }}>desorden.</span> <br />
                        <span style={{ color: '#fff' }}>Después control.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            fontSize: '1.2rem',
                            color: 'rgba(255, 255, 255, 0.7)',
                            lineHeight: 1.6,
                            fontWeight: 400,
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}
                    >
                        La diferencia entre correr detrás de mensajes… y tener todo bajo control.
                    </motion.p>
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
                    @media (max-width: 768px) {
                        .bg-accent-red {
                            width: 100% !important;
                            height: 50% !important;
                            background: radial-gradient(circle at 50% 20%, rgba(239, 68, 68, 0.1) 0%, transparent 70%) !important;
                        }
                        .bg-accent-green {
                            width: 100% !important;
                            height: 50% !important;
                            top: 50% !important;
                            left: 0 !important;
                            right: auto !important;
                            background: radial-gradient(circle at 50% 80%, rgba(34, 197, 94, 0.1) 0%, transparent 70%) !important;
                        }
                    }
                    `
                }} />

                {/* Integrated Comparison Panel (Old Style) */}
                <div
                    className="comparison-cols"
                    style={{
                        position: 'relative',
                        background: 'rgba(255, 255, 255, 0.01)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: '40px',
                        overflow: 'hidden',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    }}>

                    {/* Red Background Accent (Left) */}
                    <div className="bg-accent-red" style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '50%',
                        height: '100%',
                        background: 'radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.05) 0%, transparent 70%)',
                        pointerEvents: 'none',
                        zIndex: 0
                    }} />

                    {/* Green Background Accent (Right) */}
                    <div className="bg-accent-green" style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '50%',
                        height: '100%',
                        background: 'radial-gradient(circle at 80% 50%, rgba(34, 197, 94, 0.05) 0%, transparent 70%)',
                        pointerEvents: 'none',
                        zIndex: 0
                    }} />

                    {/* Left Side: Before */}
                    <div style={{
                        padding: '60px 50px',
                        borderRight: '1px solid rgba(255, 255, 255, 0.05)',
                        position: 'relative'
                    }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginBottom: '40px',
                            padding: '6px 14px',
                            background: 'rgba(239, 68, 68, 0.1)',
                            border: '1px solid rgba(239, 68, 68, 0.2)',
                            borderRadius: '100px'
                        }}>
                            <Minus size={14} color="#ef4444" />
                            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                Antes (sin Arealyst)
                            </span>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            {beforeList.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    style={{ display: 'flex', gap: '16px', alignItems: 'center' }}
                                >
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444', opacity: 0.6 }} />
                                    <p style={{ color: 'rgba(255, 255, 255, 0.3)', fontSize: '1rem', fontWeight: 300, margin: 0 }}>
                                        {item}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: After */}
                    <div style={{
                        padding: '60px 50px',
                        background: 'rgba(59, 130, 246, 0.02)',
                        position: 'relative'
                    }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginBottom: '40px',
                            padding: '6px 14px',
                            background: 'rgba(34, 197, 94, 0.1)',
                            border: '1px solid rgba(34, 197, 94, 0.2)',
                            borderRadius: '100px'
                        }}>
                            <Plus size={14} color="#22c55e" />
                            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                Después (con Arealyst)
                            </span>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            {afterList.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        style={{ display: 'flex', gap: '20px', alignItems: 'center' }}
                                    >
                                        <div style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '12px',
                                            background: 'rgba(34, 197, 94, 0.1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                            border: '1px solid rgba(34, 197, 94, 0.2)'
                                        }}>
                                            <Icon size={18} color="#22c55e" />
                                        </div>
                                        <p style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 400, margin: 0 }}>
                                            {item.text}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ marginTop: '60px', textAlign: 'center' }}
                >
                    <p style={{ color: 'rgba(255, 255, 255, 0.3)', fontSize: '0.9rem', fontWeight: 300 }}>
                        No es solo software, es una nueva forma de hacer negocios.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default BeforeAfter;

