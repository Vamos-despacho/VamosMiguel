import Gestion from "@/components/informes/Gestion";

const page = () => {
  return (
    <section className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-0 py-10  lg:py-16 h-full">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Informe de Gestión
        </h2>
        <p className="mt-2 sm:mt-4 text-lg text-gray-600">
          Transparencia y compromiso en cada acción legislativa, reflejando el
          esfuerzo constante por el bienestar de la comunidad y el desarrollo
          del país.
        </p>
      </div>
      <Gestion />
      {/* <SeisMeses />
      <CienDias /> */}
    </section>
  );
};

export default page;
