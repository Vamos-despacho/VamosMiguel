import React from "react";

const ImagenSesion = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 justify-center items-center">
      <img
        src="/images/sesion/sesion01.jpeg"
        className="w-full lg:w-2/5 max-h-[60vh] object-cover rounded-lg overflow-hidden"
        alt="Imagen Sesión 1"
      />
      <img
        src="/images/sesion/sesion02.jpeg"
        className="w-full lg:w-2/5 max-h-[60vh] object-cover rounded-lg overflow-hidden"
        alt="Imagen Sesión 2"
      />
    </div>
  );
};

export default ImagenSesion;
