export default function DownloadBtn({ downloadPDF }) {
  return (
    <button onClick={downloadPDF} className="btn-primary btn flex-1">
      Save as PDF
    </button>
  )
}
