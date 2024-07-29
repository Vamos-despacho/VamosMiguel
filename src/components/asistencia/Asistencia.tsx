/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NRBBNuPLkeD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function Asistencia() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-12">
                <div className="space-y-4">

                    <div className="grid gap-8 md:grid-cols-2">
                        <div>
                            <h3 className="text-2xl font-bold">Asistencia a Plenos</h3>
                            <div className="mt-4 overflow-auto rounded-lg border">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Fecha</TableHead>
                                            <TableHead>Tipo</TableHead>
                                            <TableHead>Asistencia</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>2023-04-15</TableCell>
                                            <TableCell>Pleno</TableCell>
                                            <TableCell className="text-green-500">Presente</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>2023-03-25</TableCell>
                                            <TableCell>Pleno</TableCell>
                                            <TableCell className="text-red-500">Ausente</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>2023-02-10</TableCell>
                                            <TableCell>Pleno</TableCell>
                                            <TableCell className="text-yellow-500">Justificado</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">Asistencia a Comisiones</h3>
                            <div className="mt-4 overflow-auto rounded-lg border">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Fecha</TableHead>
                                            <TableHead>Tipo</TableHead>
                                            <TableHead>Asistencia</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>2023-04-20</TableCell>
                                            <TableCell>Comisión</TableCell>
                                            <TableCell className="text-green-500">Presente</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>2023-03-30</TableCell>
                                            <TableCell>Comisión</TableCell>
                                            <TableCell className="text-red-500">Ausente</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>2023-02-15</TableCell>
                                            <TableCell>Comisión</TableCell>
                                            <TableCell className="text-yellow-500">Justificado</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}