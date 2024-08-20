"use client";

import React from "react";
import { Button } from "./ui/button";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const maxPagesToShow = 3;
    const startPage = Math.max(1, Math.min(currentPage - Math.floor(maxPagesToShow / 2), totalPages - maxPagesToShow + 1));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    const PageButton: React.FC<{ pageNumber: number; isCurrent?: boolean }> = ({ pageNumber, isCurrent }) => (
        <Button
            aria-label={`Página ${pageNumber}`}
            variant="ghost"
            onClick={() => onPageChange(pageNumber)}
            className={`text-lg py-2 rounded ${isCurrent ? "text-red-500" : "text-gray-500"}`}
        >
            {pageNumber}
        </Button>
    );

    return (
        <div className="flex justify-center space-x-2">
            {currentPage > 1 && (
                <Button
                    aria-label="Página anterior"
                    variant="ghost"
                    onClick={() => onPageChange(currentPage - 1)}
                    className="text-base text-gray-500"
                >
                    Anterior
                </Button>
            )}
            {startPage > 1 && (
                <>
                    <PageButton pageNumber={1} />
                    {startPage > 2 && <span className="text-lg text-gray-500">...</span>}
                </>
            )}
            {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(pageNumber => (
                <PageButton key={pageNumber} pageNumber={pageNumber} isCurrent={pageNumber === currentPage} />
            ))}
            {endPage < totalPages && (
                <>
                    {endPage < totalPages - 1 && <span className="text-lg text-gray-500">...</span>}
                    <PageButton pageNumber={totalPages} />
                </>
            )}
            {currentPage < totalPages && (
                <Button
                    aria-label="Página siguiente"
                    variant="ghost"
                    onClick={() => onPageChange(currentPage + 1)}
                    className="text-base text-gray-500"
                >
                    Siguiente
                </Button>
            )}
        </div>
    );
};

export default Pagination;
