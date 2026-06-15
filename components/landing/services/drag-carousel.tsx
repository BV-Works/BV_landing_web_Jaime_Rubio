"use client"

import { useRef } from "react"

type CarouselImage = { src: string; alt: string }

/**
 * Horizontal drag carousel with momentum/inertia, ported from the original
 * vanilla JS pointer-drag implementation. Scrollbar is hidden on desktop
 * (see `.bv-carousel-track` in globals.css) and the track fades out on the right.
 */
export function DragCarousel({ images }: { images: CarouselImage[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const state = useRef({
    dragging: false,
    startX: 0,
    startScroll: 0,
    velocity: 0,
    raf: 0,
  })

  const animate = () => {
    const track = trackRef.current
    const s = state.current
    if (track && !s.dragging) {
      track.scrollLeft += s.velocity
      s.velocity *= 0.95
      if (Math.abs(s.velocity) > 0.5) {
        s.raf = requestAnimationFrame(animate)
      }
    }
  }

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current
    if (!track) return
    const s = state.current
    s.dragging = true
    track.setPointerCapture(e.pointerId)
    s.startX = e.clientX
    s.startScroll = track.scrollLeft
    s.velocity = 0
    cancelAnimationFrame(s.raf)
  }

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current
    const s = state.current
    if (!track || !s.dragging) return
    const dx = e.clientX - s.startX
    s.velocity = -dx
    track.scrollLeft = s.startScroll - dx
  }

  const stopDragging = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current
    const s = state.current
    if (!track || !s.dragging) return
    s.dragging = false
    try {
      track.releasePointerCapture(e.pointerId)
    } catch {
      /* pointer may already be released */
    }
    s.raf = requestAnimationFrame(animate)
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        className="bv-carousel-track flex cursor-grab snap-x snap-mandatory select-none gap-8 overflow-x-auto scroll-smooth active:cursor-grabbing max-md:gap-0 max-md:px-4"
      >
        {images.map((image) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            draggable={false}
            className="h-auto max-h-[280px] w-auto flex-none snap-start object-contain max-md:max-h-[270px] max-md:basis-[70%] max-md:snap-center"
          />
        ))}
      </div>
      {/* Right-edge fade */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-[120px] bg-gradient-to-r from-transparent to-paper max-md:w-[60px]"
      />
    </div>
  )
}
