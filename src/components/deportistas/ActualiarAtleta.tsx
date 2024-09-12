import { IAtleta } from '@/models/salon/Atleta'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const ActualiarAtleta = ({ atletas }: { atletas: IAtleta[] }) => {
    return (

        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Nombre</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    atletas.map((atleta) => (
                        <TableRow key={atleta._id}>
                            <TableCell className="font-medium">{atleta.name}</TableCell>
                            <TableCell>{ }</TableCell>
                            <TableCell>{atleta.activeYears}</TableCell>
                            <TableCell className="text-right">{atleta.biography}</TableCell>
                        </TableRow>
                    ))
                }

            </TableBody>
        </Table>


    )
}

export default ActualiarAtleta