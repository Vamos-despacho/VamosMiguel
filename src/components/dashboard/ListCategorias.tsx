"use client"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"



import { ICategory } from "@/interface/article";

import BtnDeleteAlert from "./BtnDeleteAlert";
import { useState } from "react";


interface Props {
    categorias: ICategory[]
}

const ListCategorias = ({ categorias }: Props) => {

    const [allcategoria, setAllcategoria] = useState(categorias);

    const fecha = (fecha: string) => {
        const formattedDate = new Date(fecha).toLocaleDateString();
        return formattedDate;
    };


    const handleFilterItems = (id: string) => {

        const updateCategorias = allcategoria.filter((categoria) => categoria._id !== id);
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
                            <TableRow key={article._id}>
                                <TableCell className="font-medium" key={article._id}> {article.name}</TableCell>
                                <TableCell >
                                    <BtnDeleteAlert
                                        id={article._id}
                                        link={`/categorias/${article._id}`}
                                        onClickDelete={() => handleFilterItems(article._id)}
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