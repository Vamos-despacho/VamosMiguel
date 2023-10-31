"use client"
import vamosApi from "@/app/api/vamosApi"
import { useSession } from "next-auth/react"



const Dashboar = () => {
    const { data: session, status } = useSession()



    console.log('admin')

    if (status === "loading") return <p>Loading...</p>

    return (
        <div className=" h-[calc(100vh-18rem)]">

            <p className="text-xl ">Welcome, {session?.user?.name}</p>
        </div>
    )
}
export default Dashboar