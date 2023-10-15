export default function Credit({
  icon = '❤️',
  link = 'https://github.com/Azkanorouzi',
  name = 'Azka',
}) {
  return (
    <div className="flex ">
      <p>Built with {icon} by</p>
      <a
        className="link link-hover link-primary cursor-pointer"
        href={link}
        target="blank"
      >
        {name}
      </a>
    </div>
  )
}
