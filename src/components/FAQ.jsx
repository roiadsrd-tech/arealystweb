
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';


const faqs = [
    {
        q: "¿Qué pasa si el Arealyst Agent se equivoca?",
        a: `Ninguna IA es perfecta.

Es muy raro que ocurra porque trabaja con información validada por tu empresa y solo responde preguntas básicas y agenda citas.

Si llega a pasar:
• Puedes tomar control desde el Arealyst System.
• Nos contactas y lo resolvemos rápido.`
    },
    {
        q: "Mi equipo no es tecnológico… ¿podrán usar el sistema?",
        a: `Sí.

Es simple. Tan simple que el Arealyst System tiene un asistente integrado dentro del panel que guía a tu equipo si tiene dudas.

Además, durante la instalación entrenamos a tu personal para que lo dominen desde el primer día.`
    },
    {
        q: "¡Los chatbots no sirven! ¿Qué hace diferente al Arealyst Agent de los demás?",
        a: `Los bots antiguos funcionan con mensajes predeterminados. Si el cliente escribe algo distinto, se bloquean o repiten lo mismo.

Arealyst Agent utiliza modelos avanzados como ChatGPT, Gemini o Claude.

Eso le permite entender contexto, responder de forma natural y guiar la conversación hacia una cita real.

La era de los bots rígidos ya pasó, ahora son indistinguibles a un humano.`
    },
    {
        q: "¿Reemplaza a mi equipo?",
        a: `No.

Automatiza lo repetitivo: responder precios, horarios, ubicación, disponibilidad, confirmar citas y enviar recordatorios.
Tu equipo se enfoca en cerrar, atender y resolver lo importante.`
    },
    {
        q: "¿Qué pasa si el cliente hace una pregunta compleja?",
        a: `Si la IA detecta una pregunta muy compleja o fuera de su base de conocimiento, transfiere la conversación automáticamente a un humano.

Además, tu equipo tiene acceso total en el Arealyst System a todas las conversaciones y puede tomar control en cualquier momento.

La IA organiza y agenda. El humano decide.`
    },
    {
        q: "¿Cómo sé que aumentará mis resultados?",
        a: `Los números no mienten:

• 78% de las personas nunca responden si tardas más de 10 minutos en el primer mensaje.
• 80% de las ventas ocurren después de 8+ seguimientos, pero 48% deja de insistir después del primero.

Arealyst responde en segundos, automatiza seguimientos y elimina carga administrativa para tus empleados.

Menos tiempo perdido.
Más conversaciones activas.
Más cierres.`
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>

            <div className="container" style={{ maxWidth: '900px', position: 'relative', zIndex: 1 }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        textAlign: 'center',
                        marginBottom: '60px',
                        fontWeight: 400,
                        letterSpacing: '-0.02em',
                        background: 'linear-gradient(90deg, #ffffff 50%, #3b82f6 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}
                >
                    Preguntas frecuentes
                </motion.h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial="initial"
                            whileInView="visible"
                            whileHover="hovered"
                            viewport={{ once: true }}
                            variants={{
                                initial: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                                hovered: {
                                    y: -8,
                                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), 10px 10px 30px rgba(59, 130, 246, 0.25)'
                                }
                            }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            style={{
                                position: 'relative',
                                background: 'rgba(10, 10, 10, 0.4)',
                                backdropFilter: 'blur(10px)',
                                WebkitBackdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '20px',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Gradient Border Layer */}
                            <motion.div
                                variants={{
                                    initial: { opacity: 0 },
                                    hovered: { opacity: 1 }
                                }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    padding: '1.5px', // slightly thicker for impact
                                    borderRadius: '20px',
                                    background: 'linear-gradient(135deg, #000000 0%, #3b82f6 100%)',
                                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                    WebkitMaskComposite: 'xor',
                                    maskComposite: 'exclude',
                                    pointerEvents: 'none',
                                    zIndex: 2
                                }}
                            />

                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                style={{
                                    width: '100%',
                                    padding: '24px 32px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    textAlign: 'left',
                                    background: 'none',
                                    border: 'none',
                                    color: 'white',
                                    cursor: 'pointer'
                                }}
                            >
                                <span style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 500,
                                    opacity: activeIndex === index ? 1 : 0.8,
                                    transition: 'opacity 0.3s ease'
                                }}>
                                    {faq.q}
                                </span>
                                <div style={{
                                    color: activeIndex === index ? '#3b82f6' : 'rgba(255, 255, 255, 0.3)',
                                    transition: 'color 0.3s ease'
                                }}>
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div style={{
                                            padding: '0 32px 32px 32px',
                                            fontSize: '0.95rem',
                                            lineHeight: 1.6,
                                            color: 'rgba(255, 255, 255, 0.5)',
                                            fontWeight: 300,
                                            whiteSpace: 'pre-line'
                                        }}>
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
