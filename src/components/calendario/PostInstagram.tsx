import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed';

export const PostInstagram = ({ link }: { link: string }) => {

    return (
        <div>
            < div style={{ display: 'flex', justifyContent: 'center' }}>
                <InstagramEmbed url={link} width={328} height={600} />
            </div>
        </div>
    )
}
