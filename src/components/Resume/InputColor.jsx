export default function InputColor({ onChange, color, txt }) {
  return (
    <div className="lg:rounded-xl lg:bg-secondary p-1 lg:p-3 lg:border border-primary flex  justify-end lg:justify-center items-center gap-2 lg:text-black w-full lg:w-auto mb-2">
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
