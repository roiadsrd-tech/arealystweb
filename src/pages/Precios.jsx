
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Pricing from '../components/Pricing';
import ComparisonTable from '../components/ComparisonTable';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Precios = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ backgroundColor: '#000', minHeight: '100vh' }}>
            <Navbar />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{ paddingTop: '100px' }}
            >
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px 20px', textAlign: 'center' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            fontSize: 'clamp(3rem, 8vw, 5rem)',
                            fontWeight: 400,
                            color: '#fff',
                            letterSpacing: '-0.02em',
                            marginBottom: '20px',
                            background: 'linear-gradient(90deg, #ffffff 0%, #ffffff 70%, #3b82f6 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        Precios
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}
                    >
                        Inversión clara para resultados extraordinarios. Escoge el plan que mejor se adapte a tu etapa actual.
                    </motion.p>
                </div>

                <Pricing showTitle={false} showBg={true} />
                <ComparisonTable />
            </motion.div>

            <Footer />
        </div>
    );
};

export default Precios;
