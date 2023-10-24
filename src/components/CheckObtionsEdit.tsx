
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { ITag } from "@/interface/article";

interface Props {
    data: ITag[];
    onChange: (selectedTags: ITag[]) => void; // Cambiado el tipo de parámetro
    selectedTagsData?: ITag[];
}

const CheckOptionsEdit = ({ data, onChange, selectedTagsData }: Props) => {

    // Utilizamos `selectedTagsData` como valor inicial del estado
    const [selectedTags, setSelectedTags] = useState<ITag[]>(selectedTagsData || []);

    function handleTagSelect(tag: ITag) {
        // Verificar si la etiqueta ya está seleccionada
        const isSelected = selectedTags.some((selectedTag) => selectedTag.name === tag.name);

        if (isSelected) {
            // Si la etiqueta ya está seleccionada, la eliminamos
            setSelectedTags(selectedTags.filter((selectedTag) => selectedTag.name !== tag.name));
        } else {
            // Si la etiqueta no está seleccionada, la añadimos
            setSelectedTags([...selectedTags, tag]);
        }

    }

    useEffect(() => {
        // Llamar a la función `onChange` cuando cambie `selectedTags`
        onChange(selectedTags);
    }, [selectedTags, onChange]);

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 gap-2">
            {data.map((item, index) => (
                <div className="flex items-center gap-1" key={index}>
                    <Checkbox
                        id={item.name}
                        checked={selectedTags.some((selectedTag) => selectedTag.name === item.name)}
                        onCheckedChange={(checked) => {
                            handleTagSelect(item); // Pasar el objeto `item` en lugar del nombre
                        }}
                    />
                    <label
                        htmlFor={item.name}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        {item.name}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default CheckOptionsEdit;
