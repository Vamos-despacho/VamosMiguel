"use client"

import Link from "next/link"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import { useSession, signOut } from "next-auth/react"
import Image from "next/image"

const SesionObtions = () => {

    const { data: session, status } = useSession()

    return (
        <>
            {
                session && (
                    <div className=" justify-center items-center flex">
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Image src="/v.png" width='25' height='25' className=" mb-2 mr-1 h-6 w-6" alt="Vamos Panamá" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>

                                <Link className=""
                                    href="/admin">
                                    <DropdownMenuItem>
                                        <span className="relative z-10">Administración</span>
                                    </DropdownMenuItem>
                                </Link>

                                <button onClick={() => signOut({
                                    callbackUrl: "/"
                                })}>
                                    <DropdownMenuItem>
                                        <span className="relative z-10">Cerrar sesión</span>
                                    </DropdownMenuItem>

                                </button>


                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>

                )

            }
        </>
    )
}

export default SesionObtions