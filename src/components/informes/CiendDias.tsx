import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const CiendDias = () => {
    return (
        <div>
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="flex px-2 justify-between bg-white  rounded-none py-2  ">
                    <div className="flex sm:flex-row flex-col justify-end gap-1 sm:gap-6">

                        <TabsTrigger className='text-base data-[state=active]:shadow-none p-0' value="account">Sesiones Plenarias</TabsTrigger>
                        <TabsTrigger className='text-base data-[state=active]:shadow-none p-0' value="password">Comisión de Educación</TabsTrigger>
                        <TabsTrigger className='text-base data-[state=active]:shadow-none p-0' value="password">Comisión de Salud</TabsTrigger>
                    </div>
                </TabsList>
                <TabsContent value="account">Make changes to your account here.</TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent>
            </Tabs>

        </div>
    )
}

export default CiendDias