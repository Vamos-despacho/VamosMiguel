"use client"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { IconJarLogoIcon } from "@radix-ui/react-icons";
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { Switch } from "@/components/ui/switch"
import { useRouter } from "next/navigation"

import SelectObtions from "@/components/SelectObtions";
import { ICategory, Post } from "@/interface/article";

import Image from "next/image";

import { uploadImageCloudinaryCrop } from "@/helpers/uploadImageCludinary";
import { ImageIcon } from "lucide-react";

import { useSession } from "next-auth/react"

import DOMPurify from 'dompurify';
import MyEditor from "../TextDraff";
import { createArticle } from "@/libs/articulos/actions";

interface Props {
    category: ICategory[]

    articulo?: Post
}
type IUser = {
    id: string;
    name: string;
    email: string;
    img: string | null;
    createAt: Date;
    role: string;
}

const FormtArticleCreate = ({ category, articulo }: Props) => {

    const route = useRouter()

    const [isTitle, setIsTitle] = useState(articulo?.title)
    const { data: session, status } = useSession()
    const user = session?.user as IUser
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState("")
    const [selectCategory, setSelectCategory] = useState(articulo?.categoryId.toString() || "")

    const [selectImage, setSelectImage] = useState<string | null | undefined>(articulo?.imageUrl)
    const [subiendoImagen, setSubiendoImagen] = useState(false)
    const [isActiveEstado, setIsActiveEstado] = useState(articulo?.published || false);
    const [editorContent, setEditorContent] = useState<string>(articulo?.content || "Texto de prueba");
    const [slug, setSlug] = useState(articulo?.slug);




    const handleSlugChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;

        const withoutAccents = newValue
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        // Usar una expresión regular para permitir solo letras, números y guiones
        const validSlug = withoutAccents.replace(/[^a-z0-9-]/g, '-');

        setSlug(validSlug);
    };
    const handleEditorChange = (newContent: string) => {
        setEditorContent(newContent);
    };
    const convertirArr = (arregloDeStrings: any) => {
        return arregloDeStrings.map((str: string) => {
            return { name: str };
        });
    }


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const title = formData.get('title')
        const slug = formData.get('slug')

        if (!title) {
            setError('El titulo es requerido')
            return
        }
        if (title.length < 5) {
            setError('El titulo debe tener mas de 5 caracteres')
            return
        }



        const data = {
            title: DOMPurify.sanitize(title as string),
            content: DOMPurify.sanitize(editorContent),
            imageUrl: selectImage || "",
            published: isActiveEstado,
            category: selectCategory,
            slug: DOMPurify.sanitize(slug as string),

        }


        console.log(data)

        try {
            if (articulo) {

                // if (resp.status === 200) {
                //     alert('Articulo Editado correctamente')
                //     route.push('/admin/articulos')
                //     return
                // }

            } else {
                const respuesta = await createArticle(data)
                const resp = JSON.parse(respuesta)
                if (resp.status === 200) {
                    alert('Articulo creado correctamente')
                    // route.push('/admin/articulos')
                    return
                }
            }



        } catch (error) {


        }



    }
    const fileInputRefs = useRef<HTMLInputElement>();

    const handleClick = () => {
        const fileInput = fileInputRefs.current
        if (fileInput) {
            fileInput.click();
        }
    };
    const handleFileSelect = async (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFileE = e.target.files;

        if (selectedFileE) {
            setSubiendoImagen(true)
            const imgs = await uploadImageCloudinaryCrop({ images: selectedFileE[0] })

            setSubiendoImagen(false)
            setSelectImage(imgs);
        }
    };
    const handleSwitchChangeEstado = async () => {
        const newValue = !isActiveEstado; // Cambia el valor del interruptor
        setIsActiveEstado(newValue); // Actualiza el estado con el nuevo valor del interruptor


    };

    if (status === "loading") {
        return <p>Loading...</p>
    }

    if (status === "unauthenticated") {
        return <p>Access Denied</p>
    }


    return (
        <div className="flex  h-full w-full max-w-7xl m-auto ">

            <form onSubmit={handleSubmit} className="w-full ">
                {/* <h1 className="text-lg text-neutral-800 font-medium">Crear Articulo</h1> */}
                <div className=" h-6">
                    {error && <p className="bg-red-500 text-sbase text-white m-auto w-auto items-center flex  justify-center">{error}</p>}
                </div>
                <div className="gap-9 p-4 grid grid-cols-1 lg:grid-cols-2 w-full">
                    <div className=" col-span-1 space-y-1">
                        <Label className=" text-base text-neutral-800" htmlFor="title">
                            Título
                        </Label>
                        <Input
                            id="title"
                            name="title"
                            type="text"
                            autoCapitalize="none"
                            autoComplete="none"
                            autoCorrect="off"
                            disabled={isLoading}
                            required
                            className="px-4 py-2 block mb-2 w-full"
                            value={isTitle}
                            onChange={(e) => setIsTitle(e.target.value)}

                        />
                    </div>
                    <div className="col-span-1 space-y-1 ">
                        <Label className="text-base text-neutral-800" htmlFor="slug">
                            Link de de acceso
                        </Label>
                        <Input
                            id="slug"
                            name="slug"
                            placeholder="contrato-minero-2021"
                            type="text"
                            autoCapitalize="none"
                            autoComplete="off"
                            autoCorrect="off"
                            disabled={isLoading}
                            required
                            className="px-4 py-2 block mb-2 w-full"
                            value={slug}
                            onChange={handleSlugChange}
                        />
                    </div>

                    <div className="sm:flex space-y-2 flex-col  sm:flex-row pb-8  sm:space-x-8 justify-center items-center m-auto">
                        <Button arial-label='Agregar Imagen' type="button" variant="outline" onClick={handleClick}>
                            Agregar Imágenes
                        </Button>
                        <input
                            ref={(el) => (fileInputRefs.current = el!)}
                            style={{ display: 'none' }}
                            type="file"
                            className="w-24 h-8"
                            accept="image/*"
                            multiple // Esto permite la selección múltiple de archivos
                            onChange={(e) => handleFileSelect(e)}
                        />
                        {
                            selectImage
                                ? (

                                    <Image

                                        src={selectImage}
                                        alt='asdf'
                                        width={80}
                                        height={80}
                                        className="w-40 h-40 object-cover"
                                    />
                                )
                                :
                                (
                                    <div className="w-40 h-40 bg-zinc-100 flex items-center justify-center">
                                        <div className="text-neutral-500 text-sm">
                                            {subiendoImagen ? (
                                                <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin" />

                                            ) : <ImageIcon className="h-8 w-8" />}
                                        </div>
                                    </div>
                                )
                        }

                    </div>
                    <div className="space-y-8">
                        <SelectObtions
                            data={category}
                            onChange={(selectedValue) => setSelectCategory(selectedValue)}
                            select={articulo?.categoryId.toString()}
                        />

                    </div>

                </div>
                <div className=" ">

                    {/* <TextEditor value={editorContent} onChange={handleEditorChange} /> */}
                    <MyEditor onChangeHandle={handleEditorChange} value={editorContent} />
                </div>
                <div className="flex gap-6 mt-20 justify-center items-center">

                    <Button arial-label='Guardar' disabled={isLoading} className="">
                        {isLoading && (
                            <IconJarLogoIcon className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Guardar
                    </Button>

                    <div className="flex items-center space-x-2">
                        <Label htmlFor="airplane-mode">Publicación: </Label>
                        <h2 style={{ color: isActiveEstado ? 'green' : 'red' }} className="font-medium">{isActiveEstado ? 'Publica' : 'Privada'}</h2>
                        <Switch
                            id="airplane-mode"
                            checked={isActiveEstado}
                            onCheckedChange={() => handleSwitchChangeEstado()}
                        />
                    </div>
                </div>
            </form>


        </div>
    )
}

export default FormtArticleCreate