import { useReducer } from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

import ResumeCard from '../components/Resume/ResumeCard'
import InputColor from '../components/Resume/InputColor'
import DownloadBtn from '../components/Resume/DownloadBtn'
import GeneratePreviewBtn from '../components/Resume/GeneratePreviewBtn'

const initialColors = {
  accentColor: '#ff0000',
  bgColor: '#000000',
  secBgColor: '#eeeeee',
}
function reducer(state, action) {
  switch (action.type) {
    case 'accentColorChange':
      return { ...state, accentColor: action.payLoad }
    case 'bgColorChange':
      return { ...state, bgColor: action.payLoad }
    case 'secBgColorChange':
      return { ...state, secBgColor: action.payLoad }
    default:
      throw new Error(`Invalid action ${action.type}`)
  }
}
export default function Resume({ data, dispatch2 }) {
  const [colors, dispatch] = useReducer(reducer, initialColors)
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
          color={colors.accentColor}
          onChange={(e) =>
            dispatch({ type: 'accentColorChange', payLoad: e.target.value })
          }
        />
        <InputColor
          txt={'Background color'}
          color={colors.bgColor}
          onChange={(e) =>
            dispatch({ type: 'bgColorChange', payLoad: e.target.value })
          }
        />
        <InputColor
          txt={'Second Background color'}
          color={colors.secBgColor}
          onChange={(e) =>
            dispatch({ type: 'secBgColorChange', payLoad: e.target.value })
          }
        />
        <DownloadBtn downloadPDF={downloadPDF} />
      </div>
      <ResumeCard
        data={data}
        accentColor={colors.accentColor}
        bgColor={colors.bgColor}
        secBgColor={colors.secBgColor}
      ></ResumeCard>
      <GeneratePreviewBtn dispatch={dispatch2} />
    </section>
  )
}
