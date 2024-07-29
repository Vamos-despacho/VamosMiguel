
"use client"
import { on } from 'events';
import { useState } from 'react';


interface Props {
    value: string;
    onChange: (newValue: string) => void;
}
const formats = [
    'header', 'font', 'size', 'list', 'bold', 'italic', 'underline', 'link', 'align',
];

const TextEditor = ({ value, onChange }: Props) => {
    // const [text, setText] = useState<string>(value);


    // const handleTextChange = (newValue: string) => {
    //     setText(newValue);
    //     onChange(newValue);
    // };
    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            ['link'],
            [{ 'align': '' }, { 'align': 'center' }, { 'align': 'right' }, { 'align': 'justify' }],
            ['clean'],
        ],
    };
    return (
        <div className=''>

        </div>
    );
};

export default TextEditor