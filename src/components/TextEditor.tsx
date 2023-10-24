
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Estilos de Quill

interface Props {
    value: string;
    onChange: (newValue: string) => void;
}
const TextEditor = ({ value, onChange }: Props) => {
    const [text, setText] = useState(value);


    const handleTextChange = (newValue: string) => {
        setText(newValue);
        onChange(newValue);
    };

    return (
        <div className=''>
            <ReactQuill value={text} onChange={handleTextChange} className='h-80' />
        </div>
    );
};

export default TextEditor