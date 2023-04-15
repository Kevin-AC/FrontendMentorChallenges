function Text ({ title, text }) {
  return (
    <section className='flex flex-col gap-1 text-center'>
      <h2 className='subTitle xl:text-left'>{title}</h2>
      <p className='text-Verydarkgrayishblue(bodycopy) text-center p-4 xl:text-left xl:p-0 xl:pt-4'>{text}</p>
    </section>
  )
}
export default Text
