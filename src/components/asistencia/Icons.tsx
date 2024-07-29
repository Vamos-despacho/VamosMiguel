import { SchoolIcon } from "lucide-react";
import { BsHeartPulse, BsMotherboard } from "react-icons/bs";
import { MdOutlineMore } from "react-icons/md";
import { PiUsersFourLight } from "react-icons/pi";
import { IoIosMore } from "react-icons/io";

const iconData = [
    {
        icon: PiUsersFourLight,
        label: "Pleno",
    },
    {
        icon: BsHeartPulse,
        label: "Comisión de Salud",
    },
    {
        icon: SchoolIcon,
        label: "Comisión de Educación",
    },
    {
        icon: IoIosMore,
        label: "Otros",
    },
];

export default function Icons() {
    return (
        <section className="w-full  px-1 sm:px-4">
            <div className="sm:flex sm:flex-row grid grid-cols-2  sm:gap-8 lg:gap-6 gap-x-4 justify-center items-center mx-auto">
                {iconData.map((item, index) => (
                    <div key={index}
                        className="flex w-auto gap-1.5 p-1 items-end rounded-lg"
                    >
                        <div className="rounded-md p-0 flex items-center justify-center   ">
                            <item.icon className="w-5 h-5 text-gray-700" />
                        </div>

                        <h3 className="text-sm  text-gray-800">{item.label}</h3>

                    </div>
                ))}
            </div>
        </section>
    );
}
