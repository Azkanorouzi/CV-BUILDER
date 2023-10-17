import Pagination from '../components/Pagination'

export default function CVBuilder({ children }) {
  return (
    <section className="grid place-content-center w-full h-full ">
      <div className="flex items-center rounded-xl">
        <Pagination></Pagination>
        <div className="text-3xl bg-neutral w-full h-full rounded-tr-2xl border  border-l-0 text-primary flex items-center justify-center border-primary">
          <span className="text-secondary">General Info</span>
        </div>
      </div>
      <article
        className="card bg-neutral-focus p-8 text-accent rounded-tl-none  rounded-tr-none  border   border-t-0 border-primary shadow overflow-scroll max-h-96"
        style={{ maxHeight: '33rem' }}
      >
        {children}
      </article>
    </section>
  )
}
