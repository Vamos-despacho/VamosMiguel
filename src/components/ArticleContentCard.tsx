import React from 'react';
import { convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import DOMPurify from 'dompurify';

interface ArticleContentProps {
    contentFromDatabase: any; // Puede ser una cadena JSON o un objeto
}

const ArticleContentCard: React.FC<ArticleContentProps> = ({ contentFromDatabase }) => {
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
        <div className="text-justify text-[12px] mx-1 text-xs sm:text-sm text-neutral-600 sm:line-clamp-4 line-clamp-4 sm:leading-4 leading-3 font-display">
            <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
        </div>
    );
};

export default ArticleContentCard;
