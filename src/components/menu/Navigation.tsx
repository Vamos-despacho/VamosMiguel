"use client";

import React, { useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import {
  LucideChevronDown,
  LucideChevronRight,
  LucideChevronUp,
} from "lucide-react";
import Transparencia from "../../app/transparencia/page";
import {
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from "@radix-ui/react-menubar";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <Menubar className="border-none">
      <MenubarMenu>
        <Link href="/ley-51">
          <MenubarTrigger className="hover:bg-gray-100 text-base lg:text-lg text-azulv ">
            Ley 51
          </MenubarTrigger>
        </Link>
      </MenubarMenu>
      {/* <MenubarMenu>
        <Link href="/biografia">
          <MenubarTrigger className="hover:bg-gray-100 text-base lg:text-lg text-azulv ">
            Biografía
          </MenubarTrigger>
        </Link>
      </MenubarMenu> */}
      <MenubarMenu>
        <MenubarTrigger className="hover:bg-gray-100 flex items-center text-base lg:text-lg text-azulv">
          Despacho
          <LucideChevronDown className="w-3.5 h-3.5 ml-0" />
        </MenubarTrigger>
        <MenubarContent>
          <Link href="/biografia">
            <MenubarItem>Biografía</MenubarItem>
          </Link>
          <Link href="/suplente">
            <MenubarItem>Diputada Suplente</MenubarItem>
          </Link>
          <Link href="/equipo-trabajo">
            <MenubarItem>Equipo de Trabajo</MenubarItem>
          </Link>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <Link href="/articulos">
          <MenubarTrigger className="hover:bg-gray-100 text-base lg:text-lg text-azulv">
            Artículos
          </MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link href="/propuestas">
          <MenubarTrigger className="hover:bg-gray-100 text-base lg:text-lg text-azulv">
            Propuestas
          </MenubarTrigger>
        </Link>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="hover:bg-gray-100 flex text-base lg:text-lg text-azulv justify-center items-center">
          Labor Legislativa
          <LucideChevronDown className="w-3.5 h-3.5 ml-1" />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger className=" pl-2 p-2 px-0  flex items-center justify-between text-sm ">
              Atención Ciudadana
              <LucideChevronRight className="w-3.5 h-3.5 ml-3 " />
            </MenubarSubTrigger>
            <MenubarSubContent className="bg-white p-2 border rounded-sm ml-1">
              <Link href="/solicitar-reunion">
                <MenubarItem>Solicitar Reunión</MenubarItem>
              </Link>
              <MenubarSeparator />
              <Link href="/participacion-ciudadana">
                <MenubarItem>Participación Ciudadana</MenubarItem>
              </Link>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <Link href="/anteproyectos">
            <MenubarItem>Anteproyectos</MenubarItem>
          </Link>
          <Link href="/comisiones">
            <MenubarItem>Comisiones</MenubarItem>
          </Link>
          <Link href="/pleno">
            <MenubarItem>Pleno</MenubarItem>
          </Link>
          <Link href="/actividades">
            <MenubarItem>Actividades Legislativas</MenubarItem>
          </Link>
          <Link href="/informe-de-gestion">
            <MenubarItem>Informe de Gestión</MenubarItem>
          </Link>
          {/* <Link href='/equipo'>
                        <MenubarItem>Informe de Gestión</MenubarItem>
                    </Link> */}
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <Link href="/transparencia">
          <MenubarTrigger className="hover:bg-gray-100 text-base lg:text-lg text-azulv">
            Transparencia
          </MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link href="/contactanos">
          <MenubarTrigger className="hover:bg-gray-100 text-base lg:text-lg text-azulv">
            Contáctanos
          </MenubarTrigger>
        </Link>
      </MenubarMenu>
    </Menubar>
  );
};

export default Navigation;
