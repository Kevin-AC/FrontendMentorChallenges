function Card ({ imgSrc, tipe, score }) {
  const img = `${imgSrc}`
  return (
    <div className={`w-full h-14 rounded-xl flex justify-between items-center px-4 
    ${tipe === 'Reaction'
                ? 'bg-LightredB'
      : tipe === 'Memory'
                ? 'bg-OrangeyyellowB'
      : tipe === 'Verbal' ? 'bg-GreentealB' : 'bg-CobaltblueB'

      }
    `}
    >
      <div className='flex gap-3'>
        <img src={img} alt='' />
        <p className={`font-semibold ${
          tipe === 'Reaction'
                    ? 'text-Lightred'
          : tipe === 'Memory'
                    ? 'text-Orangeyyellow'
          : tipe === 'Verbal' ? 'text-Greenteal' : 'text-Cobaltblue'

          }`}
        >{tipe}
        </p>
      </div>
      <p className=' font-extrabold text-Darkgrayblue'>{score} / <span className='font-semibold text-Lightlavender'>100</span> </p>
    </div>
  )
}
export default Card
