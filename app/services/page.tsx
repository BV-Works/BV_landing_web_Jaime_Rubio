import Image from "next/image"
import { PublicShell } from "@/components/landing/layout/public-shell"
import { DragCarousel } from "@/components/landing/services/drag-carousel"

type Feature = { icon: string; label: string }

const MIX_FEATURES: Feature[] = [
  { icon: "/img/EDIT-ICON.png", label: "Edición y limpieza de audio" },
  { icon: "/img/EQ-ICON.png", label: "Ecualización y Balance" },
  { icon: "/img/COMP-ICON.png", label: "Compresión" },
  { icon: "/img/VOLUME-ICON.png", label: "Dinámica y Volumen" },
  { icon: "/img/EFFECTS-ICON.png", label: "Efectos y Procesamiento" },
  { icon: "/img/360-ICON.png", label: "Imagen estereo" },
]

const MASTER_FEATURES: Feature[] = [
  { icon: "/img/EQ-ICON.png", label: "Ecualización y Balance" },
  { icon: "/img/COMP-ICON.png", label: "Compresión" },
  { icon: "/img/VOLUME-ICON.png", label: "Volumen" },
  { icon: "/img/EDIT-ICON.png", label: "Edición final" },
  { icon: "/img/FILES-ICON.png", label: "Formato y Metadatos" },
]

const DESIGN_COVERS = Array.from({ length: 8 }, (_, i) => ({
  src: `/img/COVER-${i}.jpg`,
  alt: `Cover ${i}`,
}))

const STUDIO_PHOTOS = Array.from({ length: 9 }, (_, i) => ({
  src: `/img/STUDIO-0${i + 1}.jpg`,
  alt: `Imagen estudio ${i + 1}`,
}))

