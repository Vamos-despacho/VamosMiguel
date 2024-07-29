import React from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { videosYotube } from '@/app/api/data/videos'

export const PlayListTabs = ({ showId, setShowId }: { showId: string, setShowId: (id: string) => void }) => {
    return (
        <Tabs defaultValue="all" className="flex flex-col">
            <TabsList className="flex items-center justify-between border-b p-3 md:px-2 md:py-6">
                <TabsTrigger value="all">Todo</TabsTrigger>
                <TabsTrigger value="incidents">Incidencias</TabsTrigger>
                <TabsTrigger value="projects">Presentación de Anteproyectos</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="m-2 ">
                <ScrollArea className="h-80 w-auto ">
                    <div className="divide-y">
                        {videosYotube.map((video) => (
                            <div key={video.id} onClick={() => setShowId(video.id)} className=" p-2 md:p-2 space-y-2">
                                <div className={` ${video.id === showId ? 'bg-slate-100' : ''} cursor-pointer hover:bg-slate-100 flex items-center gap-4 bg-white rounded-md p-4`}>
                                    <div className=" rounded-md flex flex-col items-center justify-center aspect-square w-12 h-12">
                                        <span className="text-sm font-medium">{video.day}</span>
                                        <span className="text-xs text-muted-foreground">{video.month}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-medium">{video.title}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </ScrollArea>
            </TabsContent>
            <TabsContent value="incidents" className="m-0">
                <ScrollArea className="h-80 w-auto">
                    <div className="divide-y">
                        {videosYotube.filter(video => video.list === 'incidencia').map((video) => (
                            <div key={video.id} onClick={() => setShowId(video.id)} className=" p-2 md:p-2 space-y-2">
                                <div className={` ${video.id === showId ? 'bg-slate-100' : ''} cursor-pointer hover:bg-slate-100 flex items-center gap-4 bg-white rounded-md p-4`}>
                                    <div className=" rounded-md flex flex-col items-center justify-center aspect-square w-12 h-12">
                                        <span className="text-sm font-medium">{video.day}</span>
                                        <span className="text-xs text-muted-foreground">{video.month}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-medium">{video.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </TabsContent>
            <TabsContent value="projects" className="m-0">
                <ScrollArea className="h-80 w-auto">
                    <div className="divide-y">
                        {videosYotube.filter(video => video.list === 'presentacion').map((video) => (
                            <div key={video.id} onClick={() => setShowId(video.id)} className=" p-2 md:p-2 space-y-2">
                                <div className={` ${video.id === showId ? 'bg-slate-100' : ''} cursor-pointer hover:bg-slate-100 flex items-center gap-4 bg-white rounded-md p-4`}>
                                    <div className=" rounded-md flex flex-col items-center justify-center aspect-square w-12 h-12">
                                        <span className="text-sm font-medium">{video.day}</span>
                                        <span className="text-xs text-muted-foreground">{video.month}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-medium">{video.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </TabsContent>
        </Tabs>
    )
}
