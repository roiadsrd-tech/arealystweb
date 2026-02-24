import React from 'react';
import { motion } from 'framer-motion';

const WhySection = () => {
    return (
        <section id="why" style={{
            backgroundColor: '#000',
            padding: '240px 20px',
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div style={{ maxWidth: '1000px', width: '100%', display: 'flex', flexDirection: 'column', gap: '200px' }}>

                {/* Block 1 */}
                <motion.div
                    initial={{ opacity: 0.2, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ willChange: 'transform, opacity' }}
                >
                    <h2 style={{
                        fontSize: 'clamp(2.1rem, 5.5vw, 4.6rem)',
                        fontWeight: 500,
                        lineHeight: 1.3,
                        color: '#fff',
                        letterSpacing: '-0.03em',
                        textAlign: 'left'
                    }}>
                        Pusiste anuncios en Instagram.<br />
                        <span style={{ color: 'rgba(255,255,255,0.4)' }}>Los interesados llegan.</span><br />
                        El celular explota.
                    </h2>
                </motion.div>

                {/* Block 2 */}
                <motion.div
                    initial={{ opacity: 0.2, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ willChange: 'transform, opacity' }}
                >
                    <h2 style={{
                        fontSize: 'clamp(2.1rem, 5.5vw, 4.2rem)',
                        fontWeight: 500,
                        lineHeight: 1.3,
                        color: 'rgba(255,255,255,0.4)',
                        letterSpacing: '-0.03em',
                        textAlign: 'left'
                    }}>
                        Intentas responderle a todos...<br />
                        <span style={{ color: '#fff' }}>pero nunca te pones al día.</span><br />
                        Le contestas a uno y entran 5 más.
                    </h2>
                </motion.div>

                {/* Block 3 */}
                <motion.div
                    initial={{ opacity: 0.2, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ willChange: 'transform, opacity' }}
                >
                    <h2 style={{
                        fontSize: 'clamp(2.1rem, 5.5vw, 4.2rem)',
                        fontWeight: 500,
                        lineHeight: 1.3,
                        color: 'rgba(255,255,255,0.4)',
                        letterSpacing: '-0.03em',
                        textAlign: 'left'
                    }}>
                        Mientras estás con tu familia...<br />
                        <span style={{ color: '#fff' }}>alguien más responde primero</span><br />
                        y se queda con tu cliente.
                    </h2>
                </motion.div>

                {/* Conclusion */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20% 0px -10% 0px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    style={{ willChange: 'transform, opacity', marginTop: '100px' }}
                >
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 6.5vw, 5.4rem)',
                        fontWeight: 500,
                        lineHeight: 1.2,
                        color: 'rgba(255,255,255,0.3)',
                        letterSpacing: '-0.03em',
                        textAlign: 'left'
                    }}>
                        No estás perdiendo por falta de ganas.<br />
                        <span style={{
                            fontWeight: 500,
                            background: 'linear-gradient(90deg, #fff 0%, var(--accent-color, #3b82f6) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>Estás perdiendo por falta de un sistema.</span>
                    </h2>
                </motion.div>

            </div>
        </section>
    );
};

export default WhySection;
