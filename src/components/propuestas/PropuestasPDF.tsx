import { use, useEffect, useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';


const options = {
    cMapUrl: '/cmaps/',
    standardFontDataUrl: '/standard_fonts/',
};

type PDFFile = string | File | null;

const PropuestasPDF = ({ pag }: { pag: number }) => {

    useEffect(() => {
        setPageNumber(pag)
    }, [pag])


    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    return (

        <div className="Example__container__document " style={{ width: "100%" }}>
            <Document file="/Reforma.pdf" onLoadSuccess={onDocumentLoadSuccess} >
                <Page pageNumber={pageNumber}
                    className="bg-red-400 "

                />
            </Document>


        </div>


    );
}

export default PropuestasPDF;

