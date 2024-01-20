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
    etiquetas: ICategory[]
}

const ListEtiquetas = ({ etiquetas }: Props) => {

    const [allEtiquetas, setAllEtiquetas] = useState(etiquetas);

    const handleFilterItems = (id: number) => {

        const updateCategorias = allEtiquetas.filter((etiqueta) => etiqueta.id !== id);
        setAllEtiquetas(updateCategorias);


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
                        allEtiquetas.map((etiqueta) => (
                            <TableRow key={etiqueta.id}>
                                <TableCell className="font-medium" key={etiqueta.id}> {etiqueta.name}</TableCell>
                                <TableCell >
                                    <BtnDeleteAlert
                                        id={etiqueta.id}
                                        link={`/etiquetas/${etiqueta.id}`}
                                        onClickDelete={() => handleFilterItems(etiqueta.id)}
                                        msg="Etiqueta"
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

export default ListEtiquetas