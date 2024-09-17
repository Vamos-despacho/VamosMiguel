'use client'
import { IEventDeporte } from '@/interface/atletas';


import { provincias } from '@/app/api/data/provincias';
import { createAtleta } from '@/libs/salon/actions';
import { useToast } from '../ui/use-toast';


const DeportistaForm = ({ events }: { events: IEventDeporte[] }) => {
    const { toast } = useToast();


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const form = e.target as HTMLFormElement
        // Conversión de FormData a un objeto JS
        const data = {
            name: formData.get('name') as string,
            birthDate: new Date(formData.get('birthDate') as string),
            province: formData.get('province') as string,
            activeYears: formData.get('activeYears') as string,
            biography: formData.get('biography') as string,
            isHighlighted: formData.get('isHighlighted') === 'on',
            hallOfFameYear: formData.get('hallOfFameYear') ? parseInt(formData.get('hallOfFameYear') as string, 10) : undefined,
            image: formData.get('image') as string,
        };

        // Aquí puedes manejar la lógica de envío del formulario
        console.log(data);
        const resp = await createAtleta(data)
        if (resp) {
            toast({
                variant: "default",
                title: "Evento creado",
                description: "El evento ha sido creado exitosamente",
            })
            form.reset()
        } else {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Ha ocurrido un error al crear el evento",
            })
        }
    };

    return (
        <div className='w-full'>
            {/* <div className=''>
                <h3 className='text-xl font-semibold'>Eventos</h3>
                <div className='p-4 flex gap-3'>

                    {events.map((evento) => (
                        <div
                            onClick={() => setSelectEvent(evento._id)}
                            key={evento._id}
                            className={`bg-gray-100 px-4 py-2 mt-4 rounded-md first-letter cursor-pointer 
                        ${evento._id === selectEvent ? 'shadow-lg bg-green-100' : 'opacity-80'}`}>
                            <h4 className='text-base font-semibold'>{evento.name}</h4>
                            <p className='text-sm text-gray-500'>{evento.year}</p>
                            <p className='text-sm text-gray-500'>{evento.location}</p>
                        </div>
                    ))}
                </div>
            </div> */}

            <div className='flex gap-4'>
                <form onSubmit={handleSubmit} className="w-[40%]  bg-white shadow-md rounded-md p-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Registro de Deportista</h2>

                    {/* Nombre */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className='flex justify-between'>
                        {/* Fecha de Nacimiento */}
                        <div className="mb-4">
                            <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
                            <input
                                type="date"
                                id="birthDate"
                                name="birthDate"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"

                            />
                        </div>

                        {/* Provincia */}
                        <div className="mb-4">
                            <label htmlFor="province" className="block text-sm font-medium text-gray-700">Provincia</label>
                            <select
                                name="province"
                                id="province"
                                defaultValue=""
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="" disabled>
                                    Seleccione una provincia
                                </option>
                                {provincias.map((provincia) => (
                                    <option key={provincia._id} value={provincia._id}>
                                        {provincia.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Años Activo */}
                    <div className="mb-4">
                        <label htmlFor="activeYears" className="block text-sm font-medium text-gray-700">Años Activo</label>
                        <input
                            type="text"
                            id="activeYears"
                            name="activeYears"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"

                        />
                    </div>

                    {/* Biografía */}
                    <div className="mb-4">
                        <label htmlFor="biography" className="block text-sm font-medium text-gray-700">Biografía</label>
                        <textarea
                            id="biography"
                            name="biography"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            rows={3}
                        />
                    </div>

                    {/* Destacado */}
                    <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            id="isHighlighted"
                            name="isHighlighted"
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="isHighlighted" className="ml-2 block text-sm text-gray-900">¿Destacado?</label>
                    </div>

                    {/* <div>
                        <Switch id="airplane-mode" />
                        <label htmlFor="isHighlighted" className="ml-2 block text-sm text-gray-900">Estado</label>
                    </div> */}

                    {/* Año en Salón de la Fama */}
                    <div className="mb-4">
                        <label htmlFor="hallOfFameYear" className="block text-sm font-medium text-gray-700">Año en el Salón de la Fama</label>
                        <input
                            type="number"
                            id="hallOfFameYear"
                            name="hallOfFameYear"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Imagen */}
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Imagen</label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Guardar Deportista
                    </button>
                </form>

                {/* <div className=' w-full max-w-xl'>
                    <h3 className='text-xl font-semibold'>Crear Evento</h3>
                    <CrearEvento />
                </div> */}
            </div>
        </div>
    );
};

export default DeportistaForm;
