'use client'
import { useState } from 'react';

interface CustomDialogProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    pdfFile: string; // Ruta al archivo PDF
}

export const CustomDialog = ({ title, isOpen, onClose, pdfFile }: CustomDialogProps) => {
    const [numPages, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
        setPageNumber(1); // Reinicia a la primera página al cargar un nuevo documento
    }

    const goToPrevPage = () => {
        setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
    };

    const goToNextPage = () => {
        setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 1, numPages));
    };

    return (
        isOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-black opacity-50 fixed inset-0" onClick={onClose}></div>
                <div className="bg-white rounded-lg shadow-lg z-50 max-w-6xl w-full ">
                    <div className="p-4 border-b flex justify-between items-center">
                        <h2 className="text-xl font-semibold">{title}</h2>
                        <button onClick={onClose} className="text-gray-500 text-3xl  hover:text-black">&times;</button>
                    </div>
                    <iframe
                        // src={pdfFile}
                        // src={`${pdfFile}#toolbar=0&navpanes=0&scrollbar=0`}
                        src={`${pdfFile}#navpanes=0`}

                        width=""
                        height=""
                        className='w-full h-[90dvh]'
                        style={{ border: 'none' }}
                    ></iframe>
                    {/* <div className="p-4 ]">
                        <div className="Example__container__document" style={{ width: "100%" }}>
                            <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                                <Page pageNumber={pageNumber} />
                            </Document>
                            <p>
                                Page {pageNumber} of {numPages}
                            </p>
                            <div className="flex justify-between">
                                <button onClick={goToPrevPage} disabled={pageNumber <= 1}>
                                    Previous
                                </button>
                                <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
                                    Next
                                </button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    );
};


