"use client"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

import { EyeOpenIcon, Pencil1Icon, ShadowIcon, TrashIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ICategory, Post } from "@/interface/article";
import Image from "next/image";
import BtnDeleteAlert from "./BtnDeleteAlert";
import { useEffect, useState } from "react";


interface Props {
    categorias: ICategory[]
}

const ListCategorias = ({ categorias }: Props) => {

    const [allcategoria, setAllcategoria] = useState(categorias);

    const fecha = (fecha: string) => {
        const formattedDate = new Date(fecha).toLocaleDateString();
        return formattedDate;
    };


    const handleFilterItems = (id: number) => {

        const updateCategorias = allcategoria.filter((categoria) => categoria.id !== id);
        setAllcategoria(updateCategorias);


    }
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[300px]">Nombre</TableHead>
                        <TableHead >Borrar</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        allcategoria.map((article) => (
                            <TableRow key={article.id}>
                                <TableCell className="font-medium" key={article.id}> {article.name}</TableCell>
                                <TableCell >
                                    <BtnDeleteAlert
                                        id={article.id}
                                        link={`/categorias/${article.id}`}
                                        onClickDelete={() => handleFilterItems(article.id)}
                                        msg="Categoría"
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

export default ListCategorias