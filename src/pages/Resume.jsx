import { useEffect } from 'react'

export default function Resume({ data }) {
  useEffect(() => {
    console.log(data)
  }, [])
  return <section>resume</section>
}
