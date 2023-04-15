function Buttons ({ text, style }) {
  return (
    <button className={` w-32 h-12 border border-White-text rounded-full font-bold ${style} `}>
      {text}
    </button>
  )
}
export default Buttons

// ${text === 'Sign Up' ? 'xl:text-Lightred xl:bg-gradient-to-r from-White-text to-White-text' : ''}
