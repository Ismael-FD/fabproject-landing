"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Globe,
  Users,
  UserPlus,
  LogOut,
  User,
  DollarSign,
} from "lucide-react";
import { removeToken } from "@/lib/auth";

const navigation = [
  { name: "Dashboard",    href: "/dashboard",      icon: LayoutDashboard },
  { name: "Clientes",    href: "/clientes",       icon: Users },
  { name: "Nuevo Cliente", href: "/clientes/nuevo", icon: UserPlus },
  { name: "Precios",     href: "/precios",        icon: DollarSign },
  { name: "Landing",     href: "/landing",        icon: Globe },
];

export default function AdminSidebar({ isOpen, onClose }) {
  const pathname  = usePathname();
  const router    = useRouter();
  const [adminEmail, setAdminEmail] = useState("");
  // hover state para desktop expand/collapse
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("admin_usuario");
      if (raw) setAdminEmail(JSON.parse(raw).email || "");
    } catch (_) {}
  }, []);

  const handleLogout = () => {
    removeToken();
    localStorage.removeItem("admin_usuario");
    router.push("/login");
  };

  // ruta activa: coincide exacta o es sub-ruta (pero /clientes/nuevo no marca /clientes)
  const isActive = (href) => {
    if (href === "/clientes") return pathname === "/clientes";
    return pathname === href || pathname.startsWith(href + "/");
  };

  // En desktop: se expande con hover. En mobile: se controla con isOpen
  const expanded = hovered || isOpen;

  return (
    <>
      {/* Overlay mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => onClose?.()}
        />
      )}

      {/* Sidebar */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`
          fixed left-4 top-4 bottom-4 z-50
          rounded-3xl border border-gray-700/60 shadow-2xl
          bg-gradient-to-b from-gray-900/95 to-gray-900/80 backdrop-blur-md
          flex flex-col overflow-hidden
          transition-all duration-300 ease-in-out
          ${expanded ? "w-56" : "w-16"}
        `}
      >
        {/* Logo */}
        <div className="flex items-center h-16 px-3 flex-shrink-0 overflow-hidden">
          <div className="w-10 h-10 min-w-[2.5rem] rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg border border-blue-500/20">
            <span className="text-white font-bold text-xs">FC</span>
          </div>
          {expanded && (
            <span className="ml-3 text-white font-semibold text-sm whitespace-nowrap overflow-hidden">
              FabProject
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-700/50 mx-3 flex-shrink-0" />

        {/* Nav */}
        <nav className="flex-1 flex flex-col gap-1 px-2 py-3 overflow-hidden">
          {navigation.map((item) => {
            const Icon   = item.icon;
            const active = isActive(item.href);

            return (
              <button
                key={item.name}
                title={!expanded ? item.name : undefined}
                onClick={() => {
                  router.push(item.href);
                  onClose?.();
                }}
                className={`
                  flex items-center h-11 rounded-2xl px-3 gap-3
                  transition-all duration-200 whitespace-nowrap overflow-hidden
                  ${active
                    ? "bg-blue-600/40 text-white shadow-md"
                    : "text-gray-400 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                <Icon className="h-5 w-5 min-w-[1.25rem]" />
                {expanded && (
                  <span className="text-sm font-medium">{item.name}</span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Divider */}
        <div className="h-px bg-gray-700/50 mx-3 flex-shrink-0" />

        {/* Footer */}
        <div className="flex flex-col gap-1 px-2 py-3 flex-shrink-0 overflow-hidden">
          {/* Email del admin cuando expandido */}
          {expanded && adminEmail && (
            <div className="px-3 pb-2">
              <p className="text-xs text-gray-500 truncate">{adminEmail}</p>
            </div>
          )}

          <button
            title={!expanded ? "Perfil" : undefined}
            className="flex items-center h-11 rounded-2xl px-3 gap-3 text-gray-400 hover:bg-white/10 hover:text-white transition whitespace-nowrap overflow-hidden"
          >
            <User className="h-5 w-5 min-w-[1.25rem]" />
            {expanded && <span className="text-sm font-medium">Perfil</span>}
          </button>

          <button
            onClick={handleLogout}
            title={!expanded ? "Cerrar sesión" : undefined}
            className="flex items-center h-11 rounded-2xl px-3 gap-3 text-gray-400 hover:bg-red-600/30 hover:text-red-300 transition whitespace-nowrap overflow-hidden"
          >
            <LogOut className="h-5 w-5 min-w-[1.25rem]" />
            {expanded && <span className="text-sm font-medium">Cerrar sesión</span>}
          </button>
        </div>
      </div>
    </>
  );
}
