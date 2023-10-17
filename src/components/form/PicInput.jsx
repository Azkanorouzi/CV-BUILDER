export default function PicInput({ img = false, imgChangeHandler }) {
  return (
    <div className="flex items-center gap-5">
      <div className="avatar">
        <div
          className="w-24 rounded-full border-8 border-dotted animate-spin border-secondary"
          style={{ animationDuration: '8s' }}
        >
          {img && <img src="/images/stock/" />}
        </div>
      </div>
      <label htmlFor="img">
        Select image:
        <input
          type="file"
          id="img"
          name="img"
          accept="image/*"
          value={img}
          onChange={imgChangeHandler}
        />
      </label>
    </div>
  )
}
