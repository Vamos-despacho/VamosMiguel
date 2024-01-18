

"use client"
import React, { FC, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'tailwindcss/tailwind.css'; // Agrega los estilos de Tailwind CSS
import './Sample.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
// Necesario para que react-pdf funcione con Next.js
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/build/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

interface PDFViewerProps {
    pdf: string;
    title: string;
    introText: string;
    numPage: number;
}

const PDFViewer: FC<PDFViewerProps> = ({ pdf, title, introText, numPage }) => {

    const [numPages, setNumPages] = useState<number>(numPage);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    const changePage = (offset: number) => {
        setPageNumber((prevPageNumber) => prevPageNumber + offset);
    };

    const previousPage = () => {
        changePage(-1);
    };

    const nextPage = () => {
        changePage(1);
    };
    const options: any = {
        workerSrc: `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/build/pdf.worker.min.js`,
    };
    // const options = {
    //     cMapUrl: '/cmaps/',
    //     standardFontDataUrl: '/standard_fonts/',
    // };


    return (
        <div className="Example__container__document " style={{ width: "100%" }}>

            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{introText}</p>
            <Document file={`/pdfs/${pdf}`} onLoadSuccess={onDocumentLoadSuccess} options={options}>
                <Page pageNumber={pageNumber}

                />
            </Document>
            <div className="mt-4">
                <p>
                    Página {pageNumber} de {numPages}
                </p>
                <button onClick={previousPage} disabled={pageNumber <= 1}>
                    Anterior
                </button>
                <button onClick={nextPage} disabled={pageNumber >= numPages}>
                    Siguiente
                </button>
            </div>
        </div>
    );
};

const TransparenciaPage = () => {
    return (
        <div className="container mx-auto my-8 p-8 ">
            <h1 className="text-3xl font-bold mb-4">Transparencia</h1>
            <p className="text-gray-600 mb-8">Bienvenido a nuestra sección de transparencia, donde compartimos información relevante sobre los compromisos, declaraciones y renuncias que asumimos como candidato a diputado. Creemos en la importancia de la honestidad y la claridad en la gestión pública, y queremos ofrecer a la comunidad acceso directo a documentos clave que reflejen nuestro compromiso con la transparencia.</p>

            <PDFViewer
                pdf="compromiso.pdf"
                title="Compromisos VAMOS"
                introText="En este documento, presentamos los compromisos que asumimos como parte de nuestro programa político. Estos compromisos abarcan áreas fundamentales que impactan directamente en la mejora de nuestra comunidad. Te invitamos a revisar detenidamente estos compromisos y a contactarnos si tienes alguna pregunta o inquietud."
                numPage={3}
            />
            <PDFViewer
                pdf="declaracion.pdf"
                title="Declaración de Conflicto de Intereses"
                introText="La Declaración de Conflicto de Intereses de la Coalición VAMOS establece las situaciones en las que se pueden presentar conflictos y cómo serán gestionados. Este documento refleja nuestro compromiso con la transparencia y la ética, asegurando que actuamos en el mejor interés de la comunidad."
                numPage={2}
            />
            <PDFViewer
                pdf="renuncia.pdf"
                title="Renuncia al Fuero Electoral Penal"
                introText="En este documento, presentamos nuestra renuncia expresa y genérica al fuero electoral penal. Valoramos la igualdad ante la ley y creemos en la rendición de cuentas. Esta renuncia refleja nuestro compromiso con un proceso electoral justo y transparente."
                numPage={1}
            />
        </div>
    );
};

export default TransparenciaPage;

// const Transparencia = () => {
//     return (
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24  ">
//             <div className="container mx-auto my-8 p-8 bg-gray-100">
//                 <h1 className="text-3xl font-bold mb-4">Sección de Transparencia</h1>
//                 <p className="text-gray-600 mb-8">Bienvenido a nuestra sección de transparencia, donde compartimos información relevante sobre los compromisos y el comportamiento ético que adoptamos como candidato a diputado. Creemos en la importancia de la honestidad y la claridad en la gestión pública, y queremos ofrecer a la comunidad acceso directo a documentos clave que reflejen nuestro compromiso con la transparencia.</p>

//                 <h2 className="text-2xl font-bold mb-2">Compromisos VAMOS</h2>
//                 <p className="text-gray-600 mb-4">En este documento, encontrarás los compromisos que asumimos como parte de nuestro programa político. Estos compromisos abarcan áreas fundamentales que impactan directamente en la mejora de nuestra comunidad. Te invitamos a revisar detenidamente estos compromisos y a contactarnos si tienes alguna pregunta o inquietud.</p>
//                 {/* <PDFViewer pdf="compromisos_vamos.pdf" /> */}

//                 <h2 className="text-2xl font-bold mb-2 mt-8">Manual de Comportamiento de los Candidatos de VAMOS</h2>
//                 <p className="text-gray-600 mb-4">El manual de comportamiento establece las pautas éticas y de conducta que todos los candidatos de nuestro partido deben seguir. Valoramos la integridad y el respeto en todas nuestras interacciones, y este documento es una guía para asegurar que nuestras acciones estén alineadas con estos principios. Consulta el manual para conocer más sobre nuestro compromiso con un comportamiento ético.</p>
//                 {/* <PDFViewer pdf="manual_comportamiento.pdf" /> */}
//             </div>
//         </div>

//     )
// }

// export default Transparencia