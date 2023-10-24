"use client"
import { Button } from "@/components/ui/button"
import { useSession, signOut } from "next-auth/react"


const Dashboar = () => {

    const { data: session, status } = useSession()
    if (status === "loading") return <p>Loading...</p>
    return (
        <div className=" h-[calc(100vh-18rem)]">

            <p className="text-xl ">Welcome, {session?.user?.name}</p>
            {JSON.stringify(session?.user, null, 2)}
        </div>
    )
}
export default Dashboar