'use client';

import { useCallback, useState } from 'react';
// import { useResizeObserver } from '@wojtekmaj/react-hooks';


const resizeObserverOptions = {};

const maxWidth = 800;

type PDFFile = string | File | null;

const Deporte = ({ pag }: { pag: number }) => {
    const [file, setFile] = useState<PDFFile>('./Reforma.pdf');

    const [numPages, setNumPages] = useState<number>();
    const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
    const [containerWidth, setContainerWidth] = useState<number>();

    const onResize = useCallback<ResizeObserverCallback>((entries) => {
        const [entry] = entries;

        if (entry) {
            setContainerWidth(entry.contentRect.width);
        }
    }, []);

    //   useResizeObserver(containerRef, resizeObserverOptions, onResize);





    return (
        <div className="Example">

            <div className="Example__container">

                <div className="Example__container__document" ref={setContainerRef}>

                </div>
            </div>
        </div>
    );
}
export default Deporte;

