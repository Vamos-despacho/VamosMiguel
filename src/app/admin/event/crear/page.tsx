"use client";

import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { register } from "@/actions/events/register";
import React from 'react';

const Create = () => {
    const [error, setError] = useState<string>();
    const router = useRouter();
    const ref = useRef<HTMLFormElement>(null);

    const handleSubmit = async (formData: FormData) => {
        const eventData = {
            date: new Date(formData.get("date") as string),
            eventos: [
                {
                    nombre: formData.get("nombre") as string,
                    estado: formData.get("estado") === "true",
                },
            ],
            pleno: {
                evento: formData.get("plenoEvento") as string,
                idsYoutube: formData.getAll("plenoIdsYoutube") as string[],
                linkInstagram: formData.getAll("plenoLinkInstagram") as string[],
                fotos: formData.getAll("plenoFotos") as string[],
                anteproyecto: formData.get("plenoAnteproyecto") as string,
                proyecto: formData.get("plenoProyecto") as string,
                reforma: formData.get("plenoReforma") as string,
            },
            salud: {
                evento: formData.get("saludEvento") as string,
                idsYoutube: formData.getAll("saludIdsYoutube") as string[],
                linkInstagram: formData.getAll("saludLinkInstagram") as string[],
            },
            educacion: {
                evento: formData.get("educacionEvento") as string,
                fotos: formData.getAll("educacionFotos") as string[],
            },
            otros: {
                evento: formData.get("otrosEvento") as string,
                eventoImagen: [
                    {
                        linkImagen: formData.getAll("otrosLinkImagen") as string[],
                        titulo: formData.get("otrosTitulo") as string,
                        descripcion: formData.get("otrosDescripcion") as string,
                    },
                ],
            },
        };

        const r = await register(eventData);
        ref.current?.reset();
        if (r?.error) {
            setError(r.error);
            return;
        } else {
            return router.push("/events");
        }
    };

    return (
        <section className="w-screen h-full p-32  flex items-center justify-center">
            <form
                ref={ref}
                action={handleSubmit}
                className="p-6 w-full max-w-[1200px] flex flex-col gap-4 border border-solid border-black bg-white rounded"
            >
                {error && <div className="text-red-500">{error}</div>}
                <h1 className="mb-5 w-full text-2xl font-bold">Crear Evento</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* Sección de Datos del Evento */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-semibold">Datos del Evento</h2>

                        <label className="text-sm">Fecha</label>
                        <input
                            type="date"
                            className="h-8 border border-solid border-black py-1 px-2.5 rounded"
                            name="date"

                        />

                        <label className="text-sm">Nombre del Evento Principal</label>
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="h-8 border border-solid border-black py-1 px-2.5 rounded"
                            name="nombre"
                        />

                        <label className="text-sm">Estado</label>
                        <select
                            className="h-8 border border-solid border-black py-1 px-2.5 rounded"
                            name="estado"

                        >
                            <option value="true">Activo</option>
                            <option value="false">Inactivo</option>
                        </select>
                    </div>

                    {/* Sección de Pleno */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-semibold">Detalles del Pleno</h2>

                        <label className="text-sm">Evento del Pleno</label>
                        <input
                            type="text"
                            placeholder="Evento del Pleno"
                            className="h-8 border border-solid border-black py-1 px-2.5 rounded"
                            name="plenoEvento"

                        />

                        <label className="text-sm">IDs de YouTube (separados por comas)</label>
                        <input
                            type="text"
                            placeholder="YouTube IDs"
                            className="h-8 border border-solid border-black py-1 px-2.5 rounded"
                            name="plenoIdsYoutube"

                        />

                        <label className="text-sm">Enlaces de Instagram (separados por comas)</label>
                        <input
                            type="text"
                            placeholder="Enlaces de Instagram"
                            className="h-8 border border-solid border-black py-1 px-2.5 rounded"
                            name="plenoLinkInstagram"

                        />

                        <label className="text-sm">Fotos (URLs separados por comas)</label>
                        <input
                            type="text"
                            placeholder="Fotos"
                            className="h-8 border border-solid border-black py-1 px-2.5 rounded"
                            name="plenoFotos"
                            required
                        />

                        <label className="text-sm">Anteproyecto</label>
                        <input
                            type="text"
                            placeholder="Anteproyecto"
                            className="h-8 border border-solid border-black py-1 px-2.5 rounded"
                            name="plenoAnteproyecto"

                        />

                        <label className="text-sm">Proyecto</label>
                        <input
                            type="text"
                            placeholder="Proyecto"
                            className="h-8 border border-solid border-black py-1 px-2.5 rounded"
                            name="plenoProyecto"

                        />

                        <label className="text-sm">Reforma</label>
                        <input
                            type="text"
                            placeholder="Reforma"
                            className="h-8 border border-solid border-black py-1 px-2.5 rounded"
                            name="plenoReforma"

                        />
                    </div>

                    {/* Sección de Salud */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-semibold">Detalles de Salud</h2>

                        <label className="text-sm">Evento de Salud</label>
                        <input
                            type="text"
                            placeholder="Evento de Salud"
                            className="h-8 border border-solid border-black py-1 px-2.5 rounded"
                            name="saludEvento"

                        />

                        <label className="text-sm">IDs de YouTube (separados por comas)</label>
                        <input
                            type="text"
                            placeholder="YouTube IDs"
                            className="h-8 border border-solid border-black py-1 px-2.5 rounded"
                            name="saludIdsYoutube"
                        />

                        <label className="text-sm">Enlaces de Instagram (separados por comas)</label>
                        <input
                            type="text"
                            placeholder="Enlaces de Instagram"
                            className="h-8 border border-solid border-black py-1 px-2.5 rounded"
                            name="saludLinkInstagram"
                        />
                    </div>

                    {/* Sección de Educación */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-semibold">Detalles de Educación</h2>

                        <label className="text-sm">Evento de Educación</label>
                        <input
                            type="text"
                            placeholder="Evento de Educación"
                            className="h-8 border border-solid border-black py-1 px-2.5 rounded"
                            name="educacionEvento"

                        />

                        <label className="text-sm">Fotos (URLs separados por comas)</label>
                        <input
                            type="text"
                            placeholder="Fotos"
                            className="h-8 border border-solid border-black py-1 px-2.5 rounded"
                            name="educacionFotos"
                        />
                    </div>

                    {/* Sección de Otros Eventos */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-semibold">Otros Eventos</h2>

                        <label className="text-sm">Evento</label>
                        <input
                            type="text"
                            placeholder="Otros Evento"
                            className="h-8 border border-solid border-black py-1 px-2.5 rounded"
                            name="otrosEvento"

                        />

                        <label className="text-sm">Título del Evento</label>
                        <input
                            type="text"
                            placeholder="Título"
                            className="h-8 border border-solid border-black py-1 px-2.5 rounded"
                            name="otrosTitulo"

                        />

                        <label className="text-sm">Descripción del Evento</label>
                        <input
                            type="text"
                            placeholder="Descripción"
                            className="h-8 border border-solid border-black py-1 px-2.5 rounded"
                            name="otrosDescripcion"
                        />

                        <label className="text-sm">Enlaces de Imágenes (separados por comas)</label>
                        <input
                            type="text"
                            placeholder="Enlaces de Imágenes"
                            className="h-8 border border-solid border-black py-1 px-2.5 rounded"
                            name="otrosLinkImagen"

                        />
                    </div>

                </div>

                <button
                    type="submit"
                    className="w-full border border-solid border-black py-1.5 mt-2.5 rounded transition duration-150 ease hover:bg-black"
                >
                    Crear Evento
                </button>

                <Link
                    href="/events"
                    className="text-sm text-[#888] transition duration-150 ease hover:text-black"
                >
                    Ver todos los eventos
                </Link>
            </form>
        </section>
    );
};
export default Create