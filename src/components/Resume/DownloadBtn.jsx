export default function DownloadBtn({ downloadPDF }) {
  return (
    <button
      onClick={downloadPDF}
      className="btn-primary btn flex-1 w-full lg:w-auto rounded-none lg:rounded-lg"
    >
      Save as PDF
    </button>
  )
}
