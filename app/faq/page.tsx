import { PublicShell } from "@/components/landing/layout/public-shell"

export default function FaqPage() {
  return (
    <PublicShell>
      <section className="relative px-12 py-16 max-md:px-6">
        <div className="flex flex-col">
          <h1 className="mb-4 mt-0 text-4xl font-bold">Preguntas Frecuentes</h1>
          <p className="text-justify text-base italic">
            Aquí encontrarás respuestas a las preguntas más comunes sobre
            nuestros servicios y procesos.
          </p>
        </div>
      </section>
    </PublicShell>
  )
}
