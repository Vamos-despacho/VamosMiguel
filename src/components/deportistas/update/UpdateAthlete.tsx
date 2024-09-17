import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { IIAtleta } from '@/interface/atletas';
import { updateAtleta } from '@/libs/salon/actions';
import { provincias } from '@/app/api/data/provincias';
import {
  Dialog,
  DialogContent,
  DialogDescription, DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { GrUpdate } from "react-icons/gr";

interface UpdateAthleteProps {
  athlete: IIAtleta;
}

const UpdateAthlete = ({ athlete }: UpdateAthleteProps) => {
  const [formState, setFormState] = useState<IIAtleta>({
    _id: athlete._id,
    name: athlete.name,
    birthDate: athlete.birthDate,
    province: athlete.province,
    sports: athlete.sports,
    achievements: athlete.achievements,
    biography: athlete.biography,
    image: athlete.image,
    activeYears: athlete.activeYears,
    isHighlighted: athlete.isHighlighted,
    hallOfFameYear: athlete.hallOfFameYear,
    events: athlete.events,
    state: athlete.state,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    // Verificar si el tipo de input es checkbox
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormState((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      _id: formData.get('_id') as string,
      name: formData.get('name') as string,
      birthDate: new Date(formData.get('birthDate') as string),
      province: formData.get('province') as string,
      activeYears: formData.get('activeYears') as string,
      biography: formData.get('biography') as string,
      isHighlighted: formData.get('isHighlighted') === 'on',
      hallOfFameYear: formData.get('hallOfFameYear') ? parseInt(formData.get('hallOfFameYear') as string, 10) : undefined,
      image: formData.get('image') as string,
    };

    const resp = await updateAtleta(data);
    if (resp) {
      console.log('Atleta actualizado:', resp);
    } else {
      console.error('Error al actualizar el atleta');
    }
  };

  const formatDate = (date: Date | string) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toISOString().substring(0, 10);
  };

  return (
    <Dialog>
      <DialogTrigger className=' border p-1 bg-white rounded-sm hover:text-green-500'>
        <GrUpdate className="cursor-pointer h-4 w-4" />
      </DialogTrigger>
      <DialogContent className="flex flex-col lg:max-h-[95dvh] md:max-w-2xl lg:max-w-4xl">
        <DialogTitle>Actualizar Atleta</DialogTitle>
        <DialogDescription>
          Actualiza los datos del atleta
        </DialogDescription>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col w-full md:w-1/3 gap-2">
            <Input type='hidden' name='_id' value={formState._id} />
            <Label htmlFor="name" className="text-gray-700 font-medium">Nombre</Label>
            <Input
              className="p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Nombre"
            />
          </div>

          <div className="flex flex-col w-full md:w-1/3 gap-2">
            <Label htmlFor="birthDate" className="text-gray-700 font-medium">Fecha de nacimiento</Label>
            <Input
              name="birthDate"
              type="date"
              value={formatDate(formState.birthDate)}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="province" className="text-sm font-medium text-gray-700">Provincia</Label>
            <select
              name="province"
              value={formState.province || ''}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>Seleccione una provincia</option>
              {provincias.map((provincia) => (
                <option key={provincia._id} value={provincia._id}>
                  {provincia.name}
                </option>
              ))}
            </select>

          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Input
                type="checkbox"
                id="isHighlighted"
                name="isHighlighted"
                checked={formState.isHighlighted || false}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <Label htmlFor="isHighlighted" className="ml-2 block text-sm text-gray-900">¿Destacado?</Label>
            </div>

            <div className="flex items-center gap-2">
              <Input
                className="w-14"
                type="number"
                name="activeYears"
                value={formState.activeYears || ''}
                onChange={handleChange}
                placeholder="Años"
              />
              <Label htmlFor="activeYears" className="block text-sm text-gray-900">Años de Actividad</Label>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="biography" className="text-gray-700 font-medium">Biografía</Label>
            <Textarea
              name="biography"
              value={formState.biography || ''}
              onChange={handleChange}
              placeholder="Biografía"
            />
          </div>

          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Guardar
          </button>
        </form>
      </DialogContent>
    </Dialog>

  );
};

export default UpdateAthlete;
