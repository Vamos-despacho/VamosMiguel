import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BsHeartPulse } from 'react-icons/bs';
import { SchoolIcon } from 'lucide-react';
import { IEvent, IEventDetails } from "@/app/api/data/EventDays";
import { PiUsersFourLight } from "react-icons/pi";
import { IoIosMore } from "react-icons/io";
import TabsContentEvent from "./TabsContentEvent";

const iconBaseStyle = "w-6 h-6 rounded-lg flex items-center justify-center transition-transform transform hover:scale-105";

const icons: { [key: string]: JSX.Element } = {
    Salud: <BsHeartPulse className="w-6 h-6" />,
    Educación: <SchoolIcon className="w-6 h-6" />,
    Pleno: <PiUsersFourLight className="w-6 h-6" />,
    Otros: <IoIosMore className="w-6 h-6" />,
};

const renderIcon = (eventName: string) => (
    <div className={iconBaseStyle}>
        {icons[eventName]}
    </div>
);

const enabledTabs = "border-gray-200";
const disabledTabs = "opacity-70";
const classIcon = "gap-1 px-3 hover:opacity-100 transition-opacity duration-300  border border-gray-200 rounded-sm";

// Funciones de verificación
const hasValidIdsYoutube = (idsYoutube: string[] | undefined): boolean => {
    return idsYoutube?.some(id => id.trim().length > 0) ?? false;
};

const hasValidInstagramLinks = (linksInstagram: string[] | undefined): boolean => {
    return linksInstagram?.some(link => link.trim().length > 0) ?? false;
};

const hasValidEventImages = (eventImages: { linkImagen: string[]; titulo: string; descripcion?: string }[] | undefined): boolean => {
    return eventImages?.some(image => image.linkImagen.some(link => link.trim().length > 0)) ?? false;
};

export const TabsEvents = ({ events }: { events: IEvent[] }) => {
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const [availableTabs, setAvailableTabs] = useState<string[]>([]);

    useEffect(() => {
        // Filtrar tabs disponibles basados en la existencia de eventos con datos válidos
        const tabs = ['Pleno', 'Salud', 'Educación', 'Otros'].filter(tabName =>
            events.some(event =>
                event.eventos.some(e =>
                    e.nombre === tabName &&
                    (hasValidIdsYoutube(e.event?.idsYoutube) ||
                        hasValidInstagramLinks(e.event?.linkInstagram) ||
                        hasValidEventImages(e.event?.eventoImagen))
                )
            )
        );
        setAvailableTabs(tabs);

        // Establecer el primer tab disponible como activo si hay tabs
        if (tabs.length > 0) {
            setActiveTab(tabs[0]);
        } else {
            setActiveTab(null);
        }
    }, [events]);

    if (!activeTab || availableTabs.length === 0) {
        return <div className="text-center text-gray-500 py-4">No hay datos disponibles</div>; // Mensaje cuando no hay datos
    }

    return (
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full p-0 mt-4 h-full">
            <TabsList className="flex h-10 justify-around items-center  bg-white">
                {availableTabs.map((tabName, idx) => (
                    <TabsTrigger
                        key={idx}
                        value={tabName}
                        className={`${classIcon} ${activeTab === tabName ? enabledTabs : disabledTabs}`}
                    >
                        {renderIcon(tabName)}
                        <span className="text-sm text-gray-700">{tabName}</span>
                    </TabsTrigger>
                ))}
            </TabsList>

            {availableTabs.map((tabName) => (
                <TabsContent key={tabName} value={tabName} className="justify-center pt-0">
                    {/* Busca el primer evento correspondiente a la pestaña activa */}
                    {events.flatMap(event => event.eventos)
                        .find(e => e.nombre === tabName)?.event ? (
                        <TabsContentEvent event={events.flatMap(event => event.eventos).find(e => e.nombre === tabName)?.event as IEventDetails} />
                    ) : (
                        <div className="text-center text-gray-500">No hay datos disponibles</div>
                    )
                    }
                </TabsContent>
            ))}
        </Tabs>
    );
};
