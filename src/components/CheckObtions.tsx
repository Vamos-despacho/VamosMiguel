
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { ITag } from "@/interface/article";


interface Props {
    data: ITag[];
    onChange: (selectedTags: string[]) => void;
    // Nueva propiedad para los tags seleccionados

}

const CheckOptions = ({ data, onChange, }: Props) => {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);



    function handleTagSelect(tagName: string) {
        if (selectedTags.includes(tagName)) {
            setSelectedTags(selectedTags.filter((tag) => tag !== tagName));
        } else {
            setSelectedTags([...selectedTags, tagName]);
        }

    }

    useEffect(() => {
        onChange(selectedTags)
    }, [selectedTags, onChange])

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 gap-2 ">
            {data.map((item, index) => (
                <div className="flex items-center gap-1" key={index}>
                    <Checkbox
                        id={item.name}
                        checked={selectedTags.includes(item.name)}
                        onCheckedChange={(checked) => {
                            handleTagSelect(item.name);
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

export default CheckOptions;
