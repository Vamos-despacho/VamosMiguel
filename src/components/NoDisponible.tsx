/**
 * v0 by Vercel.
 * @see https://v0.dev/t/el8IXr3e6SG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

const NoDisponible = () => {
    return (
        <div className="flex min-h-[80dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md text-center">
                <ConstructionIcon className="mx-auto h-12 w-12 text-primary" />
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Sección en construcción</h1>
                <p className="mt-4 text-muted-foreground">
                    Estamos trabajando para mejorar esta sección. Te invitamos a regresar más tarde para consultar la información
                    actualizada.
                </p>
                <div className="mt-6">
                    <Link
                        href="/"
                        className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        prefetch={false}
                    >
                        Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default NoDisponible

function ConstructionIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="2" y="6" width="20" height="8" rx="1" />
            <path d="M17 14v7" />
            <path d="M7 14v7" />
            <path d="M17 3v3" />
            <path d="M7 3v3" />
            <path d="M10 14 2.3 6.3" />
            <path d="m14 6 7.7 7.7" />
            <path d="m8 6 8 8" />
        </svg>
    )
}


function XIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}
