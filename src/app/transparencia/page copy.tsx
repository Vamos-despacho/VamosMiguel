"use client"
import React, { FC, useState } from 'react';
import 'tailwindcss/tailwind.css'; // Agrega los estilos de Tailwind CSS

interface ImageViewerProps {
    images: string[];
    title: string;
    introText: string;
}

const ImageViewer: FC<ImageViewerProps> = ({ images, title, introText }) => {
    const [pageNumber, setPageNumber] = useState(1);
    const imagesPerPage = 1; // Cambia esto al número de imágenes que deseas mostrar por página

    const totalPages = Math.ceil(images.length / imagesPerPage);

    const startImageIndex = (pageNumber - 1) * imagesPerPage;
    const endImageIndex = startImageIndex + imagesPerPage;

    const currentImages = images.slice(startImageIndex, endImageIndex);

    const changePage = (newPage: number) => {
        setPageNumber(Math.min(Math.max(newPage, 1), totalPages));
    };

    const previousPage = () => {
        changePage(pageNumber - 1);
    };

    const nextPage = () => {
        changePage(pageNumber + 1);
    };

    return (
        <div className="Example__container__document" style={{ width: "100%" }}>
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{introText}</p>

            {currentImages.map((image, index) => (
                <div key={index} className="mb-4">
                    <img src={`/images/${image}`} alt={title} style={{ width: '100%' }} />
                </div>
            ))}

            <div className="mt-4">
                <p>
                    Página {pageNumber} de {totalPages}
                </p>
                <button onClick={previousPage} disabled={pageNumber <= 1}>
                    Anterior
                </button>
                <button onClick={nextPage} disabled={pageNumber >= totalPages}>
                    Siguiente
                </button>
            </div>
        </div>
    );
};

const TransparenciaPage: FC = () => {
    const compromisoImages = ['compromiso1.jpg', 'compromiso2.jpg', 'compromiso3.jpg'];  // Agrega tus nombres de imágenes
    const declaracionImages = ['declaracion1.jpg', 'declaracion2.jpg', 'declaracion3.jpg'];  // Agrega tus nombres de imágenes
    const renunciaImages = ['renuncia1.jpg', 'renuncia2.jpg', 'renuncia3.jpg'];  // Agrega tus nombres de imágenes

    return (
        <div className="container mx-auto my-8 p-8 ">
            <h1 className="text-3xl font-bold mb-4">Transparencia</h1>
            <p className="text-gray-600 mb-8">
                Bienvenido a nuestra sección de transparencia, donde compartimos información relevante sobre los compromisos, declaraciones y renuncias que asumimos como candidato a diputado. Creemos en la importancia de la honestidad y la claridad en la gestión pública, y queremos ofrecer a la comunidad acceso directo a documentos clave que reflejen nuestro compromiso con la transparencia.
            </p>

            <ImageViewer
                images={compromisoImages}
                title="Compromisos VAMOS"
                introText="En estas imágenes, presentamos los compromisos que asumimos como parte de nuestro programa político. Estos compromisos abarcan áreas fundamentales que impactan directamente en la mejora de nuestra comunidad. Te invitamos a revisar detenidamente estos compromisos y a contactarnos si tienes alguna pregunta o inquietud."
            />
            <ImageViewer
                images={declaracionImages}
                title="Declaración de Conflicto de Intereses"
                introText="La Declaración de Conflicto de Intereses de la Coalición VAMOS establece las situaciones en las que se pueden presentar conflictos y cómo serán gestionados. Este documento refleja nuestro compromiso con la transparencia y la ética, asegurando que actuamos en el mejor interés de la comunidad."
            />
            <ImageViewer
                images={renunciaImages}
                title="Renuncia al Fuero Electoral Penal"
                introText="En estas imágenes, presentamos nuestra renuncia expresa y genérica al fuero electoral penal. Valoramos la igualdad ante la ley y creemos en la rendición de cuentas. Esta renuncia refleja nuestro compromiso con un proceso electoral justo y transparente."
            />
        </div>
    );
};

export default TransparenciaPage;
