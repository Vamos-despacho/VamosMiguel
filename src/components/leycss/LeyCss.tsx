"use client";
import React, { useState } from "react";
import { CustomDialog } from "../anteproyecto/EmergenteProyecto";
import { ExternalLink } from "lucide-react";
const titulo = "Proyecto de Ley que modificara la Ley 51 de 2005";
const link =
  "https://drive.google.com/file/d/1uzLhRXC8LiSxKvSqDWpHvTXX-mI72KMw/preview";
const LeyCss = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-col items-start gap-1">
        <button
          className="flex items-center justify-center"
          onClick={() => setIsOpen(true)}
        >
          <p className="flex items-center text-base cursor-pointer p-2 hover:underline hover:text-blue-400">
            Ver Proyecto de Ley 51
            <ExternalLink className="ml-2 h-4 w-4 text-blue-400" />
          </p>
        </button>
      </div>
      <CustomDialog
        title={titulo}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        pdfFile={link} // URL completa del archivo PDF
      />
    </div>
  );
};

export default LeyCss;
