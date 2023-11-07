export default function CVBuilderBody({ children }) {
  return (
    <article
      className="card bg-neutral-focus p-10 lg:p-8 text-accent rounded-tl-none  rounded-tr-none  border   border-t-0 border-primary shadow overflow-scroll lg:max-h-96 overflow-x-hidden"
      style={{
        maxHeight: '33rem',
      }}
    >
      {children}
    </article>
  )
}
