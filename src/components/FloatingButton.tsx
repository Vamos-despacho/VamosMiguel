import Link from 'next/link'
import React from 'react'

const FloatingButton = () => {
    return (
        <Link
            href="solicitar-reunion"
            // className="z-10 fixed bottom-5 right-5 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition duration-300"
            className="z-10 fixed bottom-10 right-5 bg-blue-600 text-white 
              hover:bg-blue-700  duration-300
            inline-flex h-12 items-center justify-center rounded-full bg-primary px-4 sm:px-5 py-2 text-sm 
            font-medium text-primary-foreground shadow-lg transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
            <CalendarIcon className="mr-2 h-5 w-5" />

            Solicitar Reunión
        </Link>
    )
}

export default FloatingButton


function CalendarIcon(props: any) {
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
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
        </svg>
    )
}