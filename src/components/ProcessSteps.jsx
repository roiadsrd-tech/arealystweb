import React from 'react';
import { motion } from 'framer-motion';

const ProcessSteps = () => {
    const steps = [
        {
            number: "01",
            title: "Analizamos tu proceso",
            description: "Vemos qué te preguntan, cómo agendas, y dónde se pierden los leads."
        },
        {
            number: "02",
            title: "Instalamos Arealyst",
            description: "Lo personalizamos con tu información, lo entrenamos y lo ponemos a funcionar."
        },
        {
            number: "03",
            title: "Mejoramos constantemente",
            description: "No lo dejamos solo. Revisamos resultados, ajustamos respuestas y mejoramos el sistema cada mes."
        }
    ];



    return (
        <section id="how-it-works" style={{ padding: '160px 0', position: 'relative', overflow: 'hidden', backgroundColor: '#000' }}>
            {/* Subtle Blue Circles Background */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                left: '-10%',
                width: '600px',
                height: '600px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0, 133, 255, 0.1) 0%, transparent 70%)',
                filter: 'blur(80px)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-20%',
                right: '-10%',
                width: '800px',
                height: '800px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
                filter: 'blur(100px)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, #000 0%, transparent 20%, transparent 80%, #000 100%)',
                zIndex: 1,
                pointerEvents: 'none'
            }} />

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 10 }}>
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @media (max-width: 768px) {
                        .process-steps-boxes {
                            margin-top: 180px !important;
                        }
                        .process-step-card {
                            background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%) !important;
                            border: 1px solid rgba(255, 255, 255, 0.08) !important;
                            border-top: 1px solid rgba(255, 255, 255, 0.15) !important;
                            border-left: 1px solid rgba(255, 255, 255, 0.12) !important;
                            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(59, 130, 246, 0.05) !important;
                            backdrop-filter: blur(20px) !important;
                            -webkit-backdrop-filter: blur(20px) !important;
                        }
                    }
                    `
                }} />
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '80px', alignItems: 'start' }} className="process-grid">

                    {/* Left Column: Title Area */}
                    <div style={{ position: 'sticky', top: '160px' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
                            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div style={{
                                color: '#60A5FA',
                                fontSize: '1.2rem',
                                fontWeight: 700,
                                marginBottom: '24px',
                                letterSpacing: '0.1em'
                            }}>
                                Proceso Simple
                            </div>
                            <h2 style={{
                                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                                fontWeight: 400,
                                marginBottom: '32px',
                                color: '#fff',
                                lineHeight: 1.1,
                                letterSpacing: '-0.03em',
                                textShadow: '0 10px 40px rgba(0,0,0,0.5)'
                            }}>
                                Cómo <span style={{ color: '#fff' }}>funciona</span>
                            </h2>
                            <p style={{
                                fontSize: '1.2rem',
                                color: 'rgba(255, 255, 255, 0.7)',
                                lineHeight: 1.6,
                                fontWeight: 400
                            }}>
                                En menos de 7 días, tu sistema de inteligencia artificial estará listo para atender a cada cliente al instante. Cero complicaciones para ti.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Steps Timeline */}
                    <div className="process-steps-boxes" style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '40px' }}>
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="process-step-card"
                                initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 1.2, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.02)',
                                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                                    borderBottom: '1px solid rgba(255, 255, 255, 0.01)',
                                    borderLeft: '1px solid rgba(255, 255, 255, 0.03)',
                                    borderRight: '1px solid rgba(255, 255, 255, 0.03)',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                                    borderRadius: '24px',
                                    padding: '36px 40px',
                                    position: 'relative',
                                    backdropFilter: 'blur(30px)',
                                    WebkitBackdropFilter: 'blur(30px)',
                                    overflow: 'hidden'
                                }}
                            >
                                {/* Abstract Number Accent */}
                                <div style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '32px',
                                    fontSize: '5rem',
                                    fontWeight: 900,
                                    color: 'rgba(255, 255, 255, 0.15)',
                                    lineHeight: 1,
                                    pointerEvents: 'none',
                                    userSelect: 'none',
                                    zIndex: 0
                                }}>
                                    {step.number}
                                </div>

                                <div style={{ position: 'relative', zIndex: 1 }}>
                                    <h3 style={{ fontSize: '1.6rem', fontWeight: 500, color: '#fff', margin: '0 0 16px 0', letterSpacing: '-0.02em' }}>
                                        {step.title}
                                    </h3>

                                    {index === 2 ? (
                                        <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.05rem', fontWeight: 400, lineHeight: 1.6, margin: 0 }}>
                                            No lo dejamos solo. <span style={{ color: '#fff', fontWeight: 500 }}>Revisamos resultados, ajustamos respuestas y mejoramos el sistema cada mes.</span>
                                        </p>
                                    ) : (
                                        <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.05rem', fontWeight: 400, lineHeight: 1.6, margin: 0 }}>
                                            {step.description}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
            {/* Inline styles for grid responsiveness */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 900px) {
                    .process-grid {
                        grid-template-columns: 1fr !important;
                        gap: 40px !important;
                    }
                }
            `}} />
        </section>
    );
};

export default ProcessSteps;
