// eslint-disable-next-line react/prop-types
export function Button ({ text, style }) {
  return (
    <button className={`w-40 h-10 bg-Red uppercase font-bold font-BarlowCondensed ${style}`}>{text}</button>
  )
}
