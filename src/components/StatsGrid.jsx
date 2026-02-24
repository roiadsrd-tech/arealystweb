
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { value: "13.4m", label: "Views generated on YouTube" },
    { value: "90k+", label: "In our online community" },
    { value: "2,700+", label: "Empowered through programs" },
    { value: "48+", label: "Successful client engagements" },
    { value: "11+", label: "Industries served" }
];

const StatsGrid = () => {
    return (
        <section>
            <div className="container">
                <div className="flex flex-col md-flex" style={{ gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            style={{
                                flex: '1',
                                minWidth: '220px',
                                padding: '40px',
                                background: 'rgba(255, 255, 255, 0.02)',
                                borderRadius: '24px',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                textAlign: 'center'
                            }}
                        >
                            <div
                                className="text-accent"
                                style={{
                                    fontSize: '3.5rem',
                                    fontWeight: 500,
                                    marginBottom: '12px',
                                    background: 'linear-gradient(90deg, #fff 0%, var(--accent-color) 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}
                            >
                                {stat.value}
                            </div>
                            <div className="text-secondary" style={{ fontSize: '1rem', fontWeight: 400, color: '#EDECE4' }}>{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsGrid;
