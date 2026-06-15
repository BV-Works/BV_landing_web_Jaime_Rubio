import { PublicShell } from "@/components/landing/layout/public-shell"

export default function HomePage() {
  return (
    <PublicShell intro background>
      <section className="relative px-12 py-16 max-md:px-6">
        <div className="flex flex-col">
          <p className="mb-4 mt-0 w-[68%] font-title text-[clamp(4.5rem,11vw,8rem)] font-extrabold leading-none text-ink max-[830px]:w-full max-[830px]:text-[4.5rem] max-[510px]:text-[3.5rem] max-[400px]:!text-[2.5rem] text-balance">
            BAJO VIGILANCIA MUSIC &amp; DESIGN
          </p>
          <p className="max-w-full text-justify text-base italic">
            En Bajo Vigilancia Music contamos con un equipo de creativos y
            profesionales en distintas disciplinas.
          </p>
          <h1 className="max-w-full text-justify text-base font-normal italic">
            Con años de experiencia en la industria, nos especializamos en
            ofrecer servicios de alta calidad para músicos, productores y
            artistas que buscan llevar su proyecto al siguiente nivel.
          </h1>
        </div>
      </section>
    </PublicShell>
  )
}
