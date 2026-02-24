import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';


const textBlocks = [
    "Pusiste anuncios en Instagram. Los interesados llegan. El celular explota.",
    "Intentas responderle a todos... pero nunca te pones al día. Le contestas a uno y entran 5 más.",
    "Mientras estás con tu familia... alguien más responde primero y se queda con el cliente.",
    "No estás perdiendo por falta de ganas. Estás perdiendo por falta de un sistema."
];

const WhySection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Calculate the scroll trigger point for the final text block (index 4)
    // The image reveal should start when we reach the last block
    const imageRevealTrigger = 4 / textBlocks.length; // 0.8 (80% through the scroll)

    // Map scroll progress to black overlay opacity
    // From 1.0 (fully black) to 0.15 (revealing image with contrast)
    const overlayOpacity = useTransform(
        scrollYProgress,
        [0, imageRevealTrigger, 1],
        [1, 1, 0.15]
    );

    return (
        <div
            ref={containerRef}
            style={{
                height: `${textBlocks.length * 40}vh`,
                position: 'relative'
            }}
        >
            {/* Fixed Background Image Layer (z-index: -2) REMOVED */}

            {/* Black Overlay (z-index: -1) - Fixed to black as image is removed */}
            <div
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: -1,
                    backgroundColor: '#000000',
                }}
            />

            {/* Scrollable Text Content */}
            <div style={{ position: 'relative', zIndex: 1 }}>
                {textBlocks.map((text, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                height: '40vh',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '0 15%'
                            }}
                        >
                            <motion.h2
                                initial={{ opacity: 0, filter: 'blur(10px)' }}
                                whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 1.5, delay: index === 0 ? 0.4 : 1.2, ease: [0.16, 1, 0.3, 1] }}
                                style={{
                                    fontSize: 'clamp(1.4rem, 4vw, 2.6rem)',
                                    fontWeight: 300,
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    textAlign: 'center',
                                    maxWidth: '900px',
                                    lineHeight: 1.2,
                                    letterSpacing: '-0.02em'
                                }}
                            >
                                {text}
                            </motion.h2>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WhySection;
