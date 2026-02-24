import re

with open("src/pages/ComoFunciona.jsx", "r") as f:
    text = f.read()

start_marker = "            {/* Step 1: Llega el mensaje */}"
end_marker = "            {/* Final Results Section */}"

start_idx = text.find(start_marker)
end_idx = text.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Markers not found.")
    exit(1)

new_content = """            {/* Step 1: El Agent atiende */}
            <StepContainer 
                stepNum="1" 
                title={<>El Agent <br/><span style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>atiende</span></>}
                bgImage={hero3}
                description={
                    <>
                        <p>El cliente pregunta por precio, disponibilidad o quiere una cita.</p>
                        <p>El Arealyst Agent responde en segundos, usando la información real de tu negocio.</p>
                        <p>Habla natural, como una persona.</p>
                        <p>Hace preguntas simples y, si el cliente quiere, agenda la cita y la agrega automáticamente al calendario.</p>
                    </>
                }
            >
                {/* iPhone Mockup (Scaled down slightly for the layout) */}
                <div style={{ position: 'relative', width: '280px', height: '560px' }}>
                    <img src={iphoneFrame} alt="iPhone Frame" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'contain', zIndex: 10, pointerEvents: 'none' }} />
                    <div style={{
                        position: 'absolute', top: '16px', left: '16px', right: '16px', bottom: '16px',
                        backgroundColor: '#0b141a', backgroundImage: `url(${whatsBg})`, backgroundSize: 'cover',
                        borderRadius: '38px', overflow: 'hidden', zIndex: 1, display: 'flex', flexDirection: 'column'
                    }}>
                        <div style={{ background: '#202c33', paddingTop: '40px', paddingBottom: '8px', zIndex: 20 }}>
                            <div style={{ padding: '0 10px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <ChevronLeft size={22} color="#0A84FF" />
                                <div style={{ width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden' }}>
                                    <img src={arelyProfile} alt="Agent" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ flex: 1, marginLeft: '4px' }}>
                                    <div style={{ fontSize: '11px', fontWeight: 600, color: '#fff' }}>Arealyst Agent</div>
                                    <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.5)' }}>En línea</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ flex: 1, padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'flex-end', paddingBottom: '30px' }}>
                            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} style={{ alignSelf: 'flex-end', background: '#005c4b', color: '#fff', padding: '8px 12px', borderRadius: '12px 0 12px 12px', fontSize: '0.8rem', maxWidth: '85%' }}>
                                Hola, ¿tienen disponibilidad para una limpieza dental mañana por la tarde? ¿Y cuál es el precio?
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} style={{ alignSelf: 'flex-start', background: '#202c33', color: '#fff', padding: '8px 12px', borderRadius: '0 12px 12px 12px', fontSize: '0.8rem', maxWidth: '85%' }}>
                                ¡Hola! Claro que sí, tenemos espacios disponibles mañana a las 3:00 PM y a las 4:30 PM.
                                La limpieza profunda tiene un costo de $2,500. ¿Cuál horario prefieres?
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 2.5 }} style={{ alignSelf: 'center', marginTop: '10px' }}>
                                <div style={{ background: '#10B981', color: '#fff', padding: '8px 16px', borderRadius: '16px', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
                                    <CheckCircle2 size={16} /> Cita Agendada: Mañana 3:00 PM
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </StepContainer>

            {/* Step 2: El System organiza todo */}
            <StepContainer 
                stepNum="2" 
                title={<>El System <br/><span style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>organiza todo</span></>}
                bgImage={price1}
                description={
                    <>
                        <p>El Arealyst System es un programa al que tú y tu equipo entran desde la computadora.</p>
                        <p>Ahí pueden ver todos los mensajes, los datos del cliente, en qué etapa está y sus citas en un solo lugar.</p>
                        <p>También envía recordatorios y hace seguimientos automáticos para que nada se quede pendiente.</p>
                    </>
                }
            >
                {/* System Dashboard Mockup */}
                <div style={{
                    width: '100%',
                    maxWidth: '500px',
                    height: '320px',
                    background: '#111827',
                    borderRadius: '16px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden'
                }}>
                    {/* Header */}
                    <div style={{ height: '40px', background: '#0F172A', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', padding: '0 16px', gap: '8px' }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
                        <div style={{ flex: 1, textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', fontWeight: 500 }}>arealyst.app/dashboard</div>
                    </div>
                    {/* Content Area */}
                    <div style={{ display: 'flex', flex: 1 }}>
                        {/* Sidebar */}
                        <div style={{ width: '120px', borderRight: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', padding: '16px 0', gap: '8px' }}>
                            {['Dashboard', 'Oportunidades', 'Contactos', 'Calendario'].map((item, i) => (
                                <div key={i} style={{
                                    padding: '8px 16px',
                                    color: i === 1 ? '#fff' : 'rgba(255,255,255,0.4)',
                                    fontSize: '0.7rem',
                                    background: i === 1 ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                                    borderLeft: i === 1 ? '2px solid #3B82F6' : '2px solid transparent',
                                    fontWeight: i === 1 ? 600 : 400
                                }}>
                                    {item}
                                </div>
                            ))}
                        </div>
                        {/* Kanban View */}
                        <div style={{ flex: 1, padding: '16px', display: 'flex', gap: '12px', background: '#F9FAFB' }}>
                            {['Lead', 'En Conversación', 'Cita Agendada'].map((stage, i) => (
                                <div key={i} style={{ flex: 1, background: '#F3F4F6', borderRadius: '8px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#111827', textTransform: 'uppercase' }}>{stage}</div>
                                    <div style={{ background: '#fff', padding: '10px', borderRadius: '6px', border: '1px solid #E5E7EB', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                                        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#111827', marginBottom: '4px' }}>Carlos P.</div>
                                        <div style={{ fontSize: '0.6rem', color: '#6B7280' }}>$2,500.00</div>
                                    </div>
                                    {i === 1 && (
                                        <div style={{ background: '#fff', padding: '10px', borderRadius: '6px', border: '1px solid #E5E7EB', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', opacity: 0.5 }}>
                                            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#111827', marginBottom: '4px' }}>María R.</div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </StepContainer>

            {/* Step 3: Tu equipo trabaja con claridad */}
            <StepContainer 
                stepNum="3" 
                title={<>Tu equipo trabaja <br/><span style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>con claridad</span></>}
                bgImage={last2}
                description={
                    <>
                        <p>Tu equipo no tiene que buscar chats ni adivinar qué pasó.</p>
                        <p>Desde el System ven todo organizado en un solo lugar: mensajes, clientes y citas.</p>
                        <p>Ya no hay que anotar en libretas ni llevar cuadros de Excel.</p>
                        <p>Continúan cada conversación sabiendo qué se habló y qué sigue.</p>
                    </>
                }
            >
                <div style={{
                    width: '100%',
                    maxWidth: '450px',
                    background: '#fff',
                    borderRadius: '24px',
                    padding: '24px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                    position: 'relative'
                }}>
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
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
                            className="btn btn-primary"
                            style={{ padding: '0 24px', height: '40px', borderRadius: '100px', fontWeight: 600, cursor: 'pointer', fontSize: '0.8rem' }}
                        >
                            Enviar
                        </motion.button>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, type: 'spring' }}
                        style={{
                            position: 'absolute',
                            bottom: -20,
                            right: -20,
                            background: '#111827',
                            color: '#fff',
                            padding: '12px 20px',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                        }}
                    >
                        <Layout size={20} color="#3B82F6" />
                        <div>
                            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)' }}>Transición Perfecta</div>
                            <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>Toma el control 1-click</div>
                        </div>
                    </motion.div>
                </div>
            </StepContainer>
"""

with open("src/pages/ComoFunciona.jsx", "w") as f:
    f.write(text[:start_idx] + new_content + text[end_idx:])

print("Successfully replaced.")
