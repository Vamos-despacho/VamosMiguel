import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ICategory } from '@/interface/article'
interface Props {
    data: ICategory[]
    select?: any
    onChange: (selectedValue: string) => void;
}
const SelectObtions = ({ data, onChange, select }: Props) => {

    const [selectedValue, setSelectedValue] = useState<string | undefined>(select);

    const handleSelectChange = (e: string) => {

        setSelectedValue(e);
        onChange(e); // Llama a la función prop para pasar el valor seleccionado al padre
    };
    if (!data) return <p>Cargando categorias....</p>
    return (
        <Select onValueChange={handleSelectChange} value={selectedValue}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Categorias" />
            </SelectTrigger>
            <SelectContent>
                {
                    data.map((item, index) => (
                        <SelectItem key={index} value={item._id.toString()}>{item.name}</SelectItem>
                    ))
                }

            </SelectContent>
        </Select>

    )
}

export default SelectObtions