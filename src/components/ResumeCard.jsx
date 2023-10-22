import { useEffect } from 'react'

export default function ResumeCard({ data }) {
  //   useEffect(() => {
  //     console.log(data)
  //   }, [])
  return (
    <section className="bg-white flex ">
      <aside className="p-8" style={{ background: 'black' }}>
        <div className="avatar">
          <div
            className={`w-24 rounded-full border-secondary border border-primary ${
              !data.img && 'border-3 border-dotted'
            }`}
          >
            {data.img && <img src={data.img} />}
          </div>
        </div>
      </aside>
      <article className="p-5">everythingelse</article>
    </section>
  )
}
