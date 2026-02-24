import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { MessageSquare, Layout, Calendar, Zap, Database, Users, BarChart3, TrendingUp, X, Check } from 'lucide-react';

const ArealystSystem = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff', overflowX: 'hidden' }}>
            <Navbar />

            {/* Atmosphere Glow */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '80vh',
                background: 'linear-gradient(180deg, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0) 100%)',
                filter: 'blur(60px)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{ paddingTop: '180px', paddingBottom: '120px', position: 'relative', zIndex: 1 }}
            >
                {/* Hero Section */}
                <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px', textAlign: 'center', marginBottom: '160px' }}>
                    <motion.div variants={itemVariants}>
                        <h1
                            style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                fontWeight: 400,
                                marginBottom: '24px',
                                lineHeight: 1.1,
                                letterSpacing: '-0.02em'
                            }}
                        >
                            El centro de control de<br />
                            <span style={{ color: '#3B82F6', fontWeight: 400 }}>tu negocio</span>
                        </h1>

                        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                            <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.5)', lineHeight: 1.6, fontWeight: 300 }}>
                                Si el Arealyst Agent convierte conversaciones en citas, el Arealyst System organiza todo lo que pasa después. Sin depender de memoria, libretas o Excel.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Features Section */}
                <div style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '160px', padding: '0 24px' }}>

                    {/* Feature 1: Inbox */}
                    <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '80px', alignItems: 'center', marginBottom: '120px' }}>
                        <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
                            <div style={{ marginBottom: '20px' }}>
                                <MessageSquare size={24} color="#3B82F6" strokeWidth={1.5} />
                            </div>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: 400, marginBottom: '20px', letterSpacing: '-0.01em' }}>Inbox Unificado</h3>
                            <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.5)', lineHeight: 1.6, fontWeight: 300 }}>
                                Todos tus mensajes llegan a un solo panel. Instagram, WhatsApp, Facebook y Web en un solo ecosistema ordenado. El fin de las conversaciones perdidas.
                            </p>
                        </div>
                        <div style={{ flex: '2 1 500px', height: '360px', background: '#050505', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', overflow: 'hidden' }}>
                            {/* Inbox Mockup */}
                            <div style={{ width: '220px', borderRight: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ padding: '20px', fontSize: '0.8rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Mensajes</div>
                                <div style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.02)', borderLeft: '2px solid #3B82F6' }}>
                                    <div style={{ fontSize: '0.85rem', fontWeight: 400, color: '#fff' }}>Carlos Mendoza</div>
                                    <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>Instagram</div>
                                </div>
                                <div style={{ padding: '16px 20px' }}>
                                    <div style={{ fontSize: '0.85rem', fontWeight: 400, color: 'rgba(255,255,255,0.6)' }}>Sofia Rivera</div>
                                    <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>WhatsApp</div>
                                </div>
                            </div>
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ fontSize: '0.85rem', fontWeight: 400, color: '#fff' }}>Carlos Mendoza</div>
                                    <div style={{ fontSize: '0.7rem', color: '#3B82F6', fontWeight: 300 }}>Agent Activo</div>
                                </div>
                                <div style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    <div style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.05)', padding: '12px 16px', borderRadius: '12px', borderTopLeftRadius: '4px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', fontWeight: 300, maxWidth: '80%' }}>
                                        ¿Tienen disponibilidad este jueves a las 3pm?
                                    </div>
                                    <div style={{ alignSelf: 'flex-end', background: '#3B82F6', padding: '12px 16px', borderRadius: '12px', borderTopRightRadius: '4px', fontSize: '0.85rem', color: '#fff', fontWeight: 300, maxWidth: '80%' }}>
                                        ¡Hola Carlos! Sí, tenemos un espacio disponible. ¿Te lo reservo a ese nombre?
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature 2: Pipeline */}
                    <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '80px', alignItems: 'center', marginBottom: '120px', flexDirection: 'row-reverse' }}>
                        <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
                            <div style={{ marginBottom: '20px' }}>
                                <Layout size={24} color="#3B82F6" strokeWidth={1.5} />
                            </div>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: 400, marginBottom: '20px', letterSpacing: '-0.01em' }}>Pipeline de Leads</h3>
                            <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.5)', lineHeight: 1.6, fontWeight: 300 }}>
                                Cada contacto entra en un flujo Kanban claro y visual. Identifica quién está caliente, quién necesita seguimiento y quién cerró, todo de un vistazo.
                            </p>
                        </div>
                        <div style={{ flex: '2 1 500px', height: '360px', background: '#050505', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', padding: '30px', display: 'flex', flexDirection: 'column' }}>
                            {/* Pipeline Mockup */}
                            <div style={{ display: 'flex', gap: '20px', flex: 1 }}>
                                {['Nuevos', 'En Proceso', 'Citas'].map((col, i) => (
                                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                        <div style={{ fontSize: '0.75rem', fontWeight: 500, color: 'rgba(255,255,255,0.6)', paddingBottom: '12px', borderBottom: i === 0 ? '1px solid #3B82F6' : '1px solid rgba(255,255,255,0.1)' }}>
                                            {col}
                                        </div>
                                        {[1, 2].map((_, j) => (
                                            (i !== 2 || j === 0) && (
                                                <div key={j} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '16px', borderRadius: '8px' }}>
                                                    <div style={{ background: 'rgba(255,255,255,0.1)', height: '4px', width: '40%', borderRadius: '2px', marginBottom: '12px' }} />
                                                    <div style={{ background: 'rgba(255,255,255,0.05)', height: '4px', width: '70%', borderRadius: '2px' }} />
                                                </div>
                                            )
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature 3: Calendar */}
                    <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '80px', alignItems: 'center', marginBottom: '120px' }}>
                        <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
                            <div style={{ marginBottom: '20px' }}>
                                <Calendar size={24} color="#3B82F6" strokeWidth={1.5} />
                            </div>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: 400, marginBottom: '20px', letterSpacing: '-0.01em' }}>Calendario Inteligente</h3>
                            <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.5)', lineHeight: 1.6, fontWeight: 300 }}>
                                Integrado directamente con el Arealyst Agent. Las citas se bloquean, los recordatorios se envían solos y tu equipo se mantiene sincronizado. Todo sin mover un dedo.
                            </p>
                        </div>
                        <div style={{ flex: '2 1 500px', height: '360px', background: '#050505', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                            {/* Calendar Mockup */}
                            <div style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', fontWeight: 400 }}>Octubre 2024</div>
                                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>Ver Mes</div>
                            </div>
                            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 0 }}>
                                {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d, i) => (
                                    <div key={i} style={{ padding: '12px', textAlign: 'center', fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', fontWeight: 300, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{d}</div>
                                ))}
                                {[...Array(28)].map((_, i) => (
                                    <div key={i} style={{ padding: '8px', borderRight: '1px solid rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                                        <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>{i + 1}</div>
                                        {i === 12 && (
                                            <div style={{ marginTop: '8px', background: 'rgba(59, 130, 246, 0.15)', borderLeft: '2px solid #3B82F6', padding: '4px', fontSize: '0.65rem', color: 'rgba(59, 130, 246, 0.9)', fontWeight: 400 }}>
                                                10:30 Cita
                                            </div>
                                        )}
                                        {i === 15 && (
                                            <div style={{ marginTop: '8px', background: 'rgba(255, 255, 255, 0.05)', borderLeft: '2px solid rgba(255, 255, 255, 0.4)', padding: '4px', fontSize: '0.65rem', color: 'rgba(255, 255, 255, 0.6)', fontWeight: 400 }}>
                                                14:00 Rev
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature 4: Automations */}
                    <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '80px', alignItems: 'center', flexDirection: 'row-reverse' }}>
                        <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
                            <div style={{ marginBottom: '20px' }}>
                                <Zap size={24} color="#3B82F6" strokeWidth={1.5} />
                            </div>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: 400, marginBottom: '20px', letterSpacing: '-0.01em' }}>Flujos y Retargeting</h3>
                            <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.5)', lineHeight: 1.6, fontWeight: 300 }}>
                                Diseña secuencias silenciosas. Reactiva leads antiguos y lanza recordatorios automáticos sin intervención manual. La infraestructura trabaja de fondo.
                            </p>
                        </div>
                        <div style={{ flex: '2 1 500px', height: '360px', background: '#050505', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
                            {/* Grid Background */}
                            <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundSize: '30px 30px', backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)' }} />

                            {/* Automation Nodes */}
                            <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
                                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 24px', borderRadius: '8px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', fontWeight: 300 }}>
                                    Nueva Cita Agendada
                                </div>
                                <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)' }} />
                                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 24px', borderRadius: '8px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}>
                                    Esperar 24h
                                </div>
                                <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)' }} />
                                <div style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', padding: '12px 24px', borderRadius: '8px', fontSize: '0.8rem', color: '#3B82F6', fontWeight: 400 }}>
                                    Enviar Recordatorio por WhatsApp
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Sub Features Grid */}
                <div style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '160px', padding: '0 24px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>

                        <motion.div variants={itemVariants} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '40px' }}>
                            <Database size={20} color="#3B82F6" strokeWidth={1.5} style={{ marginBottom: '24px' }} />
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '16px' }}>Base de Datos</h3>
                            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, fontWeight: 300 }}>
                                Historial íntegro de conversaciones, notas internas y estado de cada cliente. Organizado y accesible en un clic.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '40px' }}>
                            <Users size={20} color="#3B82F6" strokeWidth={1.5} style={{ marginBottom: '24px' }} />
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '16px' }}>Gestión de Equipo</h3>
                            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, fontWeight: 300 }}>
                                Agrega usuarios, delimita accesos y asigna conversaciones. Mantén el control de quién hace qué dentro de la plataforma.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '40px' }}>
                            <BarChart3 size={20} color="#3B82F6" strokeWidth={1.5} style={{ marginBottom: '24px' }} />
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '16px' }}>Analítica Precisa</h3>
                            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, fontWeight: 300 }}>
                                Transparencia total. Métricas de leads entrantes, volumen de citas generadas y ratios de conversión del Agent.
                            </p>
                        </motion.div>

                    </div>
                </div>

                {/* Before / After */}
                <div style={{ maxWidth: '1000px', margin: '0 auto', marginBottom: '160px', padding: '0 24px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>

                        <motion.div variants={itemVariants} style={{ padding: '40px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)', borderRadius: '16px' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '32px', color: 'rgba(255,255,255,0.6)', fontWeight: 400 }}>La Vía Tradicional</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {['Mensajes dispersos en distintas apps.', 'Seguimiento dependiente de memoria.', 'Citas olvidadas o no confirmadas.', 'El equipo no sabe qué está pasando.'].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                        <div style={{ marginTop: '2px' }}><X size={16} color="rgba(255,255,255,0.3)" /></div>
                                        <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.4)', fontWeight: 300, lineHeight: 1.5 }}>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} style={{ padding: '40px', background: 'rgba(59, 130, 246, 0.03)', border: '1px solid rgba(59, 130, 246, 0.1)', borderRadius: '16px' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '32px', color: '#fff', fontWeight: 400 }}>Con Arealyst System</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {['Todos los canales en un solo panel.', 'Seguimiento sistematizado y visual.', 'Agenda y recordatorios automáticos.', 'Visibilidad clara para todo el equipo.'].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                        <div style={{ marginTop: '2px' }}><Check size={16} color="#3B82F6" /></div>
                                        <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.8)', fontWeight: 300, lineHeight: 1.5 }}>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>

                {/* Final CTA */}
                <motion.div variants={itemVariants} style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '0 24px' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 400, marginBottom: '24px', letterSpacing: '-0.01em' }}>Estructura para Escalar.</h2>
                    <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.5)', lineHeight: 1.6, marginBottom: '40px', fontWeight: 300 }}>
                        Arealyst System te permite operar como una empresa sólida, eliminando el caos que frena el crecimiento de tu clínica o negocio.
                    </p>
                    <a href="/#demo" style={{
                        display: 'inline-block',
                        padding: '14px 32px',
                        fontSize: '0.95rem',
                        fontWeight: 400,
                        background: '#fff',
                        color: '#000',
                        borderRadius: '8px',
                        textDecoration: 'none'
                    }}>
                        Ver Integración
                    </a>
                </motion.div>

            </motion.div>

            <Footer />
        </div>
    );
};

export default ArealystSystem;
