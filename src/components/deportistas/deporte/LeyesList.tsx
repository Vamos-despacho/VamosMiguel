'use client'
import { CustomDialog } from '@/components/anteproyecto/EmergenteProyecto';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'


const LeyesList = ({ title, pdfFile }: { title: string, pdfFile: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='ml-3'>


            <button
                onClick={() => setIsOpen(true)}
                rel="noopener noreferrer"
                className="relative text-blue-600 font-medium focus:outline-none after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
                {title}
            </button>


            <CustomDialog
                title={title}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                pdfFile={pdfFile} // URL completa del archivo PDF
            />


        </div>
    )
}

export default LeyesList