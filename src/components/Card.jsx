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
          <strong className='text-Verydarkblue hover:text-Blue'>{name}</strong> {text}
          <span className='hover:text-Blue  font-bold'> {activity}</span>
          <span className={` text-Red ${isRead === false ? 'hidden' : ''}`}> ●</span><br />
          <span className='text-Grayishblue'>{date}</span>
        </div>
        <img className={`${picture === null ? 'hidden' : ''}`} src={picture} width={45} alt='picture' />
      </div>
      <div className={`text-sm text-Darkgrayishblue pl-16   ${message === '' ? 'hidden' : ''}`}>
        <p className='border p-4 rounded-md hover:bg-Lightgrayishblue2'>{message}</p>
      </div>

    </div>

  )
}
export default Card
