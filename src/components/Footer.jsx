function Footer () {
  return (
    <footer className="w-full h-auto py-16 flex justify-center rounded-tr-[120px] bg-Verydarkblackblue(footerbackground) ">
      <div className="w-4/5 flex flex-col xl:flex-row items-center xl:items-start gap-4 xl:gap-28">
        <img src="/images/logo.svg" alt="Logo" />
          <ul className="pt-10 xl:pt-0 text-White-text flex flex-col xl:flex-row gap-4 xl:gap-28 ">
          <li className="font-bold text-center xl:text-left">Product
              <ul className="menuUl xl:text-left relative mt-4 bg-transparent font-normal text-Grayishblue(footertext)">
                <li><a href="#">Overview</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Marketplace</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Integrations</a></li>
              </ul>
            </li>
          <li className="font-bold  text-center xl:text-left">Company
              <ul className="menuUl xl:text-left relative mt-4  bg-transparent font-normal text-Grayishblue(footertext)">
                <li><a href="#">About</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </li>
          <li className="font-bold  text-center xl:text-left">Connect
              <ul className="menuUl xl:text-left relative mt-4  bg-transparent font-normal text-Grayishblue(footertext)">
                <li><a href="#">Contact</a></li>
                <li><a href="#">Newsletter</a></li>
                <li><a href="#">Linkedin</a></li>
              </ul>
            </li>
          </ul>
        </div>
    </footer>
  )
}
export default Footer
