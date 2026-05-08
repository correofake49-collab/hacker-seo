// Crear el elemento del botón flotante de WhatsApp
function createWhatsAppButton() {
    const whatsappFloat = document.createElement('div');
    whatsappFloat.className = 'whatsapp-float';
    
    const link = document.createElement('a');
    link.href = 'https://wa.me/79789128611';
    link.target = '_blank';
    
    const img = document.createElement('img');
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg';
    img.alt = 'WhatsApp';
    
    link.appendChild(img);
    whatsappFloat.appendChild(link);
    
    // Agregar estilos
    const styles = `
        .whatsapp-float {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
        }
        
        .whatsapp-float a {
            display: block;
            width: 60px;
            height: 60px;
            background: #25D366;
            border-radius: 50%;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
        }
        
        .whatsapp-float a:hover {
            transform: scale(1.1);
            background: #128C7E;
        }
        
        .whatsapp-float img {
            width: 60%;
            height: 60%;
            margin: 20%;
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    
    // Agregar el botón al final del body
    document.body.appendChild(whatsappFloat);
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', createWhatsAppButton); 