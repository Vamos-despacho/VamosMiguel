'use client'
import { useEffect, useState } from 'react';
import { IoShareSocialOutline } from 'react-icons/io5';

export default function ShareButton() {
    const [isMobile, setIsMobile] = useState(false);

    // Detectar si el dispositivo es móvil
    useEffect(() => {
        setIsMobile(navigator.share !== undefined);
    }, []);

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Página Web',
                    text: 'Descubre y comparte los enlaces del Diputado Miguel Ángel Campos Lima:',
                    url: window.location.href,
                });
                console.log('Contenido compartido exitosamente');
            } catch (error) {
                console.error('Error al compartir', error);
            }
        }
    };

    return (
        <button
            onClick={handleShare}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors p-2 rounded-lg"
        >
            <IoShareSocialOutline className="h-5 w-5" />
            {isMobile ? 'Compartir' : 'Compartir en redes sociales'}
        </button>
    );
}
