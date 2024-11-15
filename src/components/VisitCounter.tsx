"use client";

import { useEffect } from "react";
import { visitConterPost } from "@/libs/visit/actions";

const useDailyVisitCounter = () => {
  useEffect(() => {
    // Verificar si localStorage está disponible
    if (typeof localStorage === "undefined") {
      // Manejar el caso donde localStorage no está disponible
      return;
    }

    try {
      // Obtener el dato de la última visita almacenado en localStorage
      const visitData = localStorage.getItem("visitData");
      const now = Date.now();

      let expirationTime = 0;

      if (visitData) {
        // Parsear el dato almacenado para obtener el tiempo de expiración
        const parsedData = JSON.parse(visitData);
        expirationTime = Number(parsedData.expiration);
      }

      // Si no hay dato almacenado o ha expirado, incrementamos el contador
      if (!visitData || now > expirationTime) {
        // Llamada a la función que incrementa el contador de visitas
        visitConterPost();

        // Establecer una nueva fecha de expiración (24 horas a partir de ahora)
        const expiration = now + 1 * 60 * 60 * 1000; // 24 horas en milisegundos

        // Almacenar el tiempo de expiración en localStorage
        const dataToStore = {
          expiration,
        };

        localStorage.setItem("visitData", JSON.stringify(dataToStore));
      }
    } catch (error) {
      console.error("Error en useDailyVisitCounter:", error);
    }
  }, []);
};

export default useDailyVisitCounter;
