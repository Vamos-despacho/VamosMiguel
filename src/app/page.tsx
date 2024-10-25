import React from "react";
import Contactanos from "./contactanos/page";
import Articuloss from "./articulos/page";
import SliderTop from "@/components/top/SliderTop";
import CardPropuestas from "@/components/propuestas/TarjetasPropuestas";
import FloatingButton from "@/components/FloatingButton";
import Articulos from "./articulos/page";

const Page = ({
  searchParams,
}: {
  searchParams: { query?: string; page?: string };
}) => {
  return (
    <div>
      {/* Slider con imagen de fondo */}
      <div
        style={{
          backgroundImage: `url(images/bg/bgpleno.jpeg)`,
          backgroundSize: "cover",
        }}
        className="relative bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-neutral-300 opacity-60"></div>{" "}
        {/* Capa semi-transparente */}
        <div className="relative z-10 py-4">
          <SliderTop />
        </div>
      </div>

      {/* Sección de propuestas */}
      <div className="py-6 border-t border-gray-50">
        <CardPropuestas />
      </div>

      {/* Artículos con los searchParams */}
      <div className="bg-gray-100 border-t border-gray-50">
        <Articulos searchParams={searchParams} />
      </div>

      {/* Sección de contacto */}
      <div id="contactanos" className="pb-20 border-t border-gray-50">
        <Contactanos />
      </div>

      {/* Botón flotante */}
      <FloatingButton />
    </div>
  );
};

export default Page;
