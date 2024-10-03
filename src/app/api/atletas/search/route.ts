// pages/api/atletas/search.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { searchAtletasFront } from '@/libs/salon/actions'; // Ajusta el path si es necesario

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('+++++++++++++++++++++++++entro')
    const { searchTerm = '', page = '1', limit = '10' } = req.query;

    try {
        const atletas = await searchAtletasFront({
            searchTerm: String(searchTerm),
            page: parseInt(String(page), 10),
            limit: parseInt(String(limit), 10),
        });
        console.log(atletas)
        res.status(200).json(atletas);
    } catch (error: any) {
        console.error('Error:', error);
        res.status(500).json({ status: 500, error: error.message });
    }
}
