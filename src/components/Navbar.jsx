
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isPreciosPage = location.pathname === '/precios';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        if (location.pathname !== '/') {
            window.location.href = `/${id}`;
            return;
        }
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 ${scrolled || isPreciosPage ? 'backdrop-blur-md border-b bg-black/50 border-white/10' : 'bg-transparent'}`}>
            <div className="container flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3 decoration-none" style={{ textDecoration: 'none' }}>
                    <svg width="24" height="20" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 24L8 0H14L6 24H0Z" fill="white" />
                        <path d="M9 24L17 0H23L15 24H9Z" fill="white" />
                        <path d="M18 24L26 0H32L24 24H18Z" fill="white" />
                    </svg>
                    <span style={{ fontWeight: 400, fontSize: '1.1rem', letterSpacing: '-0.02em', color: '#fff' }}>Arealyst</span>
                </Link>

                <div className="flex items-center gap-8">
                    <div className="hidden md-flex items-center gap-8">
                        <Link to="/" onClick={() => scrollToSection('#how-it-works')} className="text-secondary transition-all hover:text-white" style={{ fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none' }}>Cómo funciona</Link>
                        <Link to="/" onClick={() => scrollToSection('#features')} className="text-secondary transition-all hover:text-white" style={{ fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none' }}>Funciones</Link>
                        <Link to="/precios" className="text-secondary transition-all hover:text-white" style={{ fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none' }}>Precios</Link>
                    </div>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }} className="btn btn-primary">
                        CONTACTO
                        <span>›</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
