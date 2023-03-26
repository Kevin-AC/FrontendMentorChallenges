function Card ({ image, name, text, picture, message, activity, date, isRead, handdleClick, id }) {
  const imageSrc = `/assets/images/avatar-${image}.webp`

  return (
    <div
      className={`w-full p-3 h-auto rounded-xl flex flex-col gap-3 hover:cursor-pointer ${isRead ? 'bg-Verylightgrayishblue ' : ''}`}
      onClick={handdleClick}

    >
      <div className='flex items-start gap-4'>
        <img src={imageSrc} width={45} alt='Profile img' />
        <div className='text-sm text-Darkgrayishblue font-medium'>
          <strong className='text-Verydarkblue'>{name}</strong> {text}
          <span className={`  font-bold ${activity === 'Chess Club' ? 'text-Blue' : 'text-Darkgrayishblue'}`}> {activity}</span>
          <span className={` text-Red ${isRead === false ? 'hidden' : ''}`}> ●</span><br />
          <span className='text-Grayishblue'>{date}</span>
        </div>
        <img className={`${picture === '' ? 'hidden' : ''}`} src={picture} width={45} alt='picture' />
      </div>
      <div className={`text-sm text-Darkgrayishblue pl-16  ${message === '' ? 'hidden' : ''}`}>
        <p className='border p-4 rounded-md'>{message}</p>
      </div>

    </div>

  )
}
export default Card
