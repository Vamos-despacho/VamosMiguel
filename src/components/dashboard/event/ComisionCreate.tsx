'use client'
import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { BsHeartPulse, BsFillCalendarFill, BsFillStarFill } from 'react-icons/bs'; // Ejemplos de iconos
import { IoIosMore } from 'react-icons/io';
import { PiUsersFourLight } from 'react-icons/pi';
import { SchoolIcon } from 'lucide-react';
import vamosApi from '@/app/api/vamosApi';

// Opciones de iconos que puedes mostrar al usuario para seleccionar
const iconOptions = [
    { value: 'PiUsersFourLight', label: 'Pleno', Icon: PiUsersFourLight },
    { value: 'BsHeartPulse', label: 'Salud', Icon: BsHeartPulse },
    { value: 'SchoolIcon', label: 'Educación', Icon: SchoolIcon },
    { value: 'IoIosMore', label: 'Otros', Icon: IoIosMore },
    // Agrega más iconos según sea necesario
];

interface CategoryFormValues {
    label: string;
    key: string;
    icon: string;
}

const ComisionCreate: React.FC = () => {
    const [formValues, setFormValues] = useState<CategoryFormValues>({
        label: '',
        key: '',
        icon: '',
    });
    const [errors, setErrors] = useState<{ [key in keyof CategoryFormValues]?: string }>({});
    const [selectedIconValue, setSelectedIconValue] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues(prev => ({ ...prev, [name]: value }));
    };

    const handleIconSelect = (iconValue: string) => {
        const selected = iconOptions.find(option => option.value === iconValue);
        if (selected) {
            setSelectedIconValue(iconValue);
            setFormValues(prev => ({ ...prev, icon: iconValue }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { label, key, icon } = formValues;
        const newErrors: { [key in keyof CategoryFormValues]?: string } = {};

        if (!label) newErrors.label = 'El nombre es obligatorio';
        if (!key) newErrors.key = 'La clave es obligatoria';
        if (!icon) newErrors.icon = 'El icono es obligatorio';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Aquí puedes hacer una solicitud para guardar la categoría en la base de datos
        console.log('Enviando datos:', formValues);

        const resp = await vamosApi.post('/events/createcomision', formValues);

        // Ejemplo de llamada a una API
        // await fetch('/api/categories', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formValues),
        // });
    };

    return (
        <form onSubmit={handleSubmit} className="w-80 p-4 bg-white rounded shadow-md">
            <h2 className="text-lg font-semibold mb-4">Crear Categoría</h2>
            <div className="mb-4">
                <label htmlFor="label" className="block text-sm font-medium text-gray-700">Nombre de la Categoría</label>
                <input
                    id="label"
                    name="label"
                    value={formValues.label}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
                {errors.label && <p className="text-red-600 text-xs mt-1">{errors.label}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="key" className="block text-sm font-medium text-gray-700">Clave de la Categoría</label>
                <input
                    id="key"
                    name="key"
                    value={formValues.key}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
                {errors.key && <p className="text-red-600 text-xs mt-1">{errors.key}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="icon" className="block text-sm font-medium text-gray-700">Icono</label>

                <input
                    id="icon"
                    name="icon"
                    value={selectedIconValue || formValues.icon}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                />

                {errors.icon && <p className="text-red-600 text-xs mt-1">{errors.icon}</p>}
            </div>
            <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded">Crear Categoría</button>
        </form>
    );
};

export default ComisionCreate;
