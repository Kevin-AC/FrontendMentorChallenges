// eslint-disable-next-line react/prop-types
function Text ({ title, paragraph, styleT, styleP }) {
  return (
    <div className='flex flex-col text-lg gap-8 xl:text-left px-5 xl:p-0 '>
      <h3 className={`headings text-3xl ${styleT}`}>{title}</h3>
      <p className={`font-Overpass  ${styleP}`}>{paragraph}</p>
    </div>
  )
}
export default Text
