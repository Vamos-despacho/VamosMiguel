
import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonTable() {
  return (
    <div className="space-y-4 sm:w-1/2 sm:h-screen">
      {/* Header de la tabla */}
      <div className="flex justify-between px-4 py-2 bg-gray-100">
        <Skeleton className="h-6 w-[100px]" />  {/* Fecha */}
        <Skeleton className="h-6 w-[300px]" />  {/* Evento */}
        <Skeleton className="h-6 w-[50px]" />   {/* Borrar */}
      </div>

      {/* Filas de la tabla */}
      {[...Array(8)].map((_, index) => (
        <div key={index} className="flex justify-between px-4 py-2 bg-white shadow-sm">
          <Skeleton className="h-8 w-[100px]" />  {/* Fecha */}
          <Skeleton className="h-8 w-[300px]" />  {/* Evento */}
          <Skeleton className="h-8 w-[50px]" />   {/* Borrar */}
        </div>
      ))}
    </div>
  );
}
