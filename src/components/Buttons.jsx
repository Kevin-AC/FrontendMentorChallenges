function Buttons ({ text }) {
  return (
    <button className={`
      boton ${text === 'Learn More'
        ? 'bg-none text-White-text'
        : text === 'Sign Up' ? 'text-White-text bg-gradient-to-r from-Verylightred to-Lightred' : 'bg-White-text'}`}
    >
      {text}
    </button>
  )
}
export default Buttons
