import previewData from '../../data/previewData'
export default function GeneratePreviewBtn({ dispatch }) {
  console.log(dispatch)
  return (
    <button
      className="btn btn-primary rounded-t-none"
      onClick={() => dispatch({ type: 'setPreview', payLoad: previewData })}
    >
      Generate preview
    </button>
  )
}
