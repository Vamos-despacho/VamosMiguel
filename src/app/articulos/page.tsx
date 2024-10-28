import ViewArticless from "@/components/ViewArticless";

const Articulos = async ({
  searchParams,
}: {
  searchParams: {
    query?: string;
    page?: string;
  };
}) => {
  return (
    <div className=" mx-auto max-w-7xl sm:py-20 py-6 ">
      <h2 className="block px-3 mb-10  font-display tracking-tight [text-wrap:balance] text-3xl font-medium sm:text-4xl text-azulv">
        Artículos
      </h2>
      <div className="mx-2 sm:mx-auto   flex flex-col justify-center items-center">
        <ViewArticless searchParams={searchParams} />
      </div>
    </div>
  );
};

export default Articulos;
