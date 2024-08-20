'use client';

import React, { useState, useEffect } from 'react';
import vamosApi from '@/app/api/vamosApi';
import EventView from '@/components/dashboard/event/EventView';
import Pagination from '@/components/Pagination';
import { SkeletonTable } from '@/components/skeleton/TablaEventSkeletor';

const VerEventoPage = () => {
    const [events, setEvents] = useState([]);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true); // Estado de carga
    const [isFirstLoad, setIsFirstLoad] = useState(true); // Para manejar la primera carga
    const limit = 8;

    const fetchEvents = async (page: number) => {
        const desde = (page - 1) * limit;

        if (!isFirstLoad) {
            setLoading(true);  // Inicia el estado de carga solo después de la primera carga
        }

        try {
            const res = await vamosApi.get(`/events?desde=${desde}&limit=${limit}`);
            setEvents(res.data.events);
            setTotal(res.data.total);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);  // Finaliza el estado de carga
            if (isFirstLoad) setIsFirstLoad(false); // Desactiva la bandera de primera carga
        }
    };

    useEffect(() => {
        fetchEvents(currentPage);
    }, [currentPage]);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    return (
        <div className="h-full p-3">
            {loading && !isFirstLoad ? (
                <SkeletonTable />
            ) : (
                <EventView events={events} />
            )}

            <div className='flex justify-center mt-4'>
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(total / limit)}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default VerEventoPage;