export default function ServicesPage() {
  return (
    <PublicShell>
      {/* Intro */}
      <section className="relative px-12 py-16 max-md:px-6">
        <div className="flex flex-col">
          <h1 className="mb-4 mt-0 font-title text-6xl font-extrabold text-pink">
            SERVICIOS
          </h1>
          <p className="text-justify text-base italic">
            Aquí encontrarás todos los servicios que ofrecemos en{" "}
            <span className="font-extrabold not-italic text-pink">
              BAJO VIGILANCIA MUSIC
            </span>
            .
          </p>
          <h2 className="mt-2 text-3xl">¿Cómo puedo contratar sus servicios?</h2>
          <p className="text-justify text-base italic">
            Puedes contactarnos a través de nuestro formulario en la página de
            contacto o enviándonos un correo electrónico a:{" "}
            <a
              href="mailto:music@bajovigilancia.com"
              className="font-extrabold text-pink"
            >
              music@bajovigilancia.com
            </a>
            .
          </p>
          <p className="text-justify text-base italic">
            La mayoría de nuestros servicios son{" "}
            <span className="font-extrabold not-italic text-pink">online</span>,
            por lo que te responderemos lo antes posible y además podremos
            conectar por video llamada para aclarar cualquier duda sobre tu
            proyecto.
          </p>
        </div>
      </section>

      {/* Mezcla */}
      <section id="mix" className="px-12 py-16 max-md:px-6">
        <h2 className="mt-2 text-3xl">MEZCLA</h2>
        <p className="text-justify text-base italic">
          Realizamos la limpieza de tus pistas, ajustamos la ecualización, la
          dinámica, el tono y el volumen en consonancia con el estilo y la
          intención artística del proyecto.
        </p>
        <LastParagraph>
          Trabajamos tanto con instrumentales como con voces, asegurando un
          sonido profesional y equilibrado entre los distintos elementos de la
          mezcla.
        </LastParagraph>
        <ServiceMedia
          image="/img/MARKETING-IMG-3.png"
          text="Mezclar una canción es el proceso de combinar y ajustar todas las pistas de audio grabadas (como voces, instrumentos y efectos) para que suenen de manera equilibrada y coherente. Esto incluye:"
          features={MIX_FEATURES}
        />
      </section>

      {/* Mastering */}
      <section id="master" className="px-12 py-16 max-md:px-6">
        <h2 className="mt-2 text-3xl">MASTERING</h2>
        <p className="text-justify text-base italic">
          Contamos con una sala de monitorización acústicamente tratada y con un
          equipo de alta calidad para garantizar un resultado profesional.
        </p>
        <p className="text-justify text-base italic">
          Optimizamos tu track, ajustando ecualización, dinámica y volumen para
          asegurar que suene bien en todos los sistemas de reproducción y
          plataformas digitales.
        </p>
        <LastParagraph>
          Podemos trabajar con un solo archivo de audio que incluya la mezcla
          final de las voces sobre la instrumental. Aunque personalmente nos
          gusta que nos enviéis las 2 pistas separadas (la vocal y la
          instrumental) para tener más control sobre el proceso.
        </LastParagraph>
        <ServiceMedia
          image="/img/MARKETING-IMG-1.png"
          text="Hacer un “Master” de una canción es el último paso en el proceso de producción musical, que consiste en preparar la grabación final para su distribución. Esto incluye:"
          features={MASTER_FEATURES}
        />
      </section>

      {/* Diseño */}
      <section id="design" className="px-12 py-16 max-md:px-6">
        <h2 className="mt-2 text-3xl">DISEÑO</h2>
        <LastParagraph>
          Ofrecemos un servicio de diseño integral, cualquier idea que tengas la
          transformamos en una imagen única.
        </LastParagraph>
        <DragCarousel images={DESIGN_COVERS} />
      </section>

      {/* Estudio */}
      <section id="studio" className="px-12 py-16 max-md:px-6">
        <h2 className="mt-2 text-3xl">ESTUDIO</h2>
        <p className="text-justify text-base italic">
          Todos nuestros servicios están disponibles de manera online. Pero si
          vives en Asturias o te apetece visitar esta maravillosa provincia
          también puedes venir a nuestro estudio.
        </p>
        <LastParagraph>
          Aquí os dejamos una muestra de nuestro espacio de trabajo con una
          actuación en vivo de uno de los integrantes de nuestro equipo.
        </LastParagraph>
        <div className="mx-auto mb-8 aspect-video w-full max-w-[900px]">
          <iframe
            className="h-full w-full border-0"
            src="https://www.youtube-nocookie.com/embed/jlKeclWUtBI?si=vhAVYtA5p2k5CATq"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <DragCarousel images={STUDIO_PHOTOS} />
      </section>
    </PublicShell>
  )
}

/** A paragraph followed by the signature pink divider line. */
function LastParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-justify text-base italic after:mt-8 after:block after:h-0.5 after:w-full after:bg-pink after:content-['']">
      {children}
    </p>
  )
}

/** Reusable media + feature-grid block shared by Mezcla and Mastering. */
function ServiceMedia({
  image,
  text,
  features,
}: {
  image: string
  text: string
  features: Feature[]
}) {
  return (
    <div className="flex flex-wrap items-start justify-center gap-[clamp(1rem,3.5vw,10rem)] max-[510px]:flex-col max-[510px]:items-center">
      <div className="max-w-[980px] flex-1 basis-[45%] self-center">
        <Image
          src={image || "/placeholder.svg"}
          alt=""
          width={660}
          height={440}
          className="block h-auto w-full max-w-[660px]"
        />
      </div>
      <div className="max-w-[600px] flex-1 basis-1/2">
        <p className="mb-4 mt-0 text-justify text-base italic leading-normal">
          {text}
        </p>
        <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex flex-col items-center text-center"
            >
              <Image
                src={feature.icon || "/placeholder.svg"}
                alt={feature.label}
                width={80}
                height={80}
                className="mb-2 h-[clamp(60px,7vw,80px)] w-[clamp(60px,7vw,80px)] rounded-xl border-2 border-pink"
              />
              <p className="text-[0.8rem] text-pink">{feature.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
