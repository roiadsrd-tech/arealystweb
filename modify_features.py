import re

with open('src/components/Features.jsx', 'r') as f:
    text = f.read()

# 1. Title
text = re.sub(
    r"Esto es lo que instalamos\s*(<span[^>]*?>)\s*en tu negocio\.\s*(</span>)",
    r"Cómo funciona \1Arealyst\2",
    text
)
# We also need to add the subtitle right after the </h2> tag for the title.
# Let's find the `</h2>` that closes this header.
# A simpler way: Find "Esto es lo que instalamos" block and replace it entirely.
intro_pattern = r"(<h2[^>]*?>\s*)(Cómo funciona\s*<span[^>]*?>Arealyst</span>\s*</h2>)"
subtitle_insert = r"\1\2\n                    <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.6)', fontWeight: 300, lineHeight: 1.6, maxWidth: '700px', margin: '0 auto', marginTop: '20px' }}>\n                        Cuando un cliente escribe por Instagram o WhatsApp, esto es lo que pasa:\n                    </p>"
text = re.sub(intro_pattern, subtitle_insert, text)

# Just in case the first title sub wasn't enough (it didn't match maybe):
# Let's just do direct exact replaces:
text = text.replace("Esto es lo que instalamos", "Cómo funciona")
text = text.replace("en tu negocio.", "Arealyst")

if "Cuando un cliente escribe" not in text:
    text = text.replace('</h2>', "</h2>\n                    <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.6)', fontWeight: 300, lineHeight: 1.6, maxWidth: '700px', margin: '0 auto', marginTop: '20px' }}>Cuando un cliente escribe por Instagram o WhatsApp, esto es lo que pasa:</p>", 1)

# Step 1 Title Update
text = text.replace("IA Conversacional", "Paso 1")
text = text.replace(
    ">Arealyst Agent</h3>",
    ">El Agent atiende</h3>"
)
text = text.replace(">Arealyst Agent<", ">El Agent atiende<") # backup

# Step 1 Bottom Paragraph
text = text.replace(
    "Atención al cliente 24/7. Respuestas inmediatas como un humano para calificar prospectos y agendar citas en automático en tu negocio.",
    "<p style={{marginBottom: '10px'}}>El cliente pregunta por precio, disponibilidad o quiere una cita.</p><p style={{marginBottom: '10px'}}>El Arealyst Agent responde en segundos, usando la información real de tu negocio.</p><p style={{marginBottom: '10px'}}>Habla natural, como una persona.</p><p style={{marginBottom: '10px'}}>Hace preguntas simples y, si el cliente quiere, agenda la cita y la agrega automáticamente al calendario.</p>"
)

# Step 2 Title Update
text = text.replace("Gestión Total", "Paso 2")
text = text.replace(">Arealyst <span style={{ color: '#3B82F6' }}>System</span></h3>", ">El System <span style={{ color: '#3B82F6' }}>organiza todo</span></h3>")

# Step 2 Bottom Paragraph
text = text.replace(
    "Tu centro de comando. Unifica WhatsApp e Instagram en un solo lugar y visualiza tu pipeline de ventas con total claridad desde hoy.",
    "<p style={{marginBottom: '10px'}}>El Arealyst System es un programa al que tú y tu equipo entran desde la computadora.</p><p style={{marginBottom: '10px'}}>Ahí pueden ver todos los mensajes, los datos del cliente, en qué etapa está y sus citas en un solo lugar.</p><p style={{marginBottom: '10px'}}>También envía recordatorios y hace seguimientos automáticos para que nada se quede pendiente.</p>"
)

with open('src/components/Features.jsx', 'w') as f:
    f.write(text)

print("Text replaced successfully!")
