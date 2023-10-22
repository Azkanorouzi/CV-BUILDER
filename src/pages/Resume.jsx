import ResumeCard from '../components/ResumeCard'
export default function Resume({ data }) {
  return (
    <section className="grid place-content-center">
      <ResumeCard data={data}></ResumeCard>
    </section>
  )
}
