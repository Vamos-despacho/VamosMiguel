"use client"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { EyeOpenIcon, Pencil1Icon } from '@radix-ui/react-icons';
import Link from 'next/link';

import { IArticle, Post } from "@/interface/article";
import Image from "next/image";
import BtnDeleteAlert from "./BtnDeleteAlert";
import { useEffect, useState } from "react";
import BtnDeleteAlertArticle from "./BtnDeleteAlertArticle";


interface Props {
    articles: IArticle[]
}

const ListArticles = ({ articles }: Props) => {

    const [allArticle, setAllArticle] = useState(articles);

    const fecha = (fecha: string) => {
        const formattedDate = new Date(fecha).toLocaleDateString();
        return formattedDate;
    };
    useEffect(() => {
        setAllArticle(articles)
    }, [articles])

    const handleFilterItems = (id: string) => {
        const updatedArticles = allArticle.filter((article) => article._id !== id);
        setAllArticle(updatedArticles);

    }


    return (
        <div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[300px]">Titulo</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead className="">Creado</TableHead>
                        <TableHead className="">Ver P.</TableHead>
                        <TableHead className="">Editar P.</TableHead>

                        <TableHead className="">Foto</TableHead>
                        <TableHead >Borrar</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        allArticle.map((article) => (
                            <TableRow key={article._id}>
                                <TableCell className="font-medium" key={article._id}>{article.title} </TableCell>
                                <TableCell style={{ color: article.published ? 'green' : 'red' }} className="font-medium">{article.published ? 'Publicado' : 'Pendiente'}</TableCell>
                                <TableCell className='text-sm'>{fecha(article.createdAt!)}</TableCell>
                                <TableCell>
                                    <Link href={`/articulos/articulo/${article.slug}`}>

                                        <EyeOpenIcon className="w-5 h-5" />
                                    </Link>

                                </TableCell>
                                <TableCell>
                                    <Link href={`/admin/articulos/editar-articulo/${article.slug}`}>

                                        <Pencil1Icon className="w-5 h-5" />
                                    </Link>

                                </TableCell>


                                <TableCell className="">
                                    {
                                        article.imageUrl && (
                                            <Image
                                                src={article.imageUrl}
                                                alt={article.title}
                                                width={100}
                                                height={100}
                                                className="h-20 w-20 object-cover"
                                            />
                                        )

                                    }

                                </TableCell>
                                <TableCell >
                                    <BtnDeleteAlertArticle id={article._id}


                                        onClickDelete={() => handleFilterItems(article._id)}
                                        msg="Artículo"
                                    />
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default ListArticles