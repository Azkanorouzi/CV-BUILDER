export default function PicInput({ img = false, imgChangeHandler }) {
  return (
    <div className="flex items-center gap-5">
      <div className="avatar">
        <div
          className={`w-24 rounded-full border-secondary border border-primary ${
            !img && 'animate-spin border-8 border-dotted'
          }`}
          style={{ animationDuration: '8s' }}
        >
          {img && <img src={img} />}
        </div>
      </div>
      <label htmlFor="img">
        Select image:
        <input
          type="file"
          id="img"
          name="img"
          accept="image/*"
          onChange={(e) => imgChangeHandler(e)}
          className="input-file"
        />
      </label>
    </div>
  )
}
