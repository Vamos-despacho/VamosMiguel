import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TransparenciaInformacion from "./TransparenciaInformacion";

const Transparencias = () => {
  return (
    <Tabs
      defaultValue="compromiso"
      className=" justify-center items-center flex flex-col "
    >
      <TabsList className="flex flex-col mt-6 mb-8 md:flex-row lg:py-6 gap-2">
        <TabsTrigger className="lg:text-lg" value="compromiso">
          Compromisos VAMOS
        </TabsTrigger>
        <TabsTrigger className="lg:text-lg" value="declaracion">
          Declaración de Conflicto de Intereses
        </TabsTrigger>
        <TabsTrigger className="lg:text-lg" value="renuncia">
          Renuncia al Fuero Electoral Penal
        </TabsTrigger>
        <TabsTrigger className="lg:text-lg" value="intereses">
          Declaración Jurada de Intereses Particulares
        </TabsTrigger>
      </TabsList>
      <TabsContent
        className="flex flex-col justify-center items-center "
        value="compromiso"
      >
        <TransparenciaInformacion
          images={["compromiso-1.png", "compromiso-2.png", "compromiso-3.png"]}
          title="Compromisos VAMOS"
          introText="Presento las responsabilidades que asumo como parte de nuestro programa político. Estas abarcan áreas fundamentales que impactan directamente en la mejora de nuestra comunidad. Te invito a revisar detenidamente y a contactarme si tienes alguna pregunta o inquietud."
        />
      </TabsContent>
      <TabsContent
        className="flex flex-col justify-center items-center"
        value="declaracion"
      >
        <TransparenciaInformacion
          images={[
            "declaracion-1.png",
            "declaracion-2.png",
            "declaracion-3.png",
            "declaracion-4.png",
          ]}
          title="Declaración de Conflicto de Intereses"
          introText="La Declaración de Conflicto de Intereses de la Coalición VAMOS establece las situaciones en las que pueden surgir conflictos y detalla cómo serán gestionados. Este documento refleja nuestro compromiso con la transparencia y la ética, asegurando que actuamos en el mejor interés de la comunidad."
        />
      </TabsContent>
      <TabsContent
        className="flex flex-col justify-center items-center"
        value="renuncia"
      >
        <TransparenciaInformacion
          images={["renuncia-1.png", "renuncia-2.jpeg"]}
          title="Renuncia al Fuero Electoral Penal"
          introText="Presentamos nuestras renuncias explícitas y generales al fuero electoral penal. Valoramos la igualdad ante la ley y creemos en la rendición de cuentas. Estas renuncias reflejan nuestro compromiso con un proceso electoral justo y transparente."
        />
      </TabsContent>
      <TabsContent
        className="flex flex-col justify-center items-center"
        value="intereses"
      >
        <TransparenciaInformacion
          images={[
            "interesesm0001.jpg",
            "interesesm0002.jpg",
            "interesesm0003.jpg",
            "interesesm0004.jpg",
            "interesesm0005.jpg",
          ]}
          title="Declaración Jurada de Intereses Particulares"
          introText="Este documento contiene las Declaraciones Juradas de Intereses Particulares presentadas ante la Autoridad Nacional de Transparencia y Acceso a la Información, en cumplimiento de la Ley No. 316 de 2022. En ellas se detallan las actividades profesionales y otros intereses que aseguran la transparencia y el compromiso con el servicio público."
        />
      </TabsContent>
    </Tabs>
  );
};

export default Transparencias;
