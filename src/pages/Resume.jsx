import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

import ResumeCard from '../components/Resume/ResumeCard'
import InputColor from '../components/Resume/InputColor'
import DownloadBtn from '../components/Resume/DownloadBtn'
import GeneratePreviewBtn from '../components/Resume/GeneratePreviewBtn'
import { useSearchParams } from 'react-router-dom'
import { useFormData } from '../contexts/FormDataContext'

export default function Resume() {
  const [searchParams, setSearchParams] = useSearchParams()
  const accentColor = searchParams.get('accentColor') ?? '#ff0000'
  const bgColor = searchParams.get('bgColor') ?? '#000000'
  const secBgColor = searchParams.get('secBgColor') ?? '#eeeeee'
  const { dispatch: dispatch2 } = useFormData()

  console.log(accentColor, bgColor, secBgColor)
  function downloadPDF() {
    const resumeCardElement = document.querySelector('.resume-card')

    // Create a canvas from the HTML content
    html2canvas(resumeCardElement, { scrollY: -window.scrollY }).then(
      (canvas) => {
        const imgData = canvas.toDataURL('image/png')

        // Define the PDF document
        const pdf = new jsPDF('p', 'mm', 'a4')
        pdf.addImage(imgData, 'PNG', 0, 0, 220, 297) // Adjust page size if needed

        // Save the PDF as a file
        pdf.save('resume.pdf')
      }
    )
  }
  return (
    <section className="grid place-content-center">
      <div className="flex  gap-4 pb-5 items-center">
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
