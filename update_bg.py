import re

with open("src/pages/ComoFunciona.jsx", "r") as f:
    text = f.read()

# Add imports for the new images
import_str = "import bg1 from '../assets/bg1_new.jpg';\nimport bg2 from '../assets/bg2_new.jpg';\n\nconst ComoFunciona ="
text = text.replace("const ComoFunciona =", import_str)

bg1_html = """
                {/* Background Image */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.4, zIndex: 0, pointerEvents: 'none', backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'screen' }} />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at center, transparent 0%, #000 70%)', zIndex: 0, pointerEvents: 'none' }} />
"""

bg2_html = """
                {/* Background Image */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.4, zIndex: 0, pointerEvents: 'none', backgroundImage: `url(${bg2})`, backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'screen' }} />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at center, transparent 0%, #000 70%)', zIndex: 0, pointerEvents: 'none' }} />
"""

# STEP 1 replacing Step Number overlay
text = text.replace(
    """<div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', fontSize: 'clamp(15rem, 30vw, 40rem)', fontWeight: 900, color: 'rgba(255, 255, 255, 0.02)', lineHeight: 0.8, zIndex: 0, pointerEvents: 'none', userSelect: 'none' }}>1</div>""",
    bg1_html + """\n                <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', fontSize: 'clamp(15rem, 30vw, 40rem)', fontWeight: 900, color: 'rgba(255, 255, 255, 0.02)', lineHeight: 0.8, zIndex: 0, pointerEvents: 'none', userSelect: 'none' }}>1</div>"""
)

# STEP 2
text = text.replace(
    """<div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', fontSize: 'clamp(15rem, 30vw, 40rem)', fontWeight: 900, color: 'rgba(255, 255, 255, 0.02)', lineHeight: 0.8, zIndex: 0, pointerEvents: 'none', userSelect: 'none' }}>2</div>""",
    bg2_html + """\n                <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', fontSize: 'clamp(15rem, 30vw, 40rem)', fontWeight: 900, color: 'rgba(255, 255, 255, 0.02)', lineHeight: 0.8, zIndex: 0, pointerEvents: 'none', userSelect: 'none' }}>2</div>"""
)

# STEP 3
text = text.replace(
    """<div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', fontSize: 'clamp(15rem, 30vw, 40rem)', fontWeight: 900, color: 'rgba(255, 255, 255, 0.02)', lineHeight: 0.8, zIndex: 0, pointerEvents: 'none', userSelect: 'none' }}>3</div>""",
    bg1_html + """\n                <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', fontSize: 'clamp(15rem, 30vw, 40rem)', fontWeight: 900, color: 'rgba(255, 255, 255, 0.02)', lineHeight: 0.8, zIndex: 0, pointerEvents: 'none', userSelect: 'none' }}>3</div>"""
)

with open("src/pages/ComoFunciona.jsx", "w") as f:
    f.write(text)

print("Added BG images.")
