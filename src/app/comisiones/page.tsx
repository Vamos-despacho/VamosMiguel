
export default function ComisionPage() {
    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 h-[100dvh]">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">Comisiones</h2>
                    <p className="mt-4 text-muted-foreground">

                        Participamos de manera activa en las comisiones de salud y educación, enfocándonos en elevar la calidad de vida de los ciudadanos y promover avances significativos en estos ámbitos.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <div className="bg-card border rounded-lg shadow-md p-8">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary rounded-full p-2 text-primary-foreground">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold">Comisión de Trabajo, Salud y Desarrollo Social</h3>
                        </div>
                        <p className="mt-4 text-muted-foreground">
                            Estudia y propone leyes sobre temas laborales, jubilación, salud pública, seguridad social y el ejercicio de profesiones médicas y de salud. Además, aborda problemáticas laborales y sociales para mejorar la calidad de vida en el país.
                        </p>
                    </div>
                    <div className="bg-card border rounded-lg shadow-md p-8">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary rounded-full p-2 text-primary-foreground">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold">Comisión de Educación, Cultura y Deportes</h3>
                        </div>
                        <p className="mt-4 text-muted-foreground">
                            Elabora y propone leyes sobre educación, cultura y deporte, gestionando fondos y recursos educativos, y apoyando a sociedades científicas y artísticas. Su objetivo es desarrollar valores nacionales y fortalecer la identidad cultural del país.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}