const FOOTER_LINKS = [
  "POLÍTICA DE PRIVACIDAD",
  "TÉRMINOS Y CONDICIONES",
  "CONFIGURACIÓN DE COOKIES",
]

/** Shared site footer with brand line, legal links and the SoundBetter badge. */
export function PublicFooter() {
  return (
    <footer className="relative bv-bg text-center text-base text-ink">
      <div className="flex flex-col items-center gap-2.5">
        <p className="mb-0 mt-4 font-title text-xl font-bold">
          BAJO VIGILANCIA &copy;
        </p>

        <div className="mx-4 mb-4 mt-2 flex flex-wrap justify-center gap-2.5">
          {FOOTER_LINKS.map((label) => (
            <a
              key={label}
              href="#"
              className="text-ink no-underline hover:underline"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="static mb-4 md:absolute md:bottom-4 md:right-4 md:mb-0">
        <a
          href="https://soundbetter.com/profiles/704126-bajovigilancia-music"
          rel="noopener noreferrer"
          target="_blank"
          title="BajoVigilancia Music profile on SoundBetter"
          className="inline-block"
        >
          {/* External SoundBetter badge, kept as-is from the original site */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="BajoVigilancia Music, Mastering Engineer on SoundBetter"
            src="https://d2p6ecj15pyavq.cloudfront.net/assets/SoundBetterBadge-c84cb3e75c4267f5bee41f7f617a81d9.svg"
            className="mx-auto w-16"
          />
        </a>
      </div>
    </footer>
  )
}
