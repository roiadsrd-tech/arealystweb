
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Includes = () => {
    return (
        <section style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '80px' }}
                >
                    <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 300, marginBottom: '24px', color: '#fff', lineHeight: 1.1 }}>
                        Elige tu nivel de control
                    </h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', maxWidth: '1100px', margin: '0 auto' }}>
                    {/* Opción A */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ padding: '40px', borderRadius: '40px', border: '1px solid rgba(255, 255, 255, 0.1)', background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(10px)' }}
                    >
                        <h3 style={{ fontSize: '1.5rem', fontWeights: 500, color: '#fff', marginBottom: '16px' }}>Opción A — Arealyst Agent</h3>
                        <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontWeight: 300, marginBottom: '32px' }}>Para no dejar ningún mensaje sin atender.</p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <p style={{ fontSize: '12px', fontWeight: 500, color: '#0047FF', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>Incluye:</p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {[
                                    "Atención automática 24/7 en tus chats",
                                    "Respuestas a precio, horarios y servicios",
                                    "Recoge nombre y datos del cliente",
                                    "Agenda citas sola",
                                    "Te envía un email cada vez que se crea una nueva cita"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'start', gap: '16px' }}>
                                        <Check style={{ width: '20px', height: '20px', color: 'rgba(255, 255, 255, 0.4)', flexShrink: 0, marginTop: '4px' }} />
                                        <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: 300, lineHeight: 1.6, margin: 0 }}>{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Opción B */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ padding: '40px', borderRadius: '40px', border: '1px solid rgba(0, 71, 255, 0.3)', background: 'rgba(0, 71, 255, 0.05)', backdropFilter: 'blur(10px)', position: 'relative' }}
                    >
                        <div style={{ position: 'absolute', top: '32px', right: '32px', padding: '4px 12px', borderRadius: '100px', background: '#0047FF', color: '#fff', fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '0.1em' }}>
                            Recomendado
                        </div>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 500, color: '#fff', marginBottom: '16px' }}>Opción B — Arealyst Agent + Arealyst System</h3>
                        <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontWeight: 300, marginBottom: '32px' }}>Para tener control total de tus leads.</p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <p style={{ fontSize: '12px', fontWeight: 500, color: '#0047FF', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>Incluye todo lo anterior +:</p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {[
                                    "Todos tus mensajes (Instagram, WhatsApp...) en un solo inbox",
                                    "Chart visual por etapas para saber quién está listo para cerrar",
                                    "Calendario inteligente con confirmaciones y recordatorios automáticos",
                                    "Historial completo de cada cliente: conversaciones, citas y seguimiento",
                                    "Tu negocio organizado en un solo sistema"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'start', gap: '16px' }}>
                                        <Check style={{ width: '20px', height: '20px', color: '#0047FF', flexShrink: 0, marginTop: '4px' }} />
                                        <p style={{ color: '#fff', fontWeight: 300, lineHeight: 1.6, margin: 0 }}>{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                    style={{ textAlign: 'center', marginTop: '64px', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'rgba(255, 255, 255, 0.8)', fontWeight: 300 }}
                >
                    Pasas de solo responder… a tener <span style={{ color: '#0047FF', fontWeight: 500 }}>control completo</span>.
                </motion.p>
            </div>
        </section>
    );
};

export default Includes;
