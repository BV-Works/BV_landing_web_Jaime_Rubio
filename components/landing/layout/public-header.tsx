"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { DecorativeCorners } from "./decorative-corners"

const SERVICE_LINKS = [
  { label: "MEZCLA", href: "/services#mix" },
  { label: "MASTERING", href: "/services#master" },
  { label: "ESTUDIO", href: "/services#studio" },
  { label: "DISEÑO", href: "/services#design" },
]

/**
 * Shared site header with the signature vertical, right-aligned navigation.
 * On small screens it collapses into a hamburger-triggered panel.
 */
export function PublicHeader() {
  const [open, setOpen] = useState(false)

  // Close the mobile panel when the viewport grows past the breakpoint.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 762) setOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <header className="sticky top-0 z-10 flex min-h-[35vh] flex-none basis-auto items-start justify-end py-6 max-md:fixed max-md:right-0 max-md:min-h-0 md:basis-[260px]">
      {/* Decorative corners — desktop only */}
      <DecorativeCorners
        positions={["top-left", "top-right", "bottom-left", "bottom-right"]}
        className="max-md:hidden"
      />

      {/* Mobile toggle buttons */}
      <button
        type="button"
        aria-label="Abrir navegación"
        onClick={() => setOpen(true)}
        className={cn(
          "cursor-pointer border-none bg-transparent px-4 text-3xl text-ink md:hidden",
          open && "hidden",
        )}
      >
        ☰
      </button>
      <button
        type="button"
        aria-label="Cerrar navegación"
        onClick={() => setOpen(false)}
        className={cn(
          "absolute right-4 top-6 z-30 cursor-pointer border-none bg-transparent text-3xl text-ink md:hidden",
          open ? "block" : "hidden",
        )}
      >
        X
      </button>

      {/* Mobile blurred overlay */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={cn(
          "fixed right-0 top-0 z-20 h-[600px] w-[311px] rounded-lg bg-[var(--color-paper-translucent)] backdrop-blur-md md:hidden",
          open ? "block" : "hidden",
        )}
      />

      {/* Navigation */}
      <nav
        className={cn(
          "z-30 md:block",
          "max-md:absolute max-md:right-3 max-md:top-12 max-md:w-[200px]",
          open ? "max-md:block" : "max-md:hidden",
        )}
      >
        <ul className="m-0 mr-4 flex list-none flex-col gap-2 p-0">
          <li>
            <NavLink href="/" onNavigate={() => setOpen(false)}>
              HOME
            </NavLink>
          </li>

          {/* Services with hover submenu (desktop) / always-visible sub-links (mobile) */}
          <li className="group relative">
            <NavLink href="/services" onNavigate={() => setOpen(false)}>
              SERVICIOS
            </NavLink>
            <ul className="overflow-hidden text-right opacity-100 transition-all md:max-h-0 md:opacity-0 md:group-hover:max-h-[500px] md:group-hover:opacity-100">
              {SERVICE_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block w-fit justify-self-end px-4 py-1 font-title text-2xl font-normal text-ink transition-colors hover:text-pink max-md:px-0"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <NavLink href="/contact" onNavigate={() => setOpen(false)}>
              CONTACTO
            </NavLink>
          </li>
          <li>
            <NavLink href="/faq" onNavigate={() => setOpen(false)}>
              FAQs
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

function NavLink({
  href,
  children,
  onNavigate,
}: {
  href: string
  children: React.ReactNode
  onNavigate: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="block w-fit justify-self-end px-4 py-3 font-title text-[2.1rem] font-extrabold leading-none text-ink transition-colors hover:text-pink"
    >
      {children}
    </Link>
  )
}
