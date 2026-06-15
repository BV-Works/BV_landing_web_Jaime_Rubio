import Image from "next/image"
import { PublicShell } from "@/components/landing/layout/public-shell"
import { ContactForm } from "@/components/landing/contact/contact-form"

export default function ContactPage() {
  return (
    <PublicShell>
      <section className="relative px-12 py-16 max-md:px-6">
        <div className="flex flex-col">
          <h1 className="mb-4 mt-0 font-title text-6xl font-extrabold text-pink">
            CONTACTO
          </h1>
          <p className="text-justify text-base italic">
            Si tienes cualquier duda o sugerencia, no dudes en contactar con
            nosotros a través del formulario.
          </p>
        </div>
      </section>

      <section id="form" className="px-12 py-16 max-md:px-6">
        <div className="flex items-center gap-12 max-md:flex-col max-md:items-start">
          <ContactForm />
          <div className="flex flex-1 justify-center max-md:w-full">
            <Image
              src="/img/MAPA.png"
              alt="Mapa de España"
              width={600}
              height={600}
              className="w-full max-w-[600px]"
            />
          </div>
        </div>
      </section>
    </PublicShell>
  )
}
