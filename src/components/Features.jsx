import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Bot, Layout, CheckCircle2, MessageSquare, Calendar, Instagram, ChevronLeft, ChevronRight, Video, Plus, Mic, Clock, Phone, Camera, Smile, BarChart3, Users, Zap, Mail } from 'lucide-react';
import iphoneFrame from '../assets/iphone1.avif';
import arelyProfile from '../assets/arely.jpg';
import whatsBg from '../assets/whats.png';
import solutionBg from '../assets/thats why we built company2.jpg';
import price2Bg from '../assets/price2.png';



const Features = () => {
    const agentVisualRef = useRef(null);
    const pinTargetRef = useRef(null);

    const { scrollYProgress: agentScroll } = useScroll({
        target: pinTargetRef,
        offset: ["start 75%", "end end"]
    });

    // System Dashboard Carousel State
    const [activeSystemTab, setActiveSystemTab] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveSystemTab(prev => (prev + 1) % 6);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Step 3 Payment Animation State
    const [paymentIndex, setPaymentIndex] = React.useState(0);
    const payments = [
        { name: 'Carlos Pérez', amount: '$2,450.00', id: '#83921' },
        { name: 'María García', amount: '$3,800.00', id: '#83922' },
        { name: 'Daniela Sánchez', amount: '$1,200.00', id: '#83923' },
        { name: 'Miguel Castillo', amount: '$5,500.00', id: '#83924' },
        { name: 'Laura Díaz', amount: '$2,100.00', id: '#83925' }
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setPaymentIndex(prev => (prev + 1) % payments.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const systemPinRef = useRef(null);
    const { scrollYProgress: systemScroll } = useScroll({
        target: systemPinRef,
        offset: ["start 75%", "end end"]
    });

    // iPhone Animations (Time-based, triggered in view)
    const iphoneVariants = {
        hidden: {
            y: 40,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    // Bento Cards Animations (Time-based, grouped)
    const cardVariants = {
        hidden: {
            y: 20,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.4
            }
        }
    };

    return (
        <section className="features-section" style={{ padding: '0px 0 120px', marginTop: '-180px', position: 'relative', background: '#000' }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 768px) {
                    .features-section {
                        padding-top: 0px !important;
                        margin-top: -250px !important;
                    }
                    .feature-step-number {
                        position: relative !important;
                        left: 10px !important;
                        top: 0 !important;
                        font-size: 10rem !important;
                        line-height: 0.8 !important;
                        margin-bottom: 20px !important;
                        z-index: 0 !important;
                        text-align: left !important;
                    }
                    .mobile-hide-blur {
                        display: none !important;
                    }
                    .features-main-headline {
                        margin-top: 60px !important;
                        margin-bottom: -40px !important;
                    }
                    .agent-visual-container {
                        margin-top: -60px !important;
                        width: 100% !important;
                        max-width: 100vw !important;
                        overflow: hidden !important;
                        display: flex !important;
                        flex-direction: column !important;
                        align-items: center !important;
                    }
                    .system-main-container {
                        margin-top: 100px !important;
                        width: 90vw !important;
                        max-width: 560px !important;
                        height: auto !important;
                        aspect-ratio: 16 / 9 !important;
                        margin-left: auto !important;
                        margin-right: auto !important;
                    }
                    .system-scaler {
                        width: 560px !important;
                        height: 315px !important;
                        transform: scale(calc(min(90vw, 560px) / 560));
                        transform-origin: top left;
                    }
                }
                `
            }} />
            {/* Top-to-Bottom Blue Blur Effect removed */}

            <div className="features-content-wrapper" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 10 }}>
                <div
                    className="features-intro-header"
                    style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto 0px' }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '16px',
                            maxWidth: '800px',
                            margin: '0 auto 10px'
                        }}
                    >
                        <div style={{
                            height: '1px',
                            flex: 1,
                            background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.4) 100%)'
                        }} />
                        <svg width="24" height="20" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.8 }}>
                            <path d="M0 24L8 0H14L6 24H0Z" fill="#3B82F6" />
                            <path d="M9 24L17 0H23L15 24H9Z" fill="#3B82F6" />
                            <path d="M18 24L26 0H32L24 24H18Z" fill="#3B82F6" />
                        </svg>
                        <div style={{
                            height: '1px',
                            flex: 1,
                            background: 'linear-gradient(270deg, transparent 0%, rgba(59, 130, 246, 0.4) 100%)'
                        }} />
                    </motion.div>

                    <motion.h2
                        className="features-main-headline"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                            textAlign: 'center',
                            marginBottom: '100px',
                            fontWeight: 400,
                            letterSpacing: '-0.02em',
                            background: 'linear-gradient(90deg, #fff 0%, var(--accent-color, #3b82f6) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        De mensaje a venta en 3 Pasos.
                    </motion.h2>


                </div>

                {/* FEATURE 1: AREALYST AGENT */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '40px',
                    marginBottom: '280px',
                    marginTop: '80px',
                    paddingLeft: '80px',
                    flexWrap: 'wrap',
                    position: 'relative'
                }} className="feature-block">

                    {/* Step 1 Background - Blue Circle */}
                    <div style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '800px', height: '800px', borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
                        filter: 'blur(20px)', zIndex: 0, pointerEvents: 'none'
                    }} />

                    {/* Left Column: Text */}
                    <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', marginTop: '12vh', position: 'relative', zIndex: 2 }}>
                        {/* Huge Background Number */}
                        <motion.div
                            className="feature-step-number"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={{
                                position: 'absolute',
                                left: '-60px',
                                top: '-60px',
                                fontSize: 'clamp(10rem, 15vw, 15rem)',
                                fontWeight: 300,
                                lineHeight: 0.8,
                                background: 'linear-gradient(180deg, rgba(147, 197, 253, 0.4) 0%, rgba(147, 197, 253, 0) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                zIndex: -1,
                                pointerEvents: 'none',
                                userSelect: 'none'
                            }}>
                            1
                        </motion.div>

                        {/* Info Block - Top */}
                        <motion.div
                            className="agent-info-block"
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
                        >


                            <h3 style={{
                                fontSize: 'clamp(2.8rem, 6vw, 3.5rem)',
                                fontWeight: 300,
                                color: '#fff',
                                marginBottom: '32px',
                                letterSpacing: '-0.04em',
                                lineHeight: 1.1
                            }}>
                                El Agent <span style={{ color: '#fff', fontWeight: 500 }}>atiende.</span>
                            </h3>
                        </motion.div>

                        {/* Description Paragraph and Button - Top */}
                        <motion.div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                marginTop: '0px',
                                marginBottom: '40px',
                                zIndex: 100,
                                position: 'relative'
                            }}
                        >
                            <p style={{
                                fontSize: '1.15rem',
                                color: 'rgba(255, 255, 255, 0.7)',
                                lineHeight: 1.6,
                                marginBottom: '24px',
                                maxWidth: '900px',
                                fontWeight: 300,
                                textAlign: 'left',
                                padding: '0',
                                letterSpacing: '-0.01em'
                            }}>
                                <span style={{ fontWeight: 500, color: '#fff' }}>Arealyst Agent</span> responde en segundos, usando la información real de tu negocio. Habla natural, como una persona. Hace preguntas simples y, si el cliente quiere, agenda la cita y la agrega automáticamente al calendario.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Graphic */}
                    <div style={{ flex: '1 1 500px', width: '100%', position: 'relative', zIndex: 2 }}>
                        {/* Soft Blur Accent for Step 1 Graphic */}
                        <div style={{
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '600px',
                            height: '600px',
                            background: 'radial-gradient(circle, rgba(147, 197, 253, 0.12) 0%, rgba(147, 197, 253, 0) 70%)',
                            filter: 'blur(20px)',
                            zIndex: 1,
                            pointerEvents: 'none'
                        }}></div>

                        {/* Pinning & Interactive Container */}
                        <div
                            ref={pinTargetRef}
                            style={{
                                height: 'auto',
                                width: '100%',
                                position: 'relative',
                                marginTop: '-80px',
                                zIndex: 20
                            }}
                        >
                            <div style={{
                                position: 'relative',
                                top: 0,
                                height: 'auto',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                overflow: 'hidden',
                                paddingBottom: '40px'
                            }}>
                                {/* Suble bottom mask as requested: lower half emerges from darkness */}


                                <div
                                    className="agent-visual-container"
                                    style={{
                                        position: 'relative',
                                        width: '100%',
                                        maxWidth: '1600px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        perspective: '2000px',
                                        height: '100%',
                                        transform: 'scale(0.85)',
                                        transformOrigin: 'center center'
                                    }}
                                >
                                    <div className="agent-features-wrapper" style={{
                                        position: 'relative',
                                        width: '100%',
                                        maxWidth: '1600px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        zIndex: 5,
                                        paddingTop: '0px'
                                    }}>
                                        {/* iPhone Asset Container (Now properly centered) */}
                                        {/* iPhone Asset Container (Now properly centered) */}
                                        <motion.div
                                            variants={iphoneVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, margin: "-10%" }}
                                            style={{
                                                position: 'relative',
                                                width: '280px',
                                                height: '560px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                zIndex: 10,
                                                transformStyle: 'preserve-3d',
                                                transformOrigin: 'top center'
                                            }}
                                            className="iphone-main-container"
                                        >
                                            {/* The physical iPhone image asset */}
                                            <img
                                                src={iphoneFrame}
                                                alt="iPhone Frame"
                                                style={{
                                                    position: 'absolute',
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'contain',
                                                    zIndex: 2,
                                                    pointerEvents: 'none'
                                                }}
                                            />

                                            {/* Internal Screen Content (Masked to fit image) */}
                                            <div style={{
                                                width: '246px',
                                                height: '528px',
                                                backgroundColor: '#0b141a',
                                                backgroundImage: `url(${whatsBg})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                borderRadius: '36px',
                                                overflow: 'hidden',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                position: 'absolute',
                                                top: '16px',
                                                zIndex: 1,
                                                padding: '0 7px 7px'
                                            }}>
                                                {/* WhatsApp Header Area */}
                                                <div style={{
                                                    background: '#202c33',
                                                    zIndex: 20,
                                                    position: 'relative',
                                                    paddingTop: '12px',
                                                    paddingBottom: '8px',
                                                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                                                }}>
                                                    {/* Status Bar */}
                                                    <div style={{ height: '44px', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <div style={{ fontSize: '10px', fontWeight: 600, color: '#fff' }}>12:27</div>
                                                        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                                                            <div style={{ width: '14px', height: '8px', border: '1px solid #fff', borderRadius: '2px', position: 'relative' }}>
                                                                <div style={{ position: 'absolute', top: '1px', left: '1px', width: '8px', height: '4px', background: '#fff' }} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Header Content */}
                                                    <div style={{
                                                        padding: '0 10px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '4px'
                                                    }}>
                                                        <div style={{ color: '#0A84FF', display: 'flex', alignItems: 'center' }}>
                                                            <ChevronLeft size={22} strokeWidth={2.5} />
                                                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                                                <img src={arelyProfile} alt="Arealyst Agent" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                            </div>
                                                        </div>
                                                        <div style={{ flex: 1, marginLeft: '4px' }}>
                                                            <div style={{ fontSize: '11px', fontWeight: 600, color: '#fff', lineHeight: 1.2 }}>Arealyst Agent</div>
                                                            <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.5)' }}>En línea</div>
                                                        </div>
                                                        <div style={{ display: 'flex', gap: '16px', color: '#0A84FF', paddingRight: '4px' }}>
                                                            <Video size={18} strokeWidth={2} />
                                                            <Phone size={16} strokeWidth={2} />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Chat Canvas (Dark Mode) */}
                                                <div style={{
                                                    flex: 1,
                                                    padding: '12px 10px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '8px',
                                                    overflowY: 'hidden',
                                                    position: 'relative'
                                                }}>
                                                    {/* Today Badge */}
                                                    <div style={{ alignSelf: 'center', background: 'rgba(25, 34, 41, 0.9)', padding: '4px 12px', borderRadius: '10px', color: 'rgba(255,255,255,0.5)', fontSize: '9px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>
                                                        Hoy
                                                    </div>

                                                    {/* Encryption Info Box */}
                                                    <motion.div
                                                        animate={{ opacity: [1, 1, 0, 0, 1], y: [0, 0, -10, -10, 0] }}
                                                        transition={{ duration: 15, times: [0, 0.4, 0.53, 0.98, 1], repeat: Infinity, ease: "easeInOut" }}
                                                        style={{
                                                            background: '#182229',
                                                            padding: '8px 12px',
                                                            borderRadius: '8px',
                                                            textAlign: 'center',
                                                            marginBottom: '10px',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center',
                                                            gap: '4px'
                                                        }}
                                                    >
                                                        <div style={{ fontSize: '8.5px', color: '#ffd279', lineHeight: 1.3 }}>
                                                            🔒 Las mensajes en este chat y las llamadas están ahora asegurados con cifrado de extremo a extremo. Haz clic para más información.
                                                        </div>
                                                    </motion.div>

                                                    {/* Scrolling Container for the 'Slide Up' Effect */}
                                                    <motion.div
                                                        animate={{ y: [0, 0, -60, -180, -180, 0] }}
                                                        transition={{ duration: 15, times: [0, 0.5, 0.63, 0.75, 0.99, 1], repeat: Infinity, ease: "easeInOut" }}
                                                        style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
                                                    >
                                                        {/* Looping Conversation */}
                                                        {[
                                                            { type: 'user', text: 'Tienen cita para mañana...?', start: 1, time: '12:27 PM' },
                                                            { type: 'agent', text: 'Sí, hay a las 4:30pm, la quieres?', start: 3, time: '12:28 PM' },
                                                            { type: 'user', text: 'Por favor, esa está perfecta', start: 5.5, time: '12:28 PM' },
                                                            { type: 'agent', text: 'Listo, queda confirmado mañana 4:30', start: 8, time: '12:29 PM' }
                                                        ].map((msg, idx) => (
                                                            <motion.div
                                                                key={idx}
                                                                initial={{ opacity: 0, y: 15 }}
                                                                animate={{ opacity: [0, 0, 1, 1, 0], y: [15, 15, 0, 0, 0] }}
                                                                transition={{ duration: 15, times: [0, msg.start / 15, (msg.start + 0.4) / 15, 0.94, 0.97], repeat: Infinity }}
                                                                style={{
                                                                    alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start',
                                                                    maxWidth: '85%',
                                                                    position: 'relative',
                                                                    zIndex: 5
                                                                }}
                                                            >
                                                                <div style={{
                                                                    background: msg.type === 'user' ? '#005c4b' : '#202c33',
                                                                    color: '#fff',
                                                                    padding: '4px 10px 6px 10px',
                                                                    borderRadius: '10px',
                                                                    fontSize: '0.78rem',
                                                                    lineHeight: 1.25,
                                                                    position: 'relative',
                                                                    zIndex: 2,
                                                                    boxShadow: '0 1px 2px rgba(0,0,0,0.2)'
                                                                }}>
                                                                    {msg.text}
                                                                    <div style={{
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'flex-end',
                                                                        gap: '3px',
                                                                        marginTop: '2px',
                                                                        fontSize: '8px',
                                                                        color: 'rgba(255,255,255,0.4)'
                                                                    }}>
                                                                        {msg.time}
                                                                        {msg.type === 'user' && (
                                                                            <div style={{ color: '#53bdeb', display: 'flex' }}>
                                                                                <CheckCircle2 size={8} strokeWidth={3} />
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                {/* Tail Style */}
                                                                <div style={{
                                                                    position: 'absolute',
                                                                    top: '0',
                                                                    [msg.type === 'user' ? 'right' : 'left']: '-6px',
                                                                    width: '12px',
                                                                    height: '12px',
                                                                    background: msg.type === 'user' ? '#005c4b' : '#202c33',
                                                                    clipPath: msg.type === 'user'
                                                                        ? 'polygon(0 0, 0 100%, 100% 0)'
                                                                        : 'polygon(100% 0, 0 0, 100% 100%)',
                                                                    zIndex: 1
                                                                }} />
                                                            </motion.div>
                                                        ))}

                                                        {/* Final Booking Card */}
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 15, scale: 0.98 }}
                                                            animate={{ opacity: [0, 0, 1, 1, 0], y: [15, 15, 0, 0, 0], scale: [0.98, 0.98, 1, 1, 0.98] }}
                                                            transition={{ duration: 15, times: [0, 0.65, 0.85, 0.94, 0.97], repeat: Infinity }}
                                                            style={{
                                                                marginTop: '6px',
                                                                alignSelf: 'flex-start',
                                                                position: 'relative',
                                                                maxWidth: '90%'
                                                            }}
                                                        >
                                                            <div style={{
                                                                background: '#202c33',
                                                                padding: '12px 14px',
                                                                borderRadius: '12px',
                                                                borderTopLeftRadius: '0px',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '12px',
                                                                boxShadow: '0 1px 0.5px rgba(11,20,26,.13)',
                                                                position: 'relative',
                                                                zIndex: 2
                                                            }}>
                                                                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#005c4b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                    <Calendar size={18} color="#e9edef" strokeWidth={2.5} />
                                                                </div>
                                                                <div>
                                                                    <div style={{ fontSize: '10px', fontWeight: 600, color: 'rgba(233,237,239,0.7)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>Cita Confirmada</div>
                                                                    <div style={{ fontSize: '15px', fontWeight: 500, color: '#e9edef' }}>Mañana, 4:30 PM</div>
                                                                </div>
                                                            </div>
                                                            {/* Tail Style */}
                                                            <div style={{
                                                                position: 'absolute',
                                                                top: '0',
                                                                left: '-6px',
                                                                width: '12px',
                                                                height: '12px',
                                                                background: '#202c33',
                                                                clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                                                                zIndex: 1
                                                            }} />
                                                        </motion.div>
                                                    </motion.div>
                                                </div>

                                                {/* WhatsApp Bottom Area */}
                                                <div style={{
                                                    background: '#202c33',
                                                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                                                    borderRadius: '0 0 38px 38px',
                                                    marginTop: 'auto',
                                                    padding: '8px 12px 24px'
                                                }}>
                                                    <div style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '10px'
                                                    }}>
                                                        <Plus size={22} color="#0A84FF" />
                                                        <div style={{
                                                            flex: 1,
                                                            height: '32px',
                                                            borderRadius: '16px',
                                                            background: '#2a3942',
                                                            padding: '0 12px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'space-between'
                                                        }}>
                                                            <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '14px' }}></div>
                                                            <Smile size={18} color="rgba(255,255,255,0.4)" />
                                                        </div>
                                                        <Camera size={22} color="#0A84FF" />
                                                        <Mic size={22} color="#0A84FF" />
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Background Glow removed */}
                                    </div>
                                    <div style={{ marginTop: '10px', zIndex: 20 }}>
                                        <Link to="/agent" className="btn btn-primary">
                                            EXPLORAR AGENT <span>›</span>
                                        </Link>
                                    </div>
                                </div>

                                {/* Button below cards for Mobile/Desktop */}
                            </div>
                        </div>

                    </div>
                </div>


                {/* FEATURE 2: AREALYST SYSTEM */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '40px',
                    marginBottom: '280px',
                    paddingLeft: '80px',
                    flexWrap: 'wrap',
                    position: 'relative'
                }} className="feature-block">

                    {/* Step 2 Background - Blue Circle Removed */}

                    {/* Text Column */}
                    <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', marginTop: '0', position: 'relative', zIndex: 2 }}>
                        {/* Huge Background Number */}
                        <motion.div
                            className="feature-step-number"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={{
                                position: 'absolute',
                                left: '-60px',
                                top: '-60px',
                                fontSize: 'clamp(10rem, 15vw, 15rem)',
                                fontWeight: 300,
                                lineHeight: 0.8,
                                background: 'linear-gradient(180deg, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                zIndex: 3,
                                pointerEvents: 'none',
                                userSelect: 'none'
                            }}>
                            2
                        </motion.div>

                        {/* Info Block - Top */}
                        <motion.div
                            className="agent-info-block"
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
                        >


                            <h3 style={{
                                fontSize: 'clamp(2.8rem, 6vw, 3.5rem)',
                                fontWeight: 300,
                                color: '#fff',
                                marginBottom: '32px',
                                letterSpacing: '-0.04em',
                                lineHeight: 1.1
                            }}>
                                El System <span style={{ color: '#fff', fontWeight: 500 }}>organiza.</span>
                            </h3>
                        </motion.div>

                        {/* Description Paragraph and Button - Top System */}
                        <motion.div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                marginTop: '0px',
                                marginBottom: '40px',
                                zIndex: 100,
                                position: 'relative'
                            }}
                        >
                            <p style={{
                                fontSize: '1.15rem',
                                color: 'rgba(255, 255, 255, 0.7)',
                                lineHeight: 1.6,
                                marginBottom: '24px',
                                maxWidth: '900px',
                                fontWeight: 300,
                                textAlign: 'left',
                                padding: '0',
                                letterSpacing: '-0.01em'
                            }}>
                                <span style={{ fontWeight: 500, color: '#fff' }}>Arealyst System</span> es un programa al que tú y tu equipo entran desde la computadora. Ahí ven todos los mensajes, los datos del cliente, en qué etapa de compra está y sus citas en un solo lugar. También envía recordatorios y hace seguimientos automáticos.
                            </p>
                        </motion.div>
                    </div>

                    {/* Visual Column */}
                    <div style={{ flex: '1 1 500px', width: '100%', position: 'relative', zIndex: 2 }}>
                        {/* Soft Blur Accent Removed */}

                        {/* Pinning & Interactive Container - SYSTEM */}
                        <div
                            ref={systemPinRef}
                            style={{
                                height: 'auto',
                                width: '100%',
                                position: 'relative',
                                marginTop: '0',
                                zIndex: 20
                            }}
                        >
                            <div style={{
                                position: 'relative',
                                top: 0,
                                height: 'auto',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                overflow: 'hidden',
                                paddingBottom: '40px'
                            }}>
                                {/* Background Glow - System Blue Center Screen removed */}

                                {/* Suble bottom mask */}


                                <div
                                    className="agent-visual-container"
                                    style={{
                                        position: 'relative',
                                        width: '100%',
                                        maxWidth: '1800px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        perspective: '2000px',
                                        height: '100%'
                                    }}
                                >
                                    <div className="system-features-wrapper" style={{
                                        position: 'relative',
                                        width: '100%',
                                        maxWidth: '2000px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        zIndex: 5,
                                        paddingTop: '0px'
                                    }}>
                                        {/* Center Visual: System Dashboard */}
                                        <motion.div
                                            variants={iphoneVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, margin: "-10%" }}
                                            style={{
                                                position: 'relative',
                                                width: '100%',
                                                maxWidth: '560px',
                                                height: 'auto',
                                                aspectRatio: '16/9',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                zIndex: 10,
                                                transformStyle: 'preserve-3d',
                                            }}
                                            className="system-main-container"
                                        >

                                            <div className="system-scaler" style={{
                                                width: '100%',
                                                height: '100%',
                                                background: '#f4f7f9',
                                                borderRadius: '12px',
                                                boxShadow: '0 0 80px rgba(59, 130, 246, 0.25), 0 50px 100px -20px rgba(0,0,0,0.8)',
                                                overflow: 'hidden',
                                                display: 'flex',
                                                position: 'relative',
                                                color: '#333'
                                            }}>
                                                {/* Sidebar (Based on Screenshot 3) */}
                                                <div style={{
                                                    width: '120px',
                                                    background: '#1a2332',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    padding: '0',
                                                    flexShrink: 0
                                                }}>
                                                    {/* Sidebar Header (Branding with arely.jpg) */}
                                                    <div style={{ padding: '4px', display: 'flex', justifyContent: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: '2px' }}>
                                                        <div style={{ width: '32px', height: '32px', borderRadius: '6px', overflow: 'hidden', border: '1.5px solid #3B82F6' }}>
                                                            <img src={arelyProfile} alt="Arealyst" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                        </div>
                                                    </div>

                                                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, paddingBottom: '4px' }}>
                                                        {[
                                                            { label: 'Dashboard', icon: BarChart3, id: 0 },
                                                            { label: 'Oportunidades', icon: Layout, id: 1 },
                                                            { label: 'Contactos', icon: Users, id: 2 },
                                                            { label: 'Calendario', icon: Calendar, id: 3 },
                                                            { label: 'Automatización', icon: Zap, id: 4 },
                                                            { label: 'Arealyst Agent', icon: Bot, id: 5 }
                                                        ].map((item, i) => (
                                                            <div
                                                                key={i}
                                                                onClick={() => setActiveSystemTab(item.id)}
                                                                style={{
                                                                    flex: 1,
                                                                    justifyContent: 'center',
                                                                    padding: '4px 6px',
                                                                    fontSize: '0.6rem',
                                                                    fontWeight: 500,
                                                                    color: activeSystemTab === item.id ? '#fff' : 'rgba(255,255,255,0.5)',
                                                                    background: activeSystemTab === item.id ? '#111827' : 'transparent',
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    alignItems: 'center',
                                                                    textAlign: 'center',
                                                                    gap: '2px',
                                                                    cursor: 'pointer',
                                                                    borderLeft: activeSystemTab === item.id ? '3px solid #3B82F6' : '3px solid transparent'
                                                                }}
                                                            >
                                                                <item.icon size={14} />
                                                                {item.label}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Main Content Pane */}
                                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                                                    {/* Top Navigation / Branding (Based on Screenshot 3) */}
                                                    <div style={{
                                                        height: '50px',
                                                        background: '#fff',
                                                        borderBottom: '1px solid #e5e7eb',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        padding: '0 20px',
                                                        justifyContent: 'space-between'
                                                    }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                                            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111827' }}>Arealyst System</div>
                                                            <div style={{ height: '24px', width: '1px', background: '#e5e7eb' }} />
                                                            <div style={{ fontSize: '0.75rem', color: '#6b7280', fontWeight: 500 }}>
                                                                {activeSystemTab === 0 ? 'Dashboard' :
                                                                    activeSystemTab === 1 ? 'Oportunidades' :
                                                                        activeSystemTab === 2 ? 'Smart Lists' :
                                                                            activeSystemTab === 3 ? 'Noviembre 2023' :
                                                                                activeSystemTab === 4 ? 'Builder' : 'Arealyst Agent'}
                                                            </div>
                                                        </div>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.65rem', fontWeight: 700 }}>AS</div>
                                                        </div>
                                                    </div>

                                                    {/* Browser Inner Content */}
                                                    <div style={{ flex: 1, overflow: 'auto', padding: '15px' }}>
                                                        <AnimatePresence mode="wait">
                                                            {activeSystemTab === 0 && (
                                                                <motion.div
                                                                    key="dashboard"
                                                                    initial={{ opacity: 0 }}
                                                                    animate={{ opacity: 1 }}
                                                                    exit={{ opacity: 0 }}
                                                                    transition={{ duration: 0.2 }}
                                                                    style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}
                                                                >
                                                                    {/* Dashboard Header */}
                                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                                                                        <div style={{ display: 'flex', gap: '8px' }}>
                                                                            <div style={{ background: '#fff', padding: '4px 10px', borderRadius: '4px', border: '1px solid #e5e7eb', fontSize: '0.65rem', fontWeight: 600 }}>Panel de Control</div>
                                                                            <div style={{ background: '#f9fafb', padding: '4px 10px', borderRadius: '4px', border: '1px solid #e5e7eb', fontSize: '0.6rem', color: '#6b7280' }}>Modo Edición</div>
                                                                        </div>
                                                                        <div style={{ background: '#fff', padding: '4px 10px', borderRadius: '4px', border: '1px solid #e5e7eb', fontSize: '0.6rem', color: '#6b7280' }}>
                                                                            Histórico → Hoy
                                                                        </div>
                                                                    </div>

                                                                    {/* Widgets Grid */}
                                                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', flex: 1 }}>
                                                                        {/* Widget 1: Contacts Count */}
                                                                        <div style={{ background: '#fff', borderRadius: '6px', border: '1px solid #e5e7eb', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <div style={{ fontSize: '0.65rem', color: '#6b7280', alignSelf: 'flex-start', marginBottom: '10px', fontWeight: 600 }}>Nuevos Clientes</div>
                                                                            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#111827' }}>152</div>
                                                                        </div>

                                                                        {/* Widget 2: Contacts by Source */}
                                                                        <div style={{ background: '#fff', borderRadius: '6px', border: '1px solid #e5e7eb', padding: '12px', gridColumn: 'span 2' }}>
                                                                            <div style={{ fontSize: '0.65rem', color: '#6b7280', marginBottom: '10px', fontWeight: 600 }}>Clientes por Canal</div>
                                                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                                                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '8px solid #3B82F6', borderRightColor: '#e5e7eb', transform: 'rotate(45deg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                                    <span style={{ fontSize: '0.7rem', fontWeight: 800, transform: 'rotate(-45deg)' }}>84</span>
                                                                                </div>
                                                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                                                                    <div style={{ fontSize: '0.55rem', display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '8px', height: '8px', background: '#3B82F6', borderRadius: '2px' }} /> Instagram Direct - 42</div>
                                                                                    <div style={{ fontSize: '0.55rem', display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '8px', height: '8px', background: '#8B5CF6', borderRadius: '2px' }} /> WhatsApp Web - 32</div>
                                                                                    <div style={{ fontSize: '0.55rem', display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '8px', height: '8px', background: '#10B981', borderRadius: '2px' }} /> Referidos - 10</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        {/* Widget 3: Contacts Over Time */}
                                                                        <div style={{ background: '#fff', borderRadius: '6px', border: '1px solid #e5e7eb', padding: '12px', gridColumn: 'span 2' }}>
                                                                            <div style={{ fontSize: '0.65rem', color: '#6b7280', marginBottom: '10px', fontWeight: 600 }}>Crecimiento de Clientes</div>
                                                                            <svg width="100%" height="60" viewBox="0 0 200 60">
                                                                                <path d="M0 50 Q 50 10 100 40 T 200 20" fill="none" stroke="#3B82F6" strokeWidth="2" />
                                                                                <circle cx="0" cy="50" r="2" fill="#3B82F6" />
                                                                                <circle cx="50" cy="22" r="2" fill="#3B82F6" />
                                                                                <circle cx="100" cy="40" r="2" fill="#3B82F6" />
                                                                                <circle cx="200" cy="20" r="2" fill="#3B82F6" />
                                                                            </svg>
                                                                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.5rem', color: '#9ca3af', marginTop: '5px' }}>
                                                                                <span>Abr</span><span>Jun</span><span>Oct</span><span>Dic</span><span>Feb</span>
                                                                            </div>
                                                                        </div>

                                                                        {/* Widget 4: Unread Messages */}
                                                                        <div style={{ background: '#fff', borderRadius: '6px', border: '1px solid #e5e7eb', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <div style={{ fontSize: '0.65rem', color: '#6b7280', alignSelf: 'flex-start', marginBottom: '10px', fontWeight: 600 }}>Citas Hoy</div>
                                                                            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#3B82F6' }}>6</div>
                                                                        </div>

                                                                        {/* Widget 5: Appointment Count */}
                                                                        <div style={{ background: '#fff', borderRadius: '6px', border: '1px solid #e5e7eb', padding: '12px' }}>
                                                                            <div style={{ fontSize: '0.65rem', color: '#6b7280', marginBottom: '10px', fontWeight: 600 }}>Total de Citas (Mes)</div>
                                                                            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#10B981' }}>43</div>
                                                                            <div style={{ fontSize: '0.5rem', color: '#6b7280' }}>+12 respecto al mes pasado</div>
                                                                        </div>

                                                                        {/* Widget 6: Assigned Conversations */}
                                                                        <div style={{ background: '#fff', borderRadius: '6px', border: '1px solid #e5e7eb', padding: '12px', gridColumn: 'span 2' }}>
                                                                            <div style={{ fontSize: '0.65rem', color: '#6b7280', marginBottom: '10px', fontWeight: 600 }}>Carga de Trabajo</div>
                                                                            <div style={{ height: '40px', background: '#f3f4f6', borderRadius: '4px', overflow: 'hidden', display: 'flex' }}>
                                                                                <div style={{ width: '85%', background: '#3B82F6' }} />
                                                                                <div style={{ width: '15%', background: '#8B5CF6' }} />
                                                                            </div>
                                                                            <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
                                                                                <div style={{ fontSize: '0.5rem', color: '#6b7280' }}>Arealyst Agent: 85%</div>
                                                                                <div style={{ fontSize: '0.5rem', color: '#6b7280' }}>Equipo Humano: 15%</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </motion.div>
                                                            )}

                                                            {activeSystemTab === 1 && (
                                                                <motion.div
                                                                    key="ops"
                                                                    initial={{ opacity: 0 }}
                                                                    animate={{ opacity: 1 }}
                                                                    exit={{ opacity: 0 }}
                                                                    transition={{ duration: 0.2 }}
                                                                    style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                                                >
                                                                    {/* Kanban Header */}
                                                                    <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                                                                        {['Nuevos Web', 'Citas Solicitadas', 'En Proceso', 'Cerrados'].map((col, i) => (
                                                                            <div key={i} style={{ flex: 1 }}>
                                                                                <div style={{ paddingBottom: '10px', borderBottom: i === 0 ? '3px solid #3B82F6' : i === 1 ? '3px solid #8B5CF6' : i === 2 ? '3px solid #F59E0B' : '3px solid #10B981', fontSize: '0.75rem', fontWeight: 700, color: '#111827' }}>
                                                                                    {col}
                                                                                    <div style={{ fontSize: '0.6rem', color: '#6b7280', fontWeight: 500 }}>{3 - i} Leads • $2,500.00</div>
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </div>

                                                                    {/* Kanban Board */}
                                                                    <div style={{ display: 'flex', gap: '10px', flex: 1 }}>
                                                                        {[
                                                                            [{ n: 'Juan Martínez', p: '$2,500.00' }, { n: 'María Rodríguez', p: '$3,500.00' }],
                                                                            [{ n: 'Carlos Pérez', p: '$3,500.00' }, { n: 'Natalia Cruz', p: '$4,200.00' }],
                                                                            [{ n: 'Ana Gómez', p: '$2,500.00' }],
                                                                            [{ n: 'Luis Fernández', p: '$9,000.00' }, { n: 'Andrés Reyes', p: '$12,500.00' }]
                                                                        ].map((cards, i) => (
                                                                            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                                                {cards.map((card, j) => (
                                                                                    <div key={j} style={{ background: '#fff', borderRadius: '6px', padding: '10px', border: '1px solid #e5e7eb', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                                                                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                                                                            <div style={{ fontSize: '0.75rem', fontWeight: 700 }}>{card.n}</div>
                                                                                            <div style={{ fontSize: '0.65rem', color: '#10B981', fontWeight: 700 }}>{card.p}</div>
                                                                                        </div>
                                                                                        <div style={{ fontSize: '0.6rem', color: '#6b7280', display: 'flex', gap: '5px' }}>
                                                                                            <Instagram size={10} /> ads_campaign
                                                                                        </div>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </motion.div>
                                                            )}

                                                            {activeSystemTab === 2 && (
                                                                <motion.div
                                                                    key="contacts"
                                                                    initial={{ opacity: 0 }}
                                                                    animate={{ opacity: 1 }}
                                                                    exit={{ opacity: 0 }}
                                                                    transition={{ duration: 0.2 }}
                                                                    style={{ height: '100%', background: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                                                                >
                                                                    <div style={{ padding: '12px 15px', borderBottom: '1px solid #e5e7eb', fontSize: '0.75rem', fontWeight: 700, display: 'flex', justifyContent: 'space-between' }}>
                                                                        <div style={{ display: 'flex', gap: '20px' }}>
                                                                            <span style={{ color: '#3B82F6', borderBottom: '2px solid #3B82F6', paddingBottom: '12px', marginBottom: '-13px' }}>Smart Lists</span>
                                                                            <span style={{ opacity: 0.5 }}>Bulk Actions</span>
                                                                            <span style={{ opacity: 0.5 }}>Tasks</span>
                                                                        </div>
                                                                    </div>
                                                                    <div style={{ padding: '0' }}>
                                                                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                                                            <thead style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
                                                                                <tr>
                                                                                    {['Nombre', 'Teléfono', 'Email', 'Creado'].map(h => (
                                                                                        <th key={h} style={{ textAlign: 'left', padding: '10px 15px', fontSize: '0.6rem', color: '#6b7280', textTransform: 'uppercase' }}>{h}</th>
                                                                                    ))}
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                {[
                                                                                    { n: 'Carmen López', p: '(512) 772-8426', e: 'carmen.l@gmail.com', c: 'Feb 19 2026' },
                                                                                    { n: 'José Ramírez', p: '(434) 428-5371', e: 'jose.ramirez@mail.com', c: 'Feb 18 2026' },
                                                                                    { n: 'Daniela Sánchez', p: '+1 809 555 0122', e: 'danysanchez@arealyst.com', c: 'Feb 18 2026' },
                                                                                    { n: 'Miguel Castillo', p: '(512) 772-9900', e: 'm.castillo@test.com', c: 'Feb 17 2026' },
                                                                                    { n: 'Laura Díaz', p: '+1 829 444 0199', e: 'laura.diaz@arealyst.com', c: 'Feb 17 2026' },
                                                                                    { n: 'Pedro Herrera', p: '(305) 123-4567', e: 'pedro.h@mail.com', c: 'Feb 16 2026' },
                                                                                    { n: 'Sofía Morales', p: '(809) 987-6543', e: 'sofia.m@example.com', c: 'Feb 16 2026' }
                                                                                ].map((row, i) => (
                                                                                    <tr key={i} style={{ borderBottom: '1px solid #f3f4f6' }}>
                                                                                        <td style={{ padding: '12px 15px', fontSize: '0.7rem' }}>
                                                                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                                                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: i % 2 === 0 ? '#FEF3C7' : '#E0E7FF', color: i % 2 === 0 ? '#92400E' : '#3730A3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.5rem', fontWeight: 800 }}>{row.n.charAt(0)}</div>
                                                                                                {row.n}
                                                                                            </div>
                                                                                        </td>
                                                                                        <td style={{ padding: '12px 15px', fontSize: '0.7rem', color: '#1D4ED8' }}>{row.p}</td>
                                                                                        <td style={{ padding: '12px 15px', fontSize: '0.7rem', color: '#6B7280' }}>{row.e}</td>
                                                                                        <td style={{ padding: '12px 15px', fontSize: '0.7rem', color: '#6B7280' }}>{row.c}</td>
                                                                                    </tr>
                                                                                ))}
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </motion.div>
                                                            )}

                                                            {activeSystemTab === 3 && (
                                                                <motion.div
                                                                    key="calendar"
                                                                    initial={{ opacity: 0 }}
                                                                    animate={{ opacity: 1 }}
                                                                    exit={{ opacity: 0 }}
                                                                    transition={{ duration: 0.2 }}
                                                                    style={{ height: '100%', background: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb', display: 'flex', flexDirection: 'column' }}
                                                                >
                                                                    <div style={{ padding: '10px 15px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e5e7eb' }}>
                                                                        <div style={{ fontWeight: 800, fontSize: '0.85rem' }}>Noviembre 2023</div>
                                                                        <div style={{ display: 'flex', gap: '5px' }}>
                                                                            {['Day', 'Week', 'Month'].map(m => (
                                                                                <div key={m} style={{ padding: '3px 8px', fontSize: '0.65rem', border: '1px solid #e5e7eb', borderRadius: '4px', background: m === 'Week' ? '#f3f4f6' : 'white' }}>{m}</div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0' }}>
                                                                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
                                                                            <div key={d} style={{ padding: '8px', textAlign: 'center', fontSize: '0.6rem', borderBottom: '1px solid #e5e7eb', fontWeight: 700, color: '#6b7280' }}>{d}</div>
                                                                        ))}
                                                                        {[...Array(28)].map((_, i) => (
                                                                            <div key={i} style={{ borderRight: '1px solid #f3f4f6', borderBottom: '1px solid #f3f4f6', padding: '5px', height: '60px' }}>
                                                                                <div style={{ fontSize: '0.6rem', color: '#9ca3af' }}>{i + 1}</div>
                                                                                {i === 10 && (
                                                                                    <div style={{ background: '#3B82F6', color: '#fff', padding: '2px 4px', fontSize: '0.5rem', borderRadius: '2px', marginTop: '2px' }}>Cita - 4:30 PM</div>
                                                                                )}
                                                                                {i === 14 && (
                                                                                    <div style={{ background: '#10B981', color: '#fff', padding: '2px 4px', fontSize: '0.5rem', borderRadius: '2px', marginTop: '2px' }}>Demo - 11:00 AM</div>
                                                                                )}
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </motion.div>
                                                            )}

                                                            {activeSystemTab === 4 && (
                                                                <motion.div
                                                                    key="workflow"
                                                                    initial={{ opacity: 0 }}
                                                                    animate={{ opacity: 1 }}
                                                                    exit={{ opacity: 0 }}
                                                                    transition={{ duration: 0.2 }}
                                                                    style={{ height: '100%', background: '#f3f4f6', borderRadius: '8px', position: 'relative', overflow: 'hidden', padding: '20px' }}
                                                                >
                                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                                                                        <div style={{ background: '#fff', padding: '8px 12px', borderRadius: '6px', border: '1px solid #e5e7eb', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                                            <div style={{ width: '16px', height: '16px', background: '#10B981', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                                <Bot size={10} color="#fff" />
                                                                            </div>
                                                                            <span style={{ fontSize: '0.7rem', fontWeight: 700 }}>Trigger: Nueva Lead</span>
                                                                        </div>
                                                                        <div style={{ width: '1px', height: '20px', background: '#d1d5db' }} />
                                                                        <div style={{ background: '#fff', padding: '8px 12px', borderRadius: '6px', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                                            <Clock size={12} color="#8B5CF6" />
                                                                            <span style={{ fontSize: '0.7rem' }}>Esperar 1 día</span>
                                                                        </div>
                                                                        <div style={{ width: '1px', height: '20px', background: '#d1d5db' }} />
                                                                        <div style={{ display: 'flex', gap: '30px' }}>
                                                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                                                <div style={{ width: '50px', height: '1px', background: '#d1d5db', transform: 'rotate(-45deg)', transformOrigin: 'right center' }} />
                                                                                <div style={{ background: '#fff', padding: '8px 12px', borderRadius: '6px', border: '1px solid #e5e7eb', marginTop: '15px' }}>
                                                                                    <span style={{ fontSize: '0.65rem', color: '#6b7280' }}>Si abrió email</span>
                                                                                </div>
                                                                            </div>
                                                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                                                <div style={{ width: '50px', height: '1px', background: '#d1d5db', transform: 'rotate(45deg)', transformOrigin: 'left center' }} />
                                                                                <div style={{ background: '#fff', padding: '8px 12px', borderRadius: '6px', border: '1px solid #e5e7eb', marginTop: '15px' }}>
                                                                                    <span style={{ fontSize: '0.65rem', color: '#6b7280' }}>No abrió email</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div style={{ background: '#3B82F6', padding: '8px 12px', borderRadius: '6px', color: '#fff', marginTop: '10px' }}>
                                                                            <span style={{ fontSize: '0.7rem', fontWeight: 700 }}>Enviar WhatsApp Arely</span>
                                                                        </div>
                                                                    </div>
                                                                </motion.div>
                                                            )}

                                                            {activeSystemTab === 5 && (
                                                                <motion.div
                                                                    key="agent-tab"
                                                                    initial={{ opacity: 0 }}
                                                                    animate={{ opacity: 1 }}
                                                                    exit={{ opacity: 0 }}
                                                                    transition={{ duration: 0.2 }}
                                                                    style={{ height: '100%', background: '#fff', borderRadius: '8px', padding: '15px' }}
                                                                >
                                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                                                                        <div style={{ width: '40px', height: '40px', background: '#3B82F6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                            <Bot size={24} color="#fff" />
                                                                        </div>
                                                                        <div>
                                                                            <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>Arealyst Agent Settings</div>
                                                                            <div style={{ fontSize: '0.7rem', color: '#6b7280' }}>Configura tu inteligencia artificial</div>
                                                                        </div>
                                                                    </div>
                                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                                                        {[
                                                                            { label: 'Personalidad del Agente', value: 'Empático y Profesional' },
                                                                            { label: 'Canales Activos', value: 'WhatsApp, Instagram' },
                                                                            { label: 'Tiempo de Respuesta', value: 'Instantáneo' },
                                                                            { label: 'Objetivo Principal', value: 'Agendamiento de Citas' }
                                                                        ].map((item, i) => (
                                                                            <div key={i} style={{ padding: '10px', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
                                                                                <div style={{ fontSize: '0.6rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</div>
                                                                                <div style={{ fontSize: '0.75rem', fontWeight: 600 }}>{item.value}</div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Glow moved to parent level to center with screen */}
                                    </div>
                                    <div style={{ marginTop: '40px', zIndex: 20 }}>
                                        <Link to="/system" className="btn btn-primary">
                                            EXPLORAR SISTEMA <span>›</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* FEATURE 3: TU EQUIPO TRABAJA CON CLARIDAD */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '40px',
                    marginBottom: '280px',
                    position: 'relative',
                    marginTop: '260px',
                    paddingLeft: '80px',
                    paddingTop: '160px',
                    flexWrap: 'wrap'
                }} className="feature-block">

                    {/* Step 3 Background - Blue Circle */}
                    <div style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '800px', height: '800px', borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
                        filter: 'blur(20px)', zIndex: 0, pointerEvents: 'none'
                    }} />

                    {/* Text Column */}
                    <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', marginTop: '0', position: 'relative', zIndex: 2 }}>
                        {/* Huge Background Number */}
                        <motion.div
                            className="feature-step-number"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={{
                                position: 'absolute',
                                left: '-60px',
                                top: '-60px',
                                fontSize: 'clamp(10rem, 15vw, 15rem)',
                                fontWeight: 300,
                                lineHeight: 0.8,
                                background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.4) 0%, rgba(16, 185, 129, 0) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                zIndex: -1,
                                pointerEvents: 'none',
                                userSelect: 'none'
                            }}>
                            3
                        </motion.div>

                        <motion.div
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
                        >

                            <h3 style={{
                                fontSize: 'clamp(2.8rem, 6vw, 3.5rem)',
                                fontWeight: 300,
                                color: '#fff',
                                marginBottom: '32px',
                                letterSpacing: '-0.04em',
                                lineHeight: 1.1
                            }}>
                                Tu equipo <span style={{ color: '#fff', fontWeight: 500 }}>cierra.</span>
                            </h3>
                        </motion.div>

                        {/* Description Paragraph - Top */}
                        <motion.div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                marginTop: '0px',
                                marginBottom: '60px',
                                zIndex: 100,
                                position: 'relative'
                            }}
                        >
                            <p style={{
                                fontSize: '1.15rem',
                                color: 'rgba(255, 255, 255, 0.7)',
                                lineHeight: 1.6,
                                marginBottom: '0px',
                                maxWidth: '900px',
                                fontWeight: 300,
                                textAlign: 'left',
                                padding: '0',
                                letterSpacing: '-0.01em'
                            }}>
                                Con todo organizado en el <span style={{ fontWeight: 500, color: '#fff' }}>Arealyst System</span>, tu equipo sabe a quién llamar y qué hacer, sin usar libretas ni cuadros de Excel. Ven quién está listo para cerrar y quién necesita seguimiento, y se enfocan en lo más importante: cerrar la venta.
                            </p>
                        </motion.div>
                    </div>

                    {/* Visual Column */}
                    <div style={{ flex: '1 1 500px', width: '100%', position: 'relative', zIndex: 2 }}>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={{
                                position: 'relative',
                                width: '500px',
                                maxWidth: '95%',
                                height: '320px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '-40px 0 40px 0',
                                zIndex: 10
                            }}
                        >
                            {/* Central Celebratory Card */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={paymentIndex}
                                    initial={{ y: 20, opacity: 0, scale: 0.9 }}
                                    animate={{ y: 0, opacity: 1, scale: 1 }}
                                    exit={{ y: -20, opacity: 0, scale: 0.95 }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.16, 1, 0.3, 1]
                                    }}
                                    style={{
                                        willChange: 'transform, opacity',
                                        background: 'rgba(17, 24, 39, 0.95)',
                                        padding: '24px',
                                        borderRadius: '24px',
                                        textAlign: 'center',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '16px',
                                        boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 50px rgba(16, 185, 129, 0.1)',
                                        border: '1px solid rgba(16, 185, 129, 0.2)',
                                        width: '320px',
                                        position: 'relative',
                                        zIndex: 5
                                    }}
                                >
                                    {/* Animated Checkmark Circle */}
                                    <div
                                        style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            background: 'rgba(16, 185, 129, 0.1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: '2px solid #10B981'
                                        }}
                                    >
                                        <motion.div
                                            initial={{ scale: 0, rotate: -45 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                                        >
                                            <CheckCircle2 size={32} color="#10B981" />
                                        </motion.div>
                                    </div>

                                    <div>
                                        <div style={{ fontSize: '1rem', color: '#10B981', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                                            Venta Cerrada
                                        </div>
                                        <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>
                                            {payments[paymentIndex].amount}
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 16px', borderRadius: '12px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
                                            {payments[paymentIndex].name}
                                        </div>
                                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 16px', borderRadius: '12px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
                                            ID: {payments[paymentIndex].id}
                                        </div>
                                    </div>

                                    {/* Sparkle/Flash Effect on Arrival */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: [0, 0.4, 0], scale: [0.8, 1.4, 0.8] }}
                                        transition={{ duration: 0.6, times: [0, 0.5, 1] }}
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: '100%',
                                            height: '100%',
                                            background: 'radial-gradient(circle, #fff 0%, transparent 70%)',
                                            borderRadius: '32px',
                                            zIndex: 6,
                                            pointerEvents: 'none'
                                        }}
                                    />

                                    {/* Glow behind the card */}
                                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', height: '120%', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)', zIndex: -1, pointerEvents: 'none' }} />
                                </motion.div>
                            </AnimatePresence>

                            {/* Background Animated Elements - Pulsing waves */}
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={`wave-${i}`}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 2.5, opacity: [0, 0.15, 0] }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        delay: i * 1.2,
                                        ease: "easeOut"
                                    }}
                                    style={{
                                        position: 'absolute',
                                        width: '300px',
                                        height: '300px',
                                        borderRadius: '50%',
                                        border: '1px solid #10B981'
                                    }}
                                />
                            ))}

                            {/* Floating Payment Stream - Background activity */}
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={`stream-${i}`}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -150 : 150, y: 150 }}
                                    animate={{
                                        opacity: [0, 0.4, 0],
                                        x: i % 2 === 0 ? -250 : 250,
                                        y: -150,
                                        scale: [0.8, 1.1, 0.8]
                                    }}
                                    transition={{
                                        duration: 6 + i,
                                        repeat: Infinity,
                                        delay: i * 1.5,
                                        ease: "easeInOut"
                                    }}
                                    style={{
                                        position: 'absolute',
                                        background: 'rgba(16, 185, 129, 0.1)',
                                        padding: '8px 16px',
                                        borderRadius: '100px',
                                        border: '1px solid rgba(16, 185, 129, 0.15)',
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        color: '#10B981',
                                        zIndex: 2,
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    <Plus size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                                    {payments[(paymentIndex + i) % payments.length].amount}
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Glow removed */}

                    </div>
                </div>

            </div>
        </section >
    );
};

export default Features;
