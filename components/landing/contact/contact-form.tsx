"use client"

const inputClasses =
  "rounded-[30px] border border-[#999] bg-transparent px-[18px] py-3 text-[0.9rem] outline-none focus:border-2 focus:border-pink"

/**
 * Presentational contact form (POC).
 * No submission logic — this layer is meant to be wired up after integration.
 */
export function ContactForm() {
  return (
    <form
      className="flex flex-1 flex-col gap-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <input type="text" placeholder="Nombre" required className={inputClasses} />
      <input type="email" placeholder="Email" required className={inputClasses} />
      <input type="tel" placeholder="Teléfono" className={inputClasses} />

      <select
        name="servicio"
        required
        defaultValue=""
        className={`${inputClasses} appearance-none bg-[right_14px_center] bg-no-repeat pr-10 text-[#999] [background-size:18px] valid:text-ink`}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ff2b7a'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E\")",
        }}
      >
        <option value="" disabled>
          Seleccionar servicio
        </option>
        <option value="mezcla">Mezcla</option>
        <option value="mastering">Mastering</option>
        <option value="mezcla-mastering">Mezcla y Mastering</option>
        <option value="estudio">Estudio</option>
        <option value="diseno">Diseño</option>
      </select>

      <textarea
        placeholder="Mensaje"
        className={`${inputClasses} min-h-[120px] resize-none rounded-[20px]`}
      />

      <button
        type="submit"
        className="w-[140px] cursor-pointer rounded-[30px] border-none bg-pink p-2.5 font-bold text-white"
      >
        Enviar
      </button>
    </form>
  )
}
