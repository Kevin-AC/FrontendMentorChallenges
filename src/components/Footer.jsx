function Footer () {
  return (
    <section className='w-full h-auto py-16 mt-16 flex flex-col md:flex-row justify-center md:justify-evenly items-center md:items-start gap-7 bg-Verydarkblackblue(footerbackground) rounded-tr-[84px]'>
      <img src='/assets/images/logo.svg' alt='logo' />
      <div className='text-center text-Grayishblue(footertext)'>
        <p className='text-white font-semibold mb-5'>Product</p>
        <ul className='flex flex-col gap-2 '>
          <li>Overview</li>
          <li>Pricing</li>
          <li>Marketplace</li>
          <li>Features</li>
          <li>Integrations</li>
        </ul>
      </div>
      <div className='text-center text-Grayishblue(footertext)'>
        <p className='text-white font-semibold mb-5'>Company</p>
        <ul className='flex flex-col gap-2'>
          <li>About</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className='text-center text-Grayishblue(footertext)'>
        <p className='text-white font-semibold mb-5'>Conect</p>
        <ul className='flex flex-col gap-2'>
          <li>Contact</li>
          <li>Newsletter</li>
          <li>Likedin</li>

        </ul>
      </div>

    </section>
  )
}
export default Footer
