"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Visit {
  _id: string;
  date: string;
  count: number;
  __v: number;
}

interface VisitasDiariasProps {
  visits: Visit[];
}

export const AdminViewVisit = ({ visits = [] }: VisitasDiariasProps) => {
  const [selectedMonth, setSelectedMonth] = useState<string>("all");

  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getDate()} de ${
      monthNames[date.getMonth()]
    } de ${date.getFullYear()}`;
  };

  const getMonthYear = (dateString: string) => {
    const date = new Date(dateString);
    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  };

  // Convertimos el Set en un array para evitar el error de compilación
  const availableMonths = Array.from(
    new Set(visits.map((visit) => getMonthYear(visit.date)))
  ).sort();

  const filteredVisits =
    selectedMonth !== "all"
      ? visits.filter((visit) => getMonthYear(visit.date) === selectedMonth)
      : visits;

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-normal">Visitas Diarias</CardTitle>
        <Select value={selectedMonth} onValueChange={setSelectedMonth}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Seleccionar mes" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los meses</SelectItem>
            {availableMonths.map((month) => (
              <SelectItem key={month} value={month}>
                {month}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Fecha</TableHead>
              <TableHead className="text-right">Visitas</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredVisits.map((visit) => (
              <TableRow key={visit._id}>
                <TableCell>{formatDate(visit.date)}</TableCell>
                <TableCell className="text-right">{visit.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
