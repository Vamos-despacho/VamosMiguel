'use client'
import { CustomDialog } from '@/components/anteproyecto/EmergenteProyecto';
import { Button } from '@/components/ui/button';
import { FileTextIcon } from 'lucide-react';
import React, { useState } from 'react'


const LeyesList = ({ title, pdfFile }: { title: string, pdfFile: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='ml-2  flex'>

            <button
                onClick={() => setIsOpen(true)}
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground"            >
                <FileTextIcon className="h-5 w-5" />
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