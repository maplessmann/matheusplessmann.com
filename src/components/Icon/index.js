import './Icon.scss'

const Icon = ({ id, ...props }) => {
  return (
    <svg className={`icon ${id}`} aria-hidden {...props}>
      <use xlinkHref={`#${id}`} />
    </svg>
  )
}

export default Icon
