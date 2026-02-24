import re

# Read Features.jsx for reference if needed, but we will just write the content below natively
# because we want to adapt the exact HTML structures.

content = """import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Calendar, MessageSquare, Users, CheckCircle2, Phone, Video, ChevronLeft, ChevronRight, Layout, Zap, Camera, Plus, Smile, Mic, Instagram, BarChart3 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Assets
import iphoneFrame from '../assets/iphone1.avif';
import arelyProfile from '../assets/arely.jpg';
import whatsBg from '../assets/whats.png';
import price1 from '../assets/price1.png';

const ComoFunciona = () => {
    // States for Step 2 User System
    const [activeSystemTab, setActiveSystemTab] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSystemTab(prev => (prev + 1) % 6);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const iphoneVariants = {
        hidden: { scale: 0.9, y: 30, opacity: 0, filter: "blur(10px)" },
        visible: { scale: 1, y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
    };

    const cardVariants = {
        hidden: { scale: 0.94, opacity: 0, filter: "blur(20px)", y: 30 },
        visible: { scale: 1, opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 } }
    };

    return (
        <div style={{ backgroundColor: '#000', minHeight: '100vh', fontFamily: 'var(--font-family)', color: '#fff' }}>
            <Navbar />

            {/* Header Section */}
            <div style={{
                padding: '160px 5% 80px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-20%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '800px',
                    height: '800px',
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }} />

                <h1 style={{
                    fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                    fontWeight: 400,
                    color: '#fff',
                    marginBottom: '32px',
                    letterSpacing: '-0.04em',
                    position: 'relative',
                    zIndex: 1
                }}>
                    Cómo funciona <span style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Arealyst</span>
                </h1>
                <p style={{
                    fontSize: '1.2rem',
                    color: 'rgba(255,255,255,0.6)',
                    maxWidth: '650px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 1,
                    fontWeight: 300,
                    lineHeight: 1.6
                }}>
                    Instalamos sistemas con IA para negocios que quieren responder más rápido y cerrar más ventas.
                </p>
            </div>

            {/* STEP 1: EL AGENT ATIENDE */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '20px', marginBottom: '200px', position: 'relative' }}>
                {/* Background Step Number */}
                <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', fontSize: 'clamp(15rem, 30vw, 40rem)', fontWeight: 900, color: 'rgba(255, 255, 255, 0.02)', lineHeight: 0.8, zIndex: 0, pointerEvents: 'none', userSelect: 'none' }}>1</div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0085FF', fontSize: '1rem', fontWeight: 600, marginBottom: '16px', letterSpacing: '0.1em', background: 'rgba(59, 130, 246, 0.1)', padding: '6px 16px', borderRadius: '20px' }}>
                        PASO 1
                    </div>
                    <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, color: '#fff', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                        El Agent <span style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>atiende</span>
                    </h3>
                    <p style={{ maxWidth: '600px', color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.6, fontWeight: 300 }}>
                        El Arealyst Agent responde en segundos usando la información real de tu negocio. Habla natural y agenda la cita automáticamente.
                    </p>
                </motion.div>

                <div style={{ position: 'relative', width: '100%', maxWidth: '1400px', height: '800px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10, marginTop: '40px' }}>
                    <div className="agent-features-wrapper" style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        
                        {/* LEFT COLUMN BENTOS */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'absolute', left: '0px', top: '50%', transform: 'translateY(-50%)', zIndex: 40 }}>
                            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ background: 'linear-gradient(to bottom, rgba(0, 133, 255, 0.12) 0%, rgba(5, 7, 20, 0.95) 100%)', backdropFilter: 'blur(40px)', border: '1px solid rgba(0, 133, 255, 0.2)', borderRadius: '32px', padding: '24px', width: '280px', height: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)' }}>
                                <div style={{ position: 'relative', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg width="160" height="90" viewBox="0 0 200 120">
                                        <path d="M40,100 A60,60 0 0,1 160,100" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" strokeLinecap="round" />
                                        <motion.path d="M40,100 A60,60 0 0,1 160,100" fill="none" stroke="url(#speedMiniGrad)" strokeWidth="10" strokeLinecap="round" strokeDasharray="188" animate={{ strokeDashoffset: [188, 30, 188] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
                                        <defs>
                                            <linearGradient id="speedMiniGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#0085FF" />
                                                <stop offset="100%" stopColor="#fff" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div style={{ position: 'absolute', bottom: '15px', textAlign: 'center' }}><div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.05em' }}>&lt;1s</div></div>
                                </div>
                                <div>
                                    <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px' }}>Responde en segundos</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', lineHeight: 1.4 }}>El cliente pregunta por precio, disponibilidad o quiere cita y obtiene respuesta inmediata.</p>
                                </div>
                            </motion.div>

                            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ background: 'linear-gradient(to bottom, rgba(0, 133, 255, 0.1) 0%, rgba(5, 7, 20, 0.95) 100%)', backdropFilter: 'blur(40px)', border: '1px solid rgba(0, 133, 255, 0.15)', borderRadius: '32px', padding: '24px', width: '280px', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(0, 133, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0, 133, 255, 0.2)' }}><Bot size={22} color="#0085FF" /></div>
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '2px' }}>Datos reales</h4>
                                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', lineHeight: 1.3 }}>Usa la información exacta de tu negocio para contestar.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* IPHONE MOCKUP EXACTLY FROM MAIN */}
                        <motion.div variants={iphoneVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} style={{ position: 'relative', width: '320px', height: '640px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10 }}>
                            <img src={iphoneFrame} alt="iPhone Frame" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'contain', zIndex: 2, pointerEvents: 'none' }} />
                            <div style={{ width: '282px', height: '604px', backgroundColor: '#0b141a', backgroundImage: `url(${whatsBg})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '42px', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'absolute', top: '18px', zIndex: 1, padding: '0 8px 8px' }}>
                                {/* Header */}
                                <div style={{ background: '#202c33', zIndex: 20, position: 'relative', paddingTop: '12px', paddingBottom: '8px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                    <div style={{ height: '44px', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ fontSize: '10px', fontWeight: 600, color: '#fff' }}>12:27</div>
                                        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}><div style={{ width: '14px', height: '8px', border: '1px solid #fff', borderRadius: '2px', position: 'relative' }}><div style={{ position: 'absolute', top: '1px', left: '1px', width: '8px', height: '4px', background: '#fff' }} /></div></div>
                                    </div>
                                    <div style={{ padding: '0 10px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <div style={{ color: '#0A84FF', display: 'flex', alignItems: 'center' }}><ChevronLeft size={22} /><div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}><img src={arelyProfile} alt="Arealyst Agent" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div></div>
                                        <div style={{ flex: 1, marginLeft: '4px' }}><div style={{ fontSize: '11px', fontWeight: 600, color: '#fff' }}>Arealyst Agent</div><div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.5)' }}>En línea</div></div>
                                        <div style={{ display: 'flex', gap: '16px', color: '#0A84FF', paddingRight: '4px' }}><Video size={18} /><Phone size={16} /></div>
                                    </div>
                                </div>
                                {/* Chat */}
                                <div style={{ flex: 1, padding: '12px 10px', display: 'flex', flexDirection: 'column', gap: '8px', overflowY: 'hidden', position: 'relative' }}>
                                    <div style={{ alignSelf: 'center', background: 'rgba(25, 34, 41, 0.9)', padding: '4px 12px', borderRadius: '10px', color: 'rgba(255,255,255,0.5)', fontSize: '9px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>Hoy</div>
                                    <motion.div animate={{ opacity: [1, 1, 0, 0, 1], y: [0, 0, -10, -10, 0] }} transition={{ duration: 15, times: [0, 0.4, 0.53, 0.98, 1], repeat: Infinity, ease: "easeInOut" }} style={{ background: '#182229', padding: '8px 12px', borderRadius: '8px', textAlign: 'center', marginBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                                        <div style={{ fontSize: '8.5px', color: '#ffd279', lineHeight: 1.3 }}>🔒 Las mensajes en este chat y las llamadas están ahora asegurados con cifrado de extremo a extremo.</div>
                                    </motion.div>
                                    <motion.div animate={{ y: [0, 0, -60, -180, -180, 0] }} transition={{ duration: 15, times: [0, 0.5, 0.63, 0.75, 0.99, 1], repeat: Infinity, ease: "easeInOut" }} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        {[
                                            { type: 'user', text: 'Hola, precio de la limpieza dental?', start: 1, time: '12:27 PM' },
                                            { type: 'agent', text: '¡Hola! La limpieza cuesta $2,500. ¿Buscabas agendar?', start: 3, time: '12:28 PM' },
                                            { type: 'user', text: 'Sí, para mañana en la tarde', start: 5.5, time: '12:28 PM' },
                                            { type: 'agent', text: 'Tengo a las 3:00 o 4:30, ¿cuál te queda mejor?', start: 8, time: '12:29 PM' }
                                        ].map((msg, idx) => (
                                            <motion.div key={idx} initial={{ opacity: 0, y: 15 }} animate={{ opacity: [0, 0, 1, 1, 0], y: [15, 15, 0, 0, 0] }} transition={{ duration: 15, times: [0, msg.start / 15, (msg.start + 0.4) / 15, 0.94, 0.97], repeat: Infinity }} style={{ alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start', maxWidth: '85%', position: 'relative', zIndex: 5 }}>
                                                <div style={{ background: msg.type === 'user' ? '#005c4b' : '#202c33', color: '#fff', padding: '4px 10px 6px 10px', borderRadius: '10px', fontSize: '0.78rem', lineHeight: 1.25, position: 'relative', zIndex: 2, boxShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                                                    {msg.text}
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '3px', marginTop: '2px', fontSize: '8px', color: 'rgba(255,255,255,0.4)' }}>{msg.time}{msg.type === 'user' && <div style={{ color: '#53bdeb', display: 'flex' }}><CheckCircle2 size={8} strokeWidth={3} /></div>}</div>
                                                </div>
                                                <div style={{ position: 'absolute', top: '0', [msg.type === 'user' ? 'right' : 'left']: '-6px', width: '12px', height: '12px', background: msg.type === 'user' ? '#005c4b' : '#202c33', clipPath: msg.type === 'user' ? 'polygon(0 0, 0 100%, 100% 0)' : 'polygon(100% 0, 0 0, 100% 100%)', zIndex: 1 }} />
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>
                                {/* Bottom Bar */}
                                <div style={{ background: '#202c33', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '0 0 38px 38px', marginTop: 'auto', padding: '8px 12px 24px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <Plus size={22} color="#0A84FF" />
                                        <div style={{ flex: 1, height: '32px', borderRadius: '16px', background: '#2a3942', padding: '0 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '14px' }}></div><Smile size={18} color="rgba(255,255,255,0.4)" /></div>
                                        <Camera size={22} color="#0A84FF" />
                                        <Mic size={22} color="#0A84FF" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT COLUMN BENTOS */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'absolute', right: '0px', top: '50%', transform: 'translateY(-50%)', zIndex: 40 }}>
                            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ background: 'linear-gradient(to bottom, rgba(0, 133, 255, 0.1) 0%, rgba(5, 7, 20, 0.95) 100%)', backdropFilter: 'blur(40px)', border: '1px solid rgba(0, 133, 255, 0.15)', borderRadius: '32px', padding: '24px', width: '280px', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(0, 133, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0, 133, 255, 0.2)' }}><MessageSquare size={20} color="#0085FF" /></div>
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '2px' }}>Habla natural</h4>
                                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', lineHeight: 1.3 }}>Habla como una persona de tu equipo.</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ background: 'linear-gradient(to bottom, rgba(0, 133, 255, 0.12) 0%, rgba(5, 7, 20, 0.95) 100%)', backdropFilter: 'blur(40px)', border: '1px solid rgba(0, 133, 255, 0.2)', borderRadius: '32px', padding: '24px', width: '280px', height: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)' }}>
                                <div style={{ position: 'relative', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', padding: '16px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 15px 35px rgba(0,0,0,0.4)' }}>
                                        {[...Array(16)].map((_, i) => {
                                            const isSelected = i === 10;
                                            return (
                                                <div key={i} style={{ width: '32px', height: '32px', borderRadius: '8px', background: isSelected ? 'rgba(124, 163, 238, 0.2)' : 'rgba(255, 255, 255, 0.02)', border: isSelected ? '1px solid rgba(124, 163, 238, 0.5)' : '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                                    <div style={{ fontSize: '0.65rem', color: isSelected ? '#0085FF' : 'rgba(255,255,255,0.2)', fontWeight: 600 }}>{i + 1}</div>
                                                    {isSelected && <div style={{ position: 'absolute', top: '-6px', right: '-6px', width: '18px', height: '18px', background: '#0085FF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #000' }}><CheckCircle2 size={10} color="#000" strokeWidth={3} /></div>}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div>
                                    <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px' }}>Agenda citas</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', lineHeight: 1.4 }}>Agrega la cita automáticamente al calendario sin intervención humana.</p>
                                </div>
                            </motion.div>
                        </div>
                        
                        <motion.div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0, 133, 255, 0.5) 0%, rgba(4, 7, 20, 0) 70%)', filter: 'blur(60px)', zIndex: 0 }} />
                    </div>
                </div>
            </div>

            {/* STEP 2: EL SYSTEM ORGANIZA TODO */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '20px', marginBottom: '200px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', fontSize: 'clamp(15rem, 30vw, 40rem)', fontWeight: 900, color: 'rgba(255, 255, 255, 0.02)', lineHeight: 0.8, zIndex: 0, pointerEvents: 'none', userSelect: 'none' }}>2</div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#3B82F6', fontSize: '1rem', fontWeight: 600, marginBottom: '16px', letterSpacing: '0.1em', background: 'rgba(59, 130, 246, 0.1)', padding: '6px 16px', borderRadius: '20px' }}>
                        PASO 2
                    </div>
                    <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, color: '#fff', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                        El System <span style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>organiza todo</span>
                    </h3>
                    <p style={{ maxWidth: '600px', color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.6, fontWeight: 300 }}>
                        Tú y tu equipo entran desde la computadora y ven todos los mensajes, los datos del cliente, y sus citas en un solo lugar.
                    </p>
                </motion.div>

                <div style={{ position: 'relative', width: '100%', maxWidth: '1400px', height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10, marginTop: '40px' }}>
                    <div className="system-features-wrapper" style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        
                        {/* LEFT COLUMN SYSTEM BENTOS */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'absolute', left: '0px', top: '50%', transform: 'translateY(-50%)', zIndex: 40 }}>
                            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 0%, rgba(5, 7, 20, 0.95) 100%)', backdropFilter: 'blur(40px)', border: '1px solid rgba(59, 130, 246, 0.15)', borderRadius: '32px', padding: '24px', width: '280px', height: '240px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)' }}>
                                <div style={{ position: 'relative', height: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '-10px' }}>
                                        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid #000', zIndex: 3 }}><MessageSquare size={24} color="#fff" /></div>
                                        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(45deg, #f09433 0%, #dc2743 50%, #bc1888 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid #000', marginLeft: '-15px', zIndex: 2 }}><Instagram size={24} color="#fff" /></div>
                                    </div>
                                </div>
                                <div>
                                    <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px' }}>Todo en un lugar</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', lineHeight: 1.4 }}>Web, IG y WhatsApp centralizados para ti.</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* DASHBOARD MOCKUP */}
                        <motion.div variants={iphoneVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} style={{ position: 'relative', width: '680px', height: '440px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10 }}>
                            <div style={{ width: '100%', height: '100%', background: '#f4f7f9', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 50px 100px -20px rgba(0,0,0,0.8)', overflow: 'hidden', display: 'flex', color: '#333' }}>
                                {/* Sidebar */}
                                <div style={{ width: '120px', background: '#1a2332', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ padding: '16px', display: 'flex', justifyContent: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: '10px' }}>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '8px', overflow: 'hidden', border: '2px solid #3B82F6' }}><img src={arelyProfile} alt="Arealyst" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                        {[
                                            { label: 'Dashboard', icon: BarChart3, id: 0 },
                                            { label: 'Oportunidades', icon: Layout, id: 1 },
                                            { label: 'Contactos', icon: Users, id: 2 },
                                            { label: 'Calendario', icon: Calendar, id: 3 }
                                        ].map((item, i) => (
                                            <div key={i} onClick={() => setActiveSystemTab(item.id)} style={{ padding: '10px 12px', fontSize: '0.65rem', fontWeight: 500, color: activeSystemTab === item.id ? '#fff' : 'rgba(255,255,255,0.5)', background: activeSystemTab === item.id ? '#111827' : 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '4px', cursor: 'pointer', borderLeft: activeSystemTab === item.id ? '3px solid #3B82F6' : '3px solid transparent' }}>
                                                <item.icon size={18} />{item.label}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Main Pane */}
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                                    <div style={{ height: '50px', background: '#fff', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', padding: '0 20px', justifyContent: 'space-between' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}><div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Arealyst System</div></div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.65rem', fontWeight: 700 }}>AS</div></div>
                                    </div>
                                    <div style={{ flex: 1, overflow: 'auto', padding: '15px' }}>
                                        <AnimatePresence mode="wait">
                                            {activeSystemTab === 0 && (
                                                <motion.div key="dash" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Overview</div></div>
                                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                                                        <div style={{ background: '#fff', borderRadius: '6px', border: '1px solid #e5e7eb', padding: '12px' }}><div style={{ fontSize: '0.65rem', color: '#6b7280' }}>Total Contacts</div><div style={{ fontSize: '1.5rem', fontWeight: 800 }}>152</div></div>
                                                        <div style={{ background: '#fff', borderRadius: '6px', border: '1px solid #e5e7eb', padding: '12px' }}><div style={{ fontSize: '0.65rem', color: '#6b7280' }}>Appointments</div><div style={{ fontSize: '1.5rem', fontWeight: 800 }}>34</div></div>
                                                        <div style={{ background: '#fff', borderRadius: '6px', border: '1px solid #e5e7eb', padding: '12px' }}><div style={{ fontSize: '0.65rem', color: '#6b7280' }}>Win Rate</div><div style={{ fontSize: '1.5rem', fontWeight: 800 }}>22%</div></div>
                                                    </div>
                                                </motion.div>
                                            )}
                                            {activeSystemTab === 1 && (
                                                <motion.div key="opps" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ height: '100%', display: 'flex', gap: '10px' }}>
                                                    {['Lead', 'En Conversación', 'Cita'].map((stage, idx) => (
                                                        <div key={idx} style={{ flex: 1, background: '#e5e7eb', borderRadius: '6px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                            <div style={{ fontSize: '0.65rem', fontWeight: 700 }}>{stage}</div>
                                                            <div style={{ background: '#fff', padding: '10px', borderRadius: '4px', border: '1px solid #d1d5db' }}><div style={{ fontSize: '0.7rem', fontWeight: 600 }}>Carlos P.</div></div>
                                                        </div>
                                                    ))}
                                                </motion.div>
                                            )}
                                            {activeSystemTab > 1 && (
                                                <motion.div key="other" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                                    <div style={{ color: '#6b7280', fontSize: '0.85rem' }}>Selecciona Dashboard u Oportunidades...</div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT COLUMN SYSTEM BENTOS */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'absolute', right: '0px', top: '50%', transform: 'translateY(-50%)', zIndex: 40 }}>
                            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 0%, rgba(5, 7, 20, 0.95) 100%)', backdropFilter: 'blur(40px)', border: '1px solid rgba(59, 130, 246, 0.15)', borderRadius: '32px', padding: '24px', width: '280px', height: '240px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(59, 130, 246, 0.2)' }}><Zap size={22} color="#3B82F6" /></div>
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '2px' }}>Automatizaciones</h4>
                                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', lineHeight: 1.3 }}>Recordatorios automatizados.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <motion.div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(4, 7, 20, 0) 70%)', filter: 'blur(60px)', zIndex: 0 }} />
                    </div>
                </div>
            </div>

            {/* STEP 3: TU EQUIPO TRABAJA CON CLARIDAD */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '20px', marginBottom: '100px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', fontSize: 'clamp(15rem, 30vw, 40rem)', fontWeight: 900, color: 'rgba(255, 255, 255, 0.02)', lineHeight: 0.8, zIndex: 0, pointerEvents: 'none', userSelect: 'none' }}>3</div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981', fontSize: '1rem', fontWeight: 600, marginBottom: '16px', letterSpacing: '0.1em', background: 'rgba(16, 185, 129, 0.1)', padding: '6px 16px', borderRadius: '20px' }}>
                        PASO 3
                    </div>
                    <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, color: '#fff', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                        Tu equipo trabaja <span style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>con claridad</span>
                    </h3>
                    <p style={{ maxWidth: '600px', color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.6, fontWeight: 300 }}>
                        Continúan cada conversación sabiendo qué se habló y qué sigue. Así nadie busca chats ni adivina, y todo el historial del cliente está en su tarjeta.
                    </p>
                </motion.div>

                <div style={{ position: 'relative', width: '100%', maxWidth: '1400px', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10, marginTop: '40px' }}>
                    <div className="system-features-wrapper" style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        
                        {/* CENTER CHAT WIDGET */}
                        <motion.div variants={iphoneVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} style={{ position: 'relative', width: '450px', background: '#fff', borderRadius: '24px', padding: '24px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)', zIndex: 10 }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#E0E7FF', color: '#3730A3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>CP</div>
                                    <div>
                                        <div style={{ fontWeight: 700, color: '#111827', fontSize: '1rem' }}>Carlos P.</div>
                                        <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>Limpieza Dental</div>
                                    </div>
                                </div>
                                <div style={{ background: '#FEF2F2', color: '#EF4444', padding: '4px 12px', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 600 }}>Requiere Humano</div>
                            </div>

                            <div style={{ background: '#F9FAFB', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
                                <div style={{ background: '#E5E7EB', padding: '8px 12px', borderRadius: '8px', fontSize: '0.8rem', color: '#374151', alignSelf: 'flex-start', maxWidth: '80%' }}>
                                    (Arealyst Agent): Queda confirmado mañana 3:00 PM. ¿Algo más en lo que te pueda ayudar?
                                </div>
                                <div style={{ background: '#10B981', color: '#fff', padding: '8px 12px', borderRadius: '8px', fontSize: '0.8rem', alignSelf: 'flex-end', maxWidth: '80%' }}>
                                    (Carlos P.): Sí, ¿es posible pagar con seguro médico de Mapfre?
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '12px' }}>
                                <input type="text" placeholder="Escribe un mensaje..." style={{ flex: 1, padding: '12px 16px', borderRadius: '8px', border: '1px solid #E5E7EB', fontSize: '0.85rem' }} disabled />
                                <button className="btn btn-primary" style={{ padding: '0 24px', height: '40px', borderRadius: '100px', fontWeight: 600, cursor: 'pointer', fontSize: '0.8rem', background: '#3B82F6', color: '#fff', border: 'none' }}>
                                    Enviar
                                </button>
                            </div>

                            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, type: 'spring' }} style={{ position: 'absolute', bottom: -20, right: -20, background: '#111827', color: '#fff', padding: '12px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
                                <Layout size={20} color="#3B82F6" />
                                <div>
                                    <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)' }}>Transición Perfecta</div>
                                    <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>Toma el control 1-click</div>
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(4, 7, 20, 0) 70%)', filter: 'blur(60px)', zIndex: 0 }} />
                    </div>
                </div>
            </div>

            {/* Final Results Section */}
            <div style={{ padding: '120px 5%', textAlign: 'center', position: 'relative' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.03), transparent)', borderRadius: '32px', padding: '80px 40px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 400, color: '#fff', marginBottom: '48px', lineHeight: 1, letterSpacing: '-0.04em' }}>
                        El que tiene sistema, <span style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>gana</span>.
                    </h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                            <div style={{ color: 'var(--accent-color)', fontSize: '3rem', fontWeight: 300 }}>↓</div>
                            <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Menos chats perdidos</div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                            <div style={{ color: 'var(--accent-color)', fontSize: '3rem', fontWeight: 300 }}>↑</div>
                            <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Más citas</div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                            <div style={{ color: 'var(--accent-color)', fontSize: '3rem', fontWeight: 300 }}>↑</div>
                            <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Más ventas</div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ComoFunciona;
"""

with open("src/pages/ComoFunciona.jsx", "w") as f:
    f.write(content)

print("Successfully rewrote ComoFunciona.jsx")
