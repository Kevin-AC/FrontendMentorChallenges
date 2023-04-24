// eslint-disable-next-line react/prop-types
function Buttons ({ title, style }) {
  return (
    <button className={`font-medium text-lg rounded-full  w-[137px] h-12 ${style}`}>{title}</button>
  )
}
export default Buttons
