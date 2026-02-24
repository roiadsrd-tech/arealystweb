
import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    return (
        <section style={{ overflow: 'hidden' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    style={{
                        padding: '100px 40px',
                        textAlign: 'center',
                        borderRadius: '60px',
                        background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.05) 0%, transparent 100%)',
                        border: '1px solid var(--border-color)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <p style={{ fontSize: 'clamp(1.5rem, 4vw, 2.8rem)', fontWeight: 400, maxWidth: '1000px', margin: '0 auto 48px auto', lineHeight: 1.3, color: '#FFFFFF' }}>
                        "They're not just builders, they're strategic partners. They understood our business goals and delivered an AI solution that far exceeded our expectations."
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                        <div style={{ fontWeight: 500, fontSize: '1.1rem' }}>Marita</div>
                        <div className="text-secondary" style={{ fontSize: '0.9rem', letterSpacing: '0.1em', fontWeight: 600, opacity: 0.6 }}>ASMUSS</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
