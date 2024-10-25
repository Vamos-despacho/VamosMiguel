
import { getTotalPages } from '@/libs/articulos/actions';
import Pagination from './Pagination'
import PaginationB from './PaginationB';
import ListArticle from './ListArticle';
import { Suspense } from 'react';

const itemsPerPage = 6; // Cantidad de elementos por página
interface Props {
    searchParams: { page?: string, query?: string };

}

async function getTotalPag() {
    const resp = await getTotalPages()
    return resp
}

const ViewArticless = async ({ searchParams }: Props) => {
    const { page, query = '' } = searchParams
    const currentPage = Number(page) || 1;

    const totalPage = await getTotalPag()
    return (
        <div className=' w-full'>
            <ListArticle currentPage={currentPage} />

            <div className="mt-10 flex w-full justify-center">
                <PaginationB
                    totalPages={totalPage}
                />
            </div>
        </div>
    );
};

export default ViewArticless;
