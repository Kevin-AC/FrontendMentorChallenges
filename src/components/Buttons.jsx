function Buttons ({ text }) {
  return (
    <button className={`boton ${text === 'Learn More' ? 'bg-none text-White-text' : 'bg-White-text'}`}>
      {text}
    </button>
  )
}
export default Buttons
