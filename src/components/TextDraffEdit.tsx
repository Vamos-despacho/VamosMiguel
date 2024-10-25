import { useState, useEffect } from 'react';
import { Editor, EditorState, RichUtils, Modifier, CompositeDecorator, convertToRaw, convertFromRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';
import {
    AiOutlineBold,
    AiOutlineItalic,
    AiOutlineUnderline,
    AiOutlineStrikethrough,
} from 'react-icons/ai';
import {
    FaHeading,
    FaListUl,
    FaListOl,
    FaQuoteLeft,
    FaUndo,
    FaRedo,
    FaLink,
    FaCode,
} from 'react-icons/fa';

const Link = (props: any) => {
    const { url } = props.contentState.getEntity(props.entityKey).getData();
    return (
        <a href={url} style={{ color: 'blue', textDecoration: 'underline' }}>
            {props.children}
        </a>
    );
};

const findLinkEntities = (
    contentBlock: any,
    callback: any,
    contentState: any
) => {
    contentBlock.findEntityRanges((character: any) => {
        const entityKey = character.getEntity();
        return (
            entityKey !== null &&
            contentState.getEntity(entityKey).getType() === 'LINK'
        );
    }, callback);
};

const decorator = new CompositeDecorator([
    {
        strategy: findLinkEntities,
        component: Link,
    },
]);

interface Props {
    value: string;
    onChangeHandle: (newValue: any) => void;
}

export default function MyEditorEdit({ value, onChangeHandle }: Props) {
    const [editorState, setEditorState] = useState(() => {
        if (value) {
            try {
                const rawContentState = JSON.parse(value);
                const contentState = convertFromRaw(rawContentState);
                return EditorState.createWithContent(contentState, decorator);
            } catch (error) {
                console.error('Error al parsear el contenido:', error);
                return EditorState.createEmpty(decorator);
            }
        } else {
            return EditorState.createEmpty(decorator);
        }
    });

    useEffect(() => {
        if (value) {
            try {
                const rawContentState = JSON.parse(value);
                const contentState = convertFromRaw(rawContentState);
                setEditorState(EditorState.createWithContent(contentState, decorator));
            } catch (error) {
                console.error('Error al parsear el contenido:', error);
            }
        }
    }, [value]);

    const handleKeyCommand = (command: string, editorState: EditorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            setEditorState(newState);
            return 'handled';
        }
        return 'not-handled';
    };

    const onChange = (newState: EditorState) => {
        setEditorState(newState);
        const contentState = newState.getCurrentContent();
        const rawContentState = convertToRaw(contentState);
        const contentAsJsonString = JSON.stringify(rawContentState);
        onChangeHandle(contentAsJsonString);
    };

    const toggleInlineStyle = (style: string) => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, style));
    };

    const toggleBlockType = (blockType: string) => {
        setEditorState(RichUtils.toggleBlockType(editorState, blockType));
    };

    const addLink = () => {
        const selection = editorState.getSelection();
        const link = prompt('Ingrese la URL del enlace:');
        if (!link) {
            return;
        }
        const content = editorState.getCurrentContent();
        const contentWithEntity = content.createEntity('LINK', 'MUTABLE', { url: link });
        const entityKey = contentWithEntity.getLastCreatedEntityKey();
        let newEditorState = EditorState.set(editorState, { currentContent: contentWithEntity });
        newEditorState = RichUtils.toggleLink(
            newEditorState,
            selection,
            entityKey
        );
        setEditorState(newEditorState);
    };

    const undo = () => {
        const newState = EditorState.undo(editorState);
        setEditorState(newState);
    };

    const redo = () => {
        const newState = EditorState.redo(editorState);
        setEditorState(newState);
    };

    const currentStyle = editorState.getCurrentInlineStyle();
    const selection = editorState.getSelection();
    const contentState = editorState.getCurrentContent();
    const blockType = contentState
        .getBlockForKey(selection.getStartKey())
        .getType();

    return (
        <div className="max-w-2xl mx-auto mt-8">
            <div className="flex flex-wrap mb-4 bg-gray-100 p-2 rounded">
                <button
                    type='button'
                    onMouseDown={(e) => {
                        e.preventDefault();
                        toggleInlineStyle('BOLD');
                    }}
                    className={`p-2 m-1 rounded ${currentStyle.has('BOLD') ? 'bg-blue-300' : 'hover:bg-gray-200'
                        }`}
                >
                    <AiOutlineBold size={20} />
                </button>
                <button
                    type='button'

                    onMouseDown={(e) => {
                        e.preventDefault();
                        toggleInlineStyle('ITALIC');
                    }}
                    className={`p-2 m-1 rounded ${currentStyle.has('ITALIC') ? 'bg-blue-300' : 'hover:bg-gray-200'
                        }`}
                >
                    <AiOutlineItalic size={20} />
                </button>
                <button
                    type='button'

                    onMouseDown={(e) => {
                        e.preventDefault();
                        toggleInlineStyle('UNDERLINE');
                    }}
                    className={`p-2 m-1 rounded ${currentStyle.has('UNDERLINE') ? 'bg-blue-300' : 'hover:bg-gray-200'
                        }`}
                >
                    <AiOutlineUnderline size={20} />
                </button>
                <button
                    type='button'

                    onMouseDown={(e) => {
                        e.preventDefault();
                        toggleInlineStyle('STRIKETHROUGH');
                    }}
                    className={`p-2 m-1 rounded ${currentStyle.has('STRIKETHROUGH') ? 'bg-blue-300' : 'hover:bg-gray-200'
                        }`}
                >
                    <AiOutlineStrikethrough size={20} />
                </button>

                {/* Botones de tipo de bloque */}
                <button
                    type='button'

                    onMouseDown={(e) => {
                        e.preventDefault();
                        toggleBlockType('header-one');
                    }}
                    className={`p-2 m-1 rounded ${blockType === 'header-one' ? 'bg-blue-300' : 'hover:bg-gray-200'
                        }`}
                >
                    <FaHeading size={20} />
                </button>
                <button
                    type='button'

                    onMouseDown={(e) => {
                        e.preventDefault();
                        toggleBlockType('blockquote');
                    }}
                    className={`p-2 m-1 rounded ${blockType === 'blockquote' ? 'bg-blue-300' : 'hover:bg-gray-200'
                        }`}
                >
                    <FaQuoteLeft size={20} />
                </button>
                <button
                    type='button'

                    onMouseDown={(e) => {
                        e.preventDefault();
                        toggleBlockType('unordered-list-item');
                    }}
                    className={`p-2 m-1 rounded ${blockType === 'unordered-list-item' ? 'bg-blue-300' : 'hover:bg-gray-200'
                        }`}
                >
                    <FaListUl size={20} />
                </button>
                <button
                    type='button'

                    onMouseDown={(e) => {
                        e.preventDefault();
                        toggleBlockType('ordered-list-item');
                    }}
                    className={`p-2 m-1 rounded ${blockType === 'ordered-list-item' ? 'bg-blue-300' : 'hover:bg-gray-200'
                        }`}
                >
                    <FaListOl size={20} />
                </button>

                {/* Botón para bloque de código */}
                <button
                    type='button'

                    onMouseDown={(e) => {
                        e.preventDefault();
                        toggleBlockType('code-block');
                    }}
                    className={`p-2 m-1 rounded ${blockType === 'code-block' ? 'bg-blue-300' : 'hover:bg-gray-200'
                        }`}
                >
                    <FaCode size={20} />
                </button>

                {/* Botón para agregar enlace */}
                <button
                    type='button'

                    onMouseDown={(e) => {
                        e.preventDefault();
                        addLink();
                    }}
                    className="p-2 m-1 rounded hover:bg-gray-200"
                >
                    <FaLink size={20} />
                </button>

                {/* Botones de deshacer y rehacer */}
                <button
                    type='button'

                    onMouseDown={(e) => {
                        e.preventDefault();
                        undo();
                    }}
                    className="p-2 m-1 rounded hover:bg-gray-200"
                >
                    <FaUndo size={20} />
                </button>
                <button
                    type='button'

                    onMouseDown={(e) => {
                        e.preventDefault();
                        redo();
                    }}
                    className="p-2 m-1 rounded hover:bg-gray-200"
                >
                    <FaRedo size={20} />
                </button>
            </div>

            <div className="border border-gray-300 p-4 rounded min-h-[200px]">
                <Editor
                    editorState={editorState}
                    handleKeyCommand={handleKeyCommand}
                    onChange={onChange}
                />
            </div>
        </div>
    );
}
