export default function TextInput({
  children,
  placeholder,
  type,
  value = '',
  onChange = function () {},
}) {
  return (
    <label htmlFor={children}>
      {children}
      <input
        type={type || 'text'}
        id={children}
        name={children}
        onChange={onChange}
        value={value}
        className="border border-secondary rounded-xl p-2 w-full text-primary"
        placeholder={
          placeholder ?? children.replaceAll(':', '').replaceAll('*', '')
        }
      />
    </label>
  )
}
