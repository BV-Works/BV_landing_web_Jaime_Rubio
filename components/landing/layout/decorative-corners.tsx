import { cn } from "@/lib/utils"

type CornerPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center-top"

const POSITION_CLASSES: Record<CornerPosition, string> = {
  "top-left": "top-2 left-2",
  "top-right": "top-2 right-7",
  "bottom-left": "bottom-7 left-2",
  "bottom-right": "bottom-7 right-7",
  "center-top": "top-2 left-1/2 -translate-x-1/2",
}

/**
 * Signature decorative "+" corner marks from the original site.
 * Rendered as absolutely-positioned elements inside a `relative` parent.
 */
export function DecorativeCorners({
  positions,
  className,
}: {
  positions: CornerPosition[]
  className?: string
}) {
  return (
    <>
      {positions.map((position) => (
        <span
          key={position}
          aria-hidden="true"
          className={cn("bv-corner", POSITION_CLASSES[position], className)}
        />
      ))}
    </>
  )
}
