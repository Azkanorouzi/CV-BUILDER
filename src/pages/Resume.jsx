// import jsPDF from 'jspdf'
// import html2canvas from 'html2canvas'

import ResumeCard from '../components/Resume/ResumeCard'
import InputColor from '../components/Resume/InputColor'
import DownloadBtn from '../components/Resume/DownloadBtn'
import GeneratePreviewBtn from '../components/Resume/GeneratePreviewBtn'
import { useSearchParams } from 'react-router-dom'
import { useFormData } from '../contexts/FormDataContext'
import jsPDF from 'jspdf'

export default function Resume() {
  const [searchParams, setSearchParams] = useSearchParams()
  const accentColor = searchParams.get('accentColor') ?? '#ff0000'
  const bgColor = searchParams.get('bgColor') ?? '#000000'
  const secBgColor = searchParams.get('secBgColor') ?? '#eeeeee'
  const { dispatch: dispatch2 } = useFormData()

  function downloadPDF() {
    let pdfjs = document.querySelector('.resume-card')
    let doc = new jsPDF('l', 'mm', [970, 970])

    doc.html(pdfjs, {
      callback: function (doc) {
        doc.save('resume.pdf')
      },
      x: 30,
      y: 0,
    })
  }
  return (
    <section className="grid place-content-center ">
      <div className="flex flex-col lg:flex-row items-center lg:gap-2 ">
        <InputColor
          txt={'accentColor'}
          color={accentColor}
          onChange={(e) =>
            setSearchParams({
              accentColor: e.target.value,
              bgColor,
              secBgColor,
            })
          }
        />
        <InputColor
          txt={'Background color'}
          color={bgColor}
          onChange={(e) =>
            setSearchParams({
              accentColor,
              bgColor: e.target.value,
              secBgColor,
            })
          }
        />
        <InputColor
          txt={'Second Background color'}
          color={secBgColor}
          onChange={(e) =>
            setSearchParams({
              accentColor,
              bgColor,
              secBgColor: e.target.value,
            })
          }
        />
        <DownloadBtn downloadPDF={downloadPDF} />
      </div>
      <ResumeCard
        accentColor={accentColor}
        bgColor={bgColor}
        secBgColor={secBgColor}
      ></ResumeCard>
      <GeneratePreviewBtn dispatch={dispatch2} />
    </section>
  )
}
