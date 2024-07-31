import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BsHeartPulse } from 'react-icons/bs';
import { SchoolIcon } from 'lucide-react';
import { IEvent, IEventDetails } from "@/app/api/data/EventDays";

import { PiUsersFourLight } from "react-icons/pi";
import { IoIosMore } from "react-icons/io";
import TabsContentEvent from "./TabsContentEvent";
import AcordionEvent from "./AcordionEvent";

const iconBaseStyle = "w-10 h-10 rounded-lg flex items-center justify-center transition-transform transform hover:scale-105";

const icons: { [key: string]: JSX.Element } = {
    Salud: <BsHeartPulse className="w-6 h-6 " />,
    Educación: <SchoolIcon className="w-6 h-6 " />,
    Pleno: <PiUsersFourLight className="w-6 h-6 " />,
    Otros: <IoIosMore className="w-6 h-6 " />,
};

const renderIcon = (eventName: string) => (
    <div className={``}>
        {icons[eventName]}
    </div>
);

const enabledTabs = " border-gray-200 ";
const disabledTabs = "opacity-70";
const classIcon = " gap-2 px-3 hover:opacity-100 transition-opacity duration-300 border border-gray-200 rounded-sm ";

export const TabsEvents = ({ events }: { events: IEvent[] }) => {
    const [activeTab, setActiveTab] = useState<string>('pleno');

    useEffect(() => {
        const initialTab = events.some(event => event.pleno) ? 'pleno' :
            events.some(event => event.salud) ? 'salud' :
                events.some(event => event.educacion) ? 'educacion' :
                    events.some(event => event.otros) ? 'otros' : 'pleno'
        setActiveTab(initialTab);
    }, [events]);

    return (
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full p-0 mt-4  h-full ">
            <TabsList className="flex h-12 justify-around items-center mb- bg-white ">


                {events.map((event, idx) => (
                    <div key={idx} className="flex space-x-2">
                        {event.pleno && (
                            <TabsTrigger value="pleno" className={` ${classIcon} ${activeTab === 'pleno' ? enabledTabs : disabledTabs}`}>
                                {renderIcon('Pleno')}
                                <span className="text-sm text-gray-700">Pleno</span>
                            </TabsTrigger>
                        )}
                        {event.salud && (
                            <TabsTrigger value="salud" className={`${classIcon} ${activeTab === 'salud' ? enabledTabs : disabledTabs}`}>
                                {renderIcon('Salud')}
                                <span className="text-sm text-gray-700">Salud</span>
                            </TabsTrigger>
                        )}
                        {event.educacion && (
                            <TabsTrigger value="educacion" className={`${classIcon} ${activeTab === 'educacion' ? enabledTabs : disabledTabs}`}>
                                {renderIcon('Educación')}
                                <span className="text-sm text-gray-700">Educación</span>
                            </TabsTrigger>
                        )}
                        {event.otros && (
                            <TabsTrigger value="otros" className={`${classIcon} ${activeTab === 'otros' ? enabledTabs : disabledTabs}`}>
                                {renderIcon('Otros')}
                                <span className="text-sm text-gray-700">Otros</span>
                            </TabsTrigger>
                        )}
                    </div>
                ))}
            </TabsList>

            <TabsContent value="pleno" className="justify-center pt-0" >

                {/* <AcordionEvent event={events.find(event => event.pleno)?.pleno as IEventDetails} /> */}
                <TabsContentEvent event={events.find(event => event.pleno)?.pleno as IEventDetails} />

            </TabsContent>
            <TabsContent value="salud" className="justify-center pt-0">


                <TabsContentEvent event={events.find(event => event.salud)?.salud as IEventDetails} />

            </TabsContent>
            <TabsContent value="educacion" className="justify-center pt-0">


                <TabsContentEvent event={events.find(event => event.educacion)?.educacion as IEventDetails} />

            </TabsContent>
            <TabsContent value="otros" className="justify-center pt-0">

                {/* {events.map((event, idx) => (
                        <div key={idx} className="text-center font-semibold py-2">
                            {event.otros && <p>{event.otros.evento}</p>}
                        </div>
                    ))} */}
                <TabsContentEvent event={events.find(event => event.otros)?.otros as IEventDetails} />

            </TabsContent>
        </Tabs >
    );
};
