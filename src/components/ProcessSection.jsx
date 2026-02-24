
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        num: "1",
        title: "Identify",
        description: "Our days consist of finding the highest-leverage opportunities for AI in your business. We audit your workflows, identify bottlenecks, and map out the biggest wins."
    },
    {
        num: "2",
        title: "Develop",
        description: "We build custom AI solutions that solve real problems. No generic wrappers. We integrate directly into your stack with production-ready code."
    },
    {
        num: "3",
        title: "Adopt",
        description: "Tools are useless if nobody uses them. We stay until your team has adopted the technology and it’s actually delivering the ROI we promised."
    }
];

const ProcessSection = () => {
    return (
        <section id="services" style={{ padding: '140px 0' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    className="text-center"
                    style={{ marginBottom: '100px', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 400, lineHeight: 1.1 }}
                >
                    Our days consist of <span className="text-accent">three things...</span>
                </motion.h2>

                <div className="flex flex-col md-flex" style={{ gap: '40px', justifyContent: 'center' }}>
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            style={{
                                flex: '1',
                                minWidth: '300px',
                                padding: '80px 50px',
                                background: 'rgba(255, 255, 255, 0.02)',
                                borderRadius: '40px',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '32px',
                                position: 'relative'
                            }}
                        >
                            <div
                                className="text-accent"
                                style={{
                                    fontSize: '4.5rem',
                                    fontWeight: 500,
                                    lineHeight: 1,
                                    opacity: 1
                                }}
                            >
                                {step.num}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <h3 style={{ fontSize: '2rem', fontWeight: 400 }}>{step.title}</h3>
                                <p className="text-secondary" style={{ fontSize: '1.2rem', lineHeight: 1.6, color: '#EDECE4' }}>{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
