import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, Zap, Calendar, Plus, Camera, Mic, ChevronLeft, Video, Phone, ArrowRight, Clock, Shield, Database, Brain } from 'lucide-react';
import iphoneFrame from '../assets/iphone1.avif';
import arelyProfile from '../assets/arely.jpg';
import whatsBg from '../assets/whats.png';
import bgFull1 from '../assets/bg_full_1.jpg';
import bg2New from '../assets/bg2_new.jpg';

const ArealystAgent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const iphoneVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0, opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff', overflowX: 'hidden' }}>
            <Navbar />

            {/* HERO SECTION WITH BACKGROUND */}
            <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px', paddingBottom: '100px' }}>
                {/* Background Image Container */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    backgroundImage: `url(${bgFull1})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', zIndex: 0, opacity: 0.5
                }} />
                {/* Gradient Overlay to fade smoothly into the black page below */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 70%, #000 100%)', zIndex: 1
                }} />

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    style={{ position: 'relative', zIndex: 2, maxWidth: '1000px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}
                >
                    <motion.div variants={itemVariants} style={{ display: 'inline-block', padding: '8px 16px', borderRadius: '100px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '32px' }}>
                        <span style={{ fontSize: '0.9rem', color: '#fff', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Tu Recepcionista Digital 24/7</span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} style={{
                        fontSize: 'clamp(3.5rem, 8vw, 6rem)', marginBottom: '32px', lineHeight: 1.05, letterSpacing: '-0.03em'
                    }}>
                        El agente que <br />
                        <span style={{ background: 'linear-gradient(90deg, #fff 0%, #0085FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            nunca duerme.
                        </span>
                    </motion.h1>

                    <motion.div variants={itemVariants} style={{ maxWidth: '650px', margin: '0 auto' }}>
                        <p style={{ fontSize: '1.4rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.5, marginBottom: '40px' }}>
                            Mientras tú descansas, el Arealyst Agent <strong style={{ color: '#fff' }}>responde</strong>. Mientras tu equipo está ocupado, él <strong style={{ color: '#fff' }}>agenda</strong>. Mientras otros tardan, tú <strong style={{ color: '#fff' }}>conviertes</strong>.
                        </p>
                        <a href="/#demo" className="btn btn-primary">
                            VER DEMO EN VIVO <span>›</span>
                        </a>
                    </motion.div>
                </motion.div>
            </div>


            {/* HOW IT WORKS W/ IPHONE (Cleaner integration, removed heavy boxes) */}
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '100px 24px', position: 'relative' }}>

                {/* Soft ambient glow behind phone */}
                <div style={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: '600px', height: '600px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0, 133, 255, 0.1) 0%, transparent 60%)', filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none'
                }} />

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1, position: 'relative' }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '700px' }}>
                        <h2 style={{ fontSize: '3rem', marginBottom: '24px', letterSpacing: '-0.02em' }}>
                            Conversaciones fluidas.<br />
                            <span style={{ color: '#0085FF' }}>Citas automáticas.</span>
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.6 }}>
                            No es un bot viejo con respuestas rígidas. Habla natural, entiende el contexto, pide datos y agenda en tu calendario en segundos.
                        </p>
                    </motion.div>

                    {/* INTERACTIVE IPHONE MOCKUP */}
                    <motion.div variants={iphoneVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} style={{ position: 'relative', width: '320px', height: '640px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={iphoneFrame} alt="iPhone Frame" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'contain', zIndex: 2, pointerEvents: 'none' }} />

                        <div style={{ width: '282px', height: '606px', backgroundColor: '#0b141a', backgroundImage: `url(${whatsBg})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '40px', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'absolute', top: '17px', zIndex: 1, padding: '0 8px 8px' }}>
                            {/* WhatsApp Header */}
                            <div style={{ background: '#202c33', zIndex: 20, position: 'relative', paddingTop: '54px', paddingBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '12px', paddingRight: '12px' }}>
                                <ChevronLeft size={20} color="#0A84FF" />
                                <div style={{ width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden', background: '#333' }}>
                                    <img src={arelyProfile} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: '13px', color: '#fff' }}>Arealyst Agent</div>
                                </div>
                                <Video size={18} color="#0A84FF" style={{ marginRight: '10px' }} />
                                <Phone size={18} color="#0A84FF" />
                            </div>

                            {/* Chat Messages */}
                            <div style={{ flex: 1, padding: '16px 8px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {[
                                    { type: 'user', text: 'Hola, quiero agendar cita', time: '10:03 AM', delay: 0.5 },
                                    { type: 'agent', text: '¡Hola! Claro que sí. ¿Para qué servicio te gustaría?', time: '10:03 AM', delay: 1.5 },
                                    { type: 'user', text: 'Limpieza dental por favor', time: '10:04 AM', delay: 3.5 },
                                    { type: 'agent', text: 'Perfecto. Tengo espacio mañana a las 4pm. ¿Te funciona?', time: '10:04 AM', delay: 4.5 },
                                    { type: 'card', text: 'Cita Agendada', time: '10:05 AM', delay: 6.5 }
                                ].map((msg, i) => (
                                    <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: msg.delay, duration: 0.4 }} style={{ alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start', maxWidth: '85%', width: msg.type === 'card' ? '100%' : 'auto' }}>
                                        {msg.type === 'card' ? (
                                            <div style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '12px', padding: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                <div style={{ background: '#3b82f6', borderRadius: '8px', padding: '6px' }}><Calendar size={16} color="#fff" /></div>
                                                <div>
                                                    <div style={{ fontSize: '10px', color: '#3b82f6', textTransform: 'uppercase' }}>Confirmado</div>
                                                    <div style={{ fontSize: '13px', color: '#fff' }}>Mañana, 4:00 PM</div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div style={{ background: msg.type === 'user' ? '#005c4b' : '#202c33', padding: '10px 14px', borderRadius: '16px', borderTopRightRadius: msg.type === 'user' ? '4px' : '16px', borderTopLeftRadius: msg.type === 'agent' ? '4px' : '16px', color: '#fff', fontSize: '13px', lineHeight: 1.4 }}>
                                                {msg.text}
                                                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', textAlign: 'right', marginTop: '4px' }}>{msg.time}</div>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            <div style={{ background: '#202c33', padding: '8px 10px 20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Plus size={20} color="#0A84FF" />
                                <div style={{ flex: 1, height: '36px', background: '#2a3942', borderRadius: '18px' }} />
                                <Camera size={20} color="#0A84FF" />
                                <Mic size={20} color="#0A84FF" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>


            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 768px) {
                    .impact-grid {
                        grid-template-columns: 1fr !important;
                        gap: 40px !important;
                        text-align: center !important;
                    }
                    .impact-grid > div {
                        order: 0 !important;
                    }
                    .impact-grid h2 {
                        font-size: 2.2rem !important;
                    }
                }
                `
            }} />

            {/* THE IMPACT SECTION W/ BACKGROUND */}
            <div style={{ position: 'relative', padding: '140px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    backgroundImage: `url(${bg2New})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3, zIndex: 0
                }} />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, #000 0%, transparent 50%, #000 100%)', zIndex: 1 }} />

                <div style={{ position: 'relative', zIndex: 2, maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '120px' }}>

                    {/* Impact 1: Speed */}
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="impact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em' }}>
                                Respuesta inmediata.<br />
                                <span style={{ color: '#0085FF' }}>Más ventas.</span>
                            </h2>
                            <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, marginBottom: '24px' }}>
                                El <strong style={{ color: '#fff' }}>78%</strong> de los leads nunca responden si tardas más de 10 minutos. El Agent responde en segundos.
                            </p>
                            <p style={{ fontSize: '1.2rem', color: '#fff' }}>Eso cambia todo.</p>
                        </div>
                        <div style={{ position: 'relative', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', padding: '40px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ marginBottom: '30px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>
                                    <span>Humano</span>
                                    <span>~15 min</span>
                                </div>
                                <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '100%' }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 2, ease: "easeOut" }}
                                        style={{ height: '100%', background: 'rgba(255,255,255,0.3)', width: '80%' }}
                                    />
                                </div>
                                <div style={{ fontSize: '0.8rem', color: '#ff4d4d', marginTop: '8px' }}>⚠️ 78% De Probabilidades de Perder el Lead</div>
                            </div>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.9rem', color: '#0085FF', fontWeight: 600 }}>
                                    <span>Arealyst Agent</span>
                                    <span>~5 seg</span>
                                </div>
                                <div style={{ height: '8px', background: 'rgba(0,133,255,0.1)', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 0 15px rgba(0,133,255,0.3)' }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '15%' }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                                        style={{ height: '100%', background: '#0085FF' }}
                                    />
                                </div>
                                <div style={{ fontSize: '0.8rem', color: '#0085FF', marginTop: '8px', fontWeight: 600 }}>✅ Máxima Retención y Conversión</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Impact 2: Persistence */}
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="impact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                        <div style={{ order: 2 }}>
                            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em' }}>
                                Seguimiento<br />
                                <span style={{ color: '#fff' }}>automático.</span>
                            </h2>
                            <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, marginBottom: '24px' }}>
                                El <strong style={{ color: '#fff' }}>80%</strong> de las ventas ocurren después del 5º contacto. La mayoría de los humanos se rinde en el 2º.
                            </p>
                            <p style={{ fontSize: '1.2rem', color: '#fff' }}>
                                El Agent cierra donde otros abandonan.
                            </p>
                        </div>
                        <div style={{ order: 1, background: 'rgba(255,255,255,0.03)', borderRadius: '24px', padding: '40px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '40px' }}>
                            <div style={{ fontSize: '1.1rem', fontWeight: 500, color: '#fff', textAlign: 'center' }}>Capacidad de Seguimiento</div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                {/* Human Bar */}
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '1rem', color: 'rgba(255,255,255,0.5)' }}>
                                        <span>Equipo Humano</span>
                                        <span>~ 2 intentos</span>
                                    </div>
                                    <div style={{ height: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px', overflow: 'hidden' }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '25%' }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, ease: "easeOut" }}
                                            style={{ height: '100%', background: 'rgba(255,255,255,0.3)' }}
                                        />
                                    </div>
                                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: '8px' }}>El 80% de los vendedores dejan de intentar aquí.</div>
                                </div>

                                {/* Agent Bar */}
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '1rem', color: '#0085FF', fontWeight: 600 }}>
                                        <span>Arealyst Agent</span>
                                        <span>Ilimitados</span>
                                    </div>
                                    <div style={{ height: '12px', background: 'rgba(0,133,255,0.1)', borderRadius: '6px', overflow: 'hidden', boxShadow: '0 0 15px rgba(0,133,255,0.2)' }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '100%' }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            style={{ height: '100%', background: '#0085FF' }}
                                        />
                                    </div>
                                    <div style={{ fontSize: '0.8rem', color: '#0085FF', marginTop: '8px', fontWeight: 500 }}>Nunca se olvida. Nunca se rinde.</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Impact 3: Knowledge & Naturality */}
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="impact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em' }}>
                                Inteligencia local.<br />
                                <span style={{ color: '#0085FF' }}>Voz dominicana.</span>
                            </h2>
                            <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, marginBottom: '24px' }}>
                                Entrenamos al Agent con los datos específicos de <strong style={{ color: '#fff' }}>tu empresa</strong>. Además, habla tan natural como <strong style={{ color: '#fff' }}>un humano dominicano</strong>, entendiendo cada modismo y contexto.
                            </p>
                            <p style={{ fontSize: '1.2rem', color: '#fff' }}>No es un bot, es tu mejor vendedor.</p>
                        </div>
                        <div style={{ position: 'relative', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', padding: '40px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {/* Data Sources */}
                                <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                                    {[Database, Calendar, MessageSquare].map((Icon, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.2 }}
                                            style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', color: 'rgba(255,255,255,0.4)' }}
                                        >
                                            <Icon size={24} />
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Connection lines */}
                                <div style={{ height: '40px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: '100%' }}
                                        transition={{ duration: 1 }}
                                        style={{ width: '2px', background: 'linear-gradient(to bottom, transparent, #0085FF)', opacity: 0.5 }}
                                    />
                                </div>

                                {/* The Brain */}
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <motion.div
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        style={{ padding: '25px', background: 'rgba(0,133,255,0.1)', borderRadius: '50%', color: '#0085FF', boxShadow: '0 0 30px rgba(0,133,255,0.2)' }}
                                    >
                                        <Brain size={40} />
                                    </motion.div>
                                </div>

                                {/* The Output */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1, duration: 0.5 }}
                                    style={{ background: '#0085FF', padding: '12px 18px', borderRadius: '18px 18px 0 18px', alignSelf: 'center', marginTop: '10px', maxWidth: '80%' }}
                                >
                                    <span style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 500 }}>"¡Claro! Déjame chequearte eso ahora mismo..."</span>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>


            {/* HUMAN + AI SYNERGY (Clean typography, no boxes) */}
            <div style={{ maxWidth: '900px', margin: '0 auto', padding: '140px 24px', textAlign: 'center' }}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                    <Shield size={48} color="rgba(255,255,255,0.5)" style={{ marginBottom: '32px' }} strokeWidth={1.5} />
                    <h2 style={{ fontSize: '3rem', marginBottom: '40px', letterSpacing: '-0.02em' }}>¿Reemplaza a mi equipo?</h2>

                    <div style={{ fontSize: '1.4rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <p>No.</p>
                        <p>
                            Automatiza lo repetitivo: responder lo mismo 100 veces, confirmar horarios y pedir datos básicos.
                        </p>
                        <p>
                            Tu equipo entra cuando la conversación requiere de una decisión humana. Si la pregunta es muy compleja, el Agent delega la charla.
                        </p>
                        <p style={{ color: '#0085FF', fontSize: '1.6rem', marginTop: '20px' }}>
                            La IA filtra. El humano cierra.
                        </p>
                    </div>
                </motion.div>
            </div>


            {/* TEXT FINALE */}
            <div style={{ padding: '100px 24px 180px', textAlign: 'center' }}>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.1, marginBottom: '40px', letterSpacing: '-0.02em' }}>
                        No es un chatbot.<br />
                        <span style={{ background: 'linear-gradient(90deg, #fff 0%, #0085FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Es un sistema de conversión.</span>
                    </h2>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <a href="/#demo" className="btn btn-primary">
                            VER DEMO EN VIVO <span>›</span>
                        </a>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

export default ArealystAgent;
