"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { FileDown, Loader } from "lucide-react"; // Importamos Loader como spinner

const Descarga = () => {
  const [loading30, setLoading30] = useState(false);
  const [loading100, setLoading100] = useState(false);

  const handleDownloadClick = (
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Spinner se muestra por 2 segundos
  };

  return (
    <div className="flex gap-3 mt-3 ml-2">
      <a
        href="/pdfs/30-dias.pdf"
        download
        onClick={() => handleDownloadClick(setLoading30)}
      >
        <Button
          className="w-full sm:w-auto shadow-md border hover:shadow-lg"
          variant="secondary"
        >
          {loading30 ? (
            <Loader className="animate-spin mr-2 h-4 w-4 " />
          ) : (
            <FileDown className="mr-2 h-4 w-4 text-teal-500 " />
          )}
          30 días
        </Button>
      </a>

      <a
        href="/pdfs/100-dias.pdf"
        download
        onClick={() => handleDownloadClick(setLoading100)}
      >
        <Button
          className="w-full sm:w-auto shadow-md border hover:shadow-lg"
          variant="secondary"
        >
          {loading100 ? (
            <Loader className="animate-spin mr-2 h-4 w-4" />
          ) : (
            <FileDown className="mr-2 h-4 w-4 text-teal-500 " />
          )}
          100 días
        </Button>
      </a>
    </div>
  );
};

export default Descarga;
