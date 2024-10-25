import React from 'react';
import { convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import DOMPurify from 'dompurify';

interface ArticleContentProps {
    contentFromDatabase: any; // Puede ser una cadena JSON o un objeto
}

const ArticleContent: React.FC<ArticleContentProps> = ({ contentFromDatabase }) => {
    let rawContentState;

    // Verifica si necesitas parsear el contenido
    if (typeof contentFromDatabase === 'string') {
        try {
            rawContentState = JSON.parse(contentFromDatabase);
        } catch (error) {
            console.error('Error al parsear el contenido:', error);
            return <div>Error al mostrar el contenido del artículo.</div>;
        }
    } else {
        rawContentState = contentFromDatabase;
    }

    const contentState = convertFromRaw(rawContentState);
    const html = stateToHTML(contentState);
    const sanitizedHTML = DOMPurify.sanitize(html);

    return (
        <div className="text-justify">
            <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
        </div>
    );
};

export default ArticleContent;
