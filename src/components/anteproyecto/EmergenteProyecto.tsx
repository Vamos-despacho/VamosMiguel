"use client";
import React from "react";

interface CustomDialogProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  pdfFile: string;
}

export const CustomDialog = ({
  title,
  isOpen,
  onClose,
  pdfFile,
}: CustomDialogProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="bg-black opacity-50 fixed inset-0"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg shadow-lg z-50 max-w-3xl w-full">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 text-3xl hover:text-black"
          >
            &times;
          </button>
        </div>
        <iframe
          src={`${pdfFile}#navpanes=0`}
          width="100%"
          height="600px"
          allow="autoplay"
          className="w-full h-[90vh]"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </div>
  );
};
