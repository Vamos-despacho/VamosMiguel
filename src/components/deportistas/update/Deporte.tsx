"use client"
import { Button } from '@/components/ui/button'
import { ISport } from '@/models/salon/Atleta'
import { IoMdAddCircleOutline } from "react-icons/io";
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { updateSport } from '@/libs/salon/actions';

const DeporteUpdate = ({ deportes, name, id }: { deportes: ISport[], name: string, id: string }) => {
    const [formState, setFormState] = useState(deportes)

    // Manejar los cambios en los deportes
    const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const updatedDeportes = [...formState];
        updatedDeportes[index] = { ...updatedDeportes[index], [name]: value };
        setFormState(updatedDeportes);
    };

    // Añadir un nuevo deporte
    const addDeporte = () => {
        setFormState([...formState, { discipline: '', category: '' }]);
    };

    // Eliminar un deporte
    const removeDeporte = (index: number) => {
        const updatedDeportes = formState.filter((_, i) => i !== index);
        setFormState(updatedDeportes);
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formState);
        const data = {
            sports: formState,
            _id: id
        }
        console.log(data);
        const resp = await updateSport(data);
        console.log(resp);
    }
    return (
        <Dialog>
            <DialogTrigger>
                <div className='flex flex-col bg-white'>

                    {(deportes.length > 0) ? (
                        deportes.map((deporte, index) => (
                            <div className='flex gap-1 border border-gray-50 shadow-md p-1 rounded-sm' key={index}>
                                <span className='text-xs capitalize'>{deporte.discipline}</span>
                                <span className='text-xs capitalize'>{deporte.category}</span>
                            </div>
                        ))
                    ) : 'Agregar Deportes'}
                </div>

            </DialogTrigger>

            <DialogContent className="flex flex-col lg:max-h-[95dvh] md:max-w-2xl lg:max-w-4xl">
                <DialogTitle>Actualizar
                    <span className='ml-1 uppercase text-azulv'>
                        {name}
                    </span> </DialogTitle>
                <DialogDescription>
                    Actualiza o añade los deportes del atleta.
                </DialogDescription>
                <form onSubmit={handleSubmit}
                    className="flex flex-col gap-4">

                    {formState.map((deporte, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <Label htmlFor={`discipline-${index}`} className="text-gray-700 font-medium">Disciplina</Label>
                            <Input
                                className="p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                                name="discipline"
                                value={deporte.discipline}
                                onChange={(e) => handleInputChange(index, e)}
                                placeholder="Disciplina"
                            />

                            <Label htmlFor={`category-${index}`} className="text-gray-700 font-medium">Categoría</Label>
                            <Input
                                className="p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                                name="category"
                                value={deporte.category}
                                onChange={(e) => handleInputChange(index, e)}
                                placeholder="Categoría"
                            />

                            <Button
                                className="mt-2"
                                variant="destructive"
                                onClick={() => removeDeporte(index)}
                            >
                                Eliminar
                            </Button>
                        </div>
                    ))}

                    <Button type='button' className="flex items-center gap-2 mt-4" onClick={addDeporte}>
                        <IoMdAddCircleOutline /> Añadir Deporte
                    </Button>

                    <Button type="submit" className="mt-4">
                        Guardar Cambios
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default DeporteUpdate;
