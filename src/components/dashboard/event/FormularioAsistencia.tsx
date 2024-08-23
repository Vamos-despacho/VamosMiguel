'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import vamosApi from '@/app/api/vamosApi';
import { SchoolIcon } from 'lucide-react';
import { BsHeartPulse } from 'react-icons/bs';
import { PiUsersFourLight } from 'react-icons/pi';
import { IoIosMore } from 'react-icons/io';

interface Categoria {
    _id: string;
    label: string;
    key: string;
    icon: string;
}

interface CategoriaSeleccionada {
    categoria: string;
    asistencia: number;
}

const MesForm: React.FC = () => {
    const [month, setMonth] = useState<string>(''); // Usa string para el input de fecha
    const [comisiones, setComisiones] = useState<Categoria[]>([]);
    const [selectedCategorias, setSelectedCategorias] = useState<CategoriaSeleccionada[]>([]);

    // Fetch categories when component mounts
    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const response = await vamosApi.get('/events/createcomision'); // Ajusta la URL si es necesario
                setComisiones(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategorias();
    }, []);

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMonth(event.target.value);
    };

    const handleCheckboxChange = (categoriaId: string) => {
        setSelectedCategorias((prev) => {
            const categoriaSeleccionada = prev.find(c => c.categoria === categoriaId);
            if (categoriaSeleccionada) {
                return prev.filter(c => c.categoria !== categoriaId);
            } else {
                return [...prev, { categoria: categoriaId, asistencia: 0 }];
            }
        });
    };

    const handleAsistenciaChange = (categoriaId: string, asistencia: number) => {
        setSelectedCategorias((prev) =>
            prev.map((c) =>
                c.categoria === categoriaId
                    ? { ...c, asistencia }
                    : c
            )
        );
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            await axios.post('/api/mes', {
                month, // Usa la fecha en formato string
                categorias: selectedCategorias.map((c) => ({
                    categoria: c.categoria,
                    asistencia: c.asistencia,
                })),
            });
            alert('Mes creado exitosamente');
        } catch (error) {
            console.error('Error creating mes:', error);
            alert('Error creating mes');
        }
    };

    const iconMap: Record<string, React.ComponentType> = {
        SchoolIcon,
        BsHeartPulse,
        PiUsersFourLight,
        IoIosMore,
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label>
                    Mes:
                    <input
                        type="date"
                        value={month}
                        onChange={handleDateChange}
                        required
                        className="ml-2 border p-2 rounded-md"
                    />
                </label>
            </div>

            {selectedCategorias.length > 0 && (
                <div className="border p-4 rounded-md shadow-md bg-gray-100">
                    <h3 className="text-lg font-semibold mb-2">Categorías Seleccionadas:</h3>
                    {selectedCategorias.map((categoria) => {
                        const categoriaInfo = comisiones.find(c => c._id === categoria.categoria);
                        return (
                            <div key={categoria.categoria} className="flex items-center mb-2">
                                <div className="mr-4">
                                    {categoriaInfo && iconMap[categoriaInfo.icon] && React.createElement(iconMap[categoriaInfo.icon])}
                                </div>
                                <div>
                                    <h4 className="font-semibold">{categoriaInfo?.label}</h4>
                                    <input
                                        type="number"
                                        value={categoria.asistencia}
                                        onChange={(e) => handleAsistenciaChange(categoria.categoria, parseFloat(e.target.value))}
                                        placeholder="Asistencia (%)"
                                        className="border p-2 rounded-md ml-2"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            <div className="flex flex-col space-y-4">
                {comisiones.map((comision) => {
                    const IconComponent = iconMap[comision.icon];
                    const isSelected = selectedCategorias.some(c => c.categoria === comision._id);
                    return (
                        <div key={comision._id} className="border p-4 rounded-md shadow-md flex items-center">
                            <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => handleCheckboxChange(comision._id)}
                                className="mr-4"
                            />
                            <div className="mr-4">
                                {IconComponent ? <IconComponent /> : <span>Icon not found</span>}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">{comision.label}</h3>
                                <p className="text-gray-600">{comision.key}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Crear Mes
            </button>
        </form>
    );
};

export default MesForm;
