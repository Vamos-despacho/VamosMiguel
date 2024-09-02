
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"

export default function Component() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary to-secondary">
            <div className="max-w-md w-full px-4 py-8">
                <div className="flex flex-col items-center space-y-6">
                    <Avatar className="w-56 h-56 border-4 border-background">
                        <AvatarImage src='/images/MiguelAngel3.jpg' sizes="(min-width: 1024px) 32rem, 20rem" alt="Profile" />
                        <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-center pb-2">

                        <h2 className="text-2xl font-bold text-primary-foreground">Miguel Ángel Campos Lima</h2>
                        <h2 className=" font-semibold tracking-tight text-zinc-700 dark:text-zinc-100 sm:text-base text-justify mt-1 text-primary-foreground">
                            Diputado independiente del circuito 9-1</h2>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <Link
                            href="#"
                            className="inline-flex gap-2 items-center justify-center h-12 px-6 rounded-full bg-background text-secondary-foreground font-medium hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                        >
                            <LinkIcon className="h-5 w-5" />
                            <span>Website</span>
                        </Link>
                        <Link
                            href="#"
                            className="inline-flex gap-2 items-center justify-center h-12 px-6 rounded-full bg-background text-secondary-foreground font-medium hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                        >
                            <InstagramIcon className="h-5 w-5" />
                            <span>Instagram</span>
                        </Link>
                        <Link
                            href="#"
                            className="inline-flex gap-2 items-center justify-center h-12 px-6 rounded-full bg-background text-secondary-foreground font-medium hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                        >
                            <LinkedinIcon className="h-5 w-5" />
                            <span>LinkedIn</span>

                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
} function InstagramIcon(props: any) {
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
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    )
}


function LinkIcon(props: any) {
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
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
    )
}


function LinkedinIcon(props: any) {
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
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    )
}


function TwitterIcon(props: any) {
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
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    )
}