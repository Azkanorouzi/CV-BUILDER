import previewData from '../../data/previewData'
export default function GeneratePreviewBtn({ dispatch }) {
  return (
    <button
      className="btn btn-primary rounded-none lg:rounded-t-none "
      onClick={() => dispatch({ type: 'setPreview', payLoad: previewData })}
    >
      Generate preview
    </button>
  )
}
