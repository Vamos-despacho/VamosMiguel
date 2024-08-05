import React from 'react';

interface EventImage {
    linkImagen: string[];
    titulo: string;
    descripcion?: string;
}

interface Props {
    eventoImagen?: EventImage[];
}

const ViewImagen: React.FC<Props> = ({ eventoImagen }) => {
    return (
        <div className="max-w-4xl mx-auto p-4 py-0 flex justify-center items-center">
            {eventoImagen && eventoImagen.length > 0 ? (
                eventoImagen.map((evento, index) => (
                    <div key={index} className="mb-8 lg:m-0 sm:m-10">
                        <div className="relative lg:w-full h-auto md:h-96 flex items-center justify-center">
                            {evento.linkImagen.map((src, imgIndex) => (
                                <img
                                    key={imgIndex}
                                    src={src}
                                    alt={evento.titulo}
                                    className="object-cover w-[450px] h-[400px] rounded-lg shadow-md"
                                />
                            ))}
                        </div>
                        <h2 className="text-xl font-semibold mt-6 text-gray-800">{evento.titulo}</h2>
                        {evento.descripcion && (
                            <p className="text-gray-600 mt-2">{evento.descripcion}</p>
                        )}
                    </div>
                ))
            ) : (
                <p className="text-gray-600">No hay información disponible.</p>
            )}
        </div>
    );
};

export default ViewImagen;
