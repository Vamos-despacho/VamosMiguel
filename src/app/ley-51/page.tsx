import LeyCss from "@/components/leycss/LeyCss";
import React from "react";
import ImagenSesion from "@/components/leycss/ImagenSesion";

const PageLey51 = () => {
  return (
    <section className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-0 py-10 lg:py-16 h-full">
      {/* Contenedor del título y subtítulo */}
      <div className="sm:container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Sesión Extraordinaria
        </h2>
        <p className="mt-2 sm:mt-4 text-lg text-gray-600">
          El Órgano Ejecutivo convoca a la Asamblea Nacional a Sesiones
          Extraordinarias desde el 6 de noviembre hasta el 31 de diciembre de
          2024, para debatir exclusivamente sobre el Proyecto de Ley que
          modifica la Ley Orgánica de la Caja de Seguro Social y dicta otras
          disposiciones.
        </p>
      </div>

      {/* Información sobre la ley */}
      <div className="mt-10 px-3 sm:mt-24">
        <div className="flex flex-col justify-center md:justify-start">
          <h3 className="text-2xl font-semibold">
            Presentación del Proyecto de Ley que modificará la Ley 51 de 27 de
            diciembre de 2005
          </h3>
          <span className="text- text-gray-600 font-medium ml-1">
            Hoy 6 de noviembre de 2024 recibimos el Proyecto de Ley que reforma
            la Ley Orgánica de la Caja de Seguro Social y otras disposiciones.
          </span>
        </div>
      </div>

      {/* Sección con LeyCss e ImagenSesion */}
      <div className="pt-8 ">
        <div className="flex shadow-md flex-col md:flex-row items-center justify-around py-6 gap-8 bg-gray-50 rounded-lg">
          <LeyCss />

          <ImagenSesion />
        </div>
      </div>
    </section>
  );
};

export default PageLey51;
