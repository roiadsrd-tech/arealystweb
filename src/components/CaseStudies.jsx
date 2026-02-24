
import React from 'react';
import { motion } from 'framer-motion';

const cases = [
    {
        title: "Transforming At-Home Care",
        category: "CASE STUDY",
        description: "Building an AI-first platform for Australia's largest aged care provider.",
        image: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Industrial Distribution",
        category: "CASE STUDY",
        description: "Architecting a multi-agent system for a global leader in supply chain.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Basketball Operations",
        category: "CASE STUDY",
        description: "Automating professional player scouting with machine learning.",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800"
    }
];

const CaseStudies = () => {
    return (
        <section id="work">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '16px', fontWeight: 400 }}>Our Work</h2>
                    <p className="text-secondary" style={{ marginBottom: '60px', color: '#EDECE4', fontSize: '1.2rem' }}>We partner with leaders to build the future of their industries.</p>
                </motion.div>

                <div className="flex flex-col md-flex" style={{ gap: '30px' }}>
                    {cases.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            style={{ flex: 1, cursor: 'pointer' }}
                        >
                            <div style={{
                                borderRadius: '32px',
                                overflow: 'hidden',
                                marginBottom: '24px',
                                height: '400px',
                                position: 'relative',
                                border: '1px solid rgba(255, 255, 255, 0.05)'
                            }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>
                            <div style={{ padding: '0 10px' }}>
                                <span style={{ fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.1em', color: 'var(--accent-color)', display: 'block', marginBottom: '12px' }}>{project.category}</span>
                                <h3 style={{ fontSize: '1.75rem', marginBottom: '16px', fontWeight: 400 }}>{project.title}</h3>
                                <p className="text-secondary" style={{ fontSize: '1.1rem', color: '#EDECE4' }}>{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
