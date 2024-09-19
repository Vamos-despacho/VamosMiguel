import React from 'react';
import { se } from 'date-fns/locale';
import { ClubIcon } from 'lucide-react';

const QueEsElDeporte = () => {
    return (
        <div>
            <section id="what-is-sport" className="py-12 px-6 md:py-12">
                <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">¿Qué es el deporte?</h2>
                        <p className="text-muted-foreground">
                            El deporte es una herramienta esencial para el desarrollo integral de la sociedad, ya que fomenta la salud, la inclusión y el espíritu comunitario. Más allá de ser una actividad física, el deporte impulsa valores como la disciplina, el respeto y el trabajo en equipo, contribuyendo a la formación de ciudadanos responsables y comprometidos. Los panameños, con su ADN de campeones, han demostrado su capacidad para destacar en diversas disciplinas, llevando en alto el nombre de nuestro país. Por ello, es fundamental impulsar el deporte a nivel nacional.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <ClubIcon className="h-24 w-24 text-primary" />
                    </div>
                </div>
            </section>

            {/* <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
                    ¿Qué es el deporte?
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-justify">
                    El deporte es una herramienta esencial para el desarrollo integral de la sociedad, ya que fomenta la salud, la inclusión y el espíritu comunitario. Más allá de ser una actividad física, el deporte impulsa valores como la disciplina, el respeto y el trabajo en equipo, contribuyendo a la formación de ciudadanos responsables y comprometidos.
                </p>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mt-4 text-justify">
                    Los panameños, con su ADN de campeones, han demostrado su capacidad para destacar en diversas disciplinas, llevando en alto el nombre de nuestro país. Por ello, es fundamental impulsar el deporte a nivel nacional. Desde la promoción en las escuelas hasta la mejora de la infraestructura en las comunidades, buscamos fortalecer el acceso al deporte para todos, creando oportunidades de crecimiento personal y colectivo.
                </p>
            </div> */}
        </div>
    );
};

export default QueEsElDeporte;
