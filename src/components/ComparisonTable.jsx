
import React from 'react';
import { Check, Minus } from 'lucide-react';

const ComparisonTable = () => {
    const data = [
        {
            feature: "Atención automática 24/7",
            description: "IA que responde al instante a tus clientes",
            agent: "Responde al instante",
            system: "Responde al instante"
        },
        {
            feature: "Instagram y WhatsApp",
            description: "Conexión directa con tus redes sociales principales",
            agent: "Atiende ambos canales",
            system: "Ambos canales en un solo lugar"
        },
        {
            feature: "Entrenado con tu empresa",
            description: "Conoce tus precios, horarios y servicios",
            agent: "Usa tu info real",
            system: "Usa tu info real"
        },
        {
            feature: "Conversación natural",
            description: "Respuestas fluidas que no parecen un robot",
            agent: "Habla como persona",
            system: "Habla como persona"
        },
        {
            feature: "Responde preguntas comunes",
            description: "Resuelve dudas frecuentes sin intervención humana",
            agent: "✓",
            system: "✓"
        },
        {
            feature: "Recoge datos del cliente",
            description: "Captura nombres, teléfonos y necesidades",
            agent: "Nombre y necesidad",
            system: "Guarda todo en el sistema"
        },
        {
            feature: "Agenda citas automáticamente",
            description: "Sincronización directa con tu calendario",
            agent: "Agenda sola",
            system: "Agenda y registra"
        },
        {
            feature: "Notificación de cita",
            description: "Aviso inmediato por email o sistema interno",
            agent: "Por email",
            system: "Email + guardado interno"
        },
        {
            feature: "Inbox unificado",
            description: "Gestiona todos tus chats en un mismo panel",
            agent: false,
            system: "✓"
        },
        {
            feature: "Pipeline por etapas",
            description: "Visualiza el estado de cada oportunidad de venta",
            agent: false,
            system: "✓"
        },
        {
            feature: "Vista de oportunidades",
            description: "Control total sobre tus prospectos calificados",
            agent: false,
            system: "✓"
        },
        {
            feature: "Calendario interno",
            description: "Gestión de citas dentro de la plataforma",
            agent: false,
            system: "✓"
        },
        {
            feature: "Recordatorios automáticos",
            description: "Reduce faltas con avisos a tus clientes",
            agent: false,
            system: "✓"
        },
        {
            feature: "Historial completo",
            description: "Registro detallado de toda la interacción",
            agent: false,
            system: "✓"
        },
        {
            feature: "Seguimiento organizado",
            description: "Flujo de trabajo estructurado para cerrar ventas",
            agent: "Manual",
            system: "Seguimiento claro"
        },
        {
            feature: "Todo en un solo sistema",
            description: "La solución integral para escalar tu negocio",
            agent: false,
            system: "✓"
        },
    ];

    const cellStyle = {
        padding: '24px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        verticalAlign: 'middle',
        fontSize: '0.9rem',
        color: '#fff'
    };

    const firstCellStyle = {
        ...cellStyle,
        verticalAlign: 'top'
    };

    const headerCellStyle = {
        ...cellStyle,
        fontWeight: 600,
        backgroundColor: 'transparent',
        fontSize: '1rem',
        color: '#fff',
        padding: '32px 24px'
    };

    const renderValue = (val) => {
        if (val === "✓" || val === true) return <Check size={18} color="#fff" style={{ margin: '0 auto' }} />;
        if (val === false) return <Minus size={18} color="rgba(255, 255, 255, 0.2)" style={{ margin: '0 auto' }} />;
        return <span style={{ textAlign: 'center', display: 'block', width: '100%', fontSize: '0.85rem' }}>{val}</span>;
    };

    return (
        <section style={{ padding: '120px 0', backgroundColor: '#000' }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 768px) {
                    .comparison-table-header div {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        gap: 2px !important;
                    }
                    .comparison-table th, .comparison-table td {
                        padding: 12px 10px !important;
                        font-size: 0.75rem !important;
                    }
                    .comparison-table td div {
                        font-size: 0.8rem !important;
                    }
                    .comparison-table td div + div {
                        font-size: 0.65rem !important;
                    }
                    .comparison-table {
                        min-width: 450px !important;
                    }
                    .comparison-container {
                        padding: 0 10px !important;
                    }
                }
                `
            }} />
            <div className="comparison-container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
                <div style={{
                    width: '100%',
                    overflowX: 'auto',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    background: 'transparent'
                }}>
                    <table className="comparison-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
                        <thead>
                            <tr>
                                <th style={{ ...headerCellStyle, width: '35%' }}></th>
                                <th style={headerCellStyle} className="comparison-table-header">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span>Arealyst Agent</span>
                                        <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>RD$20,000</span>
                                    </div>
                                </th>
                                <th style={headerCellStyle} className="comparison-table-header">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span>Arealyst Agent + System</span>
                                        <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>RD$23,000</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index}>
                                    <td style={firstCellStyle}>
                                        <div style={{ fontWeight: 600, marginBottom: '4px' }}>{row.feature}</div>
                                        <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.4)', fontWeight: 300 }}>
                                            {row.description}
                                        </div>
                                    </td>
                                    <td style={cellStyle}>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            {renderValue(row.agent)}
                                        </div>
                                    </td>
                                    <td style={cellStyle}>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            {renderValue(row.system)}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
