const EquipoTrabajo = () => {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                    <div className="space-y-5 sm:space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Equipo de Trabajo</h2>
                        <p className="text-xl text-gray-500">Despacho 209</p>
                    </div>
                    <div className="lg:col-span-2 lg:mt-0">
                        <ul
                            role="list"
                            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
                        >
                            {teamMembers.map(({ name, role, salary, imgSrc }, index) => (
                                <li key={index}>
                                    <div className="space-y-4">
                                        <div className="aspect-w-3 aspect-h-2">
                                            <img className="rounded-lg object-cover shadow-lg w-32 h-32" src={imgSrc} alt={name} />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="text-lg leading-6 font-medium space-y-1">
                                                <h3 className="text-base font-semibold leading-6 tracking-tight text-slate-900">{name}</h3>
                                                <p className="text-neutral-600 text-sm">{role}</p>
                                            </div>
                                            <div className="text-lg">
                                                <p className="text-gray-500">{salary}</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Datos de los miembros del equipo
const teamMembers = [
    { name: "Antonio Sanmartin", role: "JEFE DE DESPACHO", salary: "$120,000", imgSrc: "/placeholder.jpg" },
    { name: "Alexandra Flores", role: "ADMINISTRADORA DE DESPACHO", salary: "$100,000", imgSrc: "/placeholder.jpg" },
    { name: "Aracely Achille", role: "ASESOR LEGAL", salary: "$90,000", imgSrc: "/placeholder.jpg" },
    { name: "Christhian Peñalba", role: "PROGRAMADOR", salary: "$80,000", imgSrc: "/placeholder.jpg" },
    { name: "Jose Moscoso", role: "PRODUCTOR AUDIOVISUAL", salary: "$60,000", imgSrc: "/placeholder.jpg" },
    { name: "Marco Rodríguez", role: "INVESTIGADOR", salary: "$75,000", imgSrc: "/placeholder.jpg" },
];

export default EquipoTrabajo;
