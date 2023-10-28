export default function InputColor({ onChange, color, txt }) {
  return (
    <div className="rounded-xl bg-secondary p-3 border border-primary flex  justify-center items-center gap-2 text-black">
      <h3>{txt}</h3>
      <input
        type="color"
        className="border-none outline-none bg-transparent rounded-full w-10 h-10 overflow-hidden border-secondary "
        value={color}
        onChange={onChange}
      />
    </div>
  )
}
