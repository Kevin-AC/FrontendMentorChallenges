import Text from './Text'
import AOS from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
function Body () {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
      <section className="w-full h-auto  overflow-hidden flex flex-col xl:gap-32">
        <article className='text-center mt-16 xl:mt-32  xl:pb-40 relative'>
          <h2 className="headings">Designed for the future</h2>
          <div className="w-full xl:w-3/5  xl:mt-28 xl:px-32 flex flex-col gap-14">
            <picture
              data-aos='fade-down'
              data-aos-easing='linear'
              data-aos-duration='1500'
              className='h-auto mt-10 xl:mt-0 xl:absolute -right-56 top-0 '>
              <source media='(max-width: 465px)' srcSet='/images/illustration-editor-mobile.svg' />
              <img src='/images/illustration-editor-desktop.svg' width={800} alt='Illustration' />
            </picture>
            <div
              data-aos='fade-right'
              data-aos-duration='1500'>
              <Text
                title='Introducing an extensible editor'
                styleP='xl:pr-4'
                paragraph='Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
                              The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
                              videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
                              change the looks of a blog.'
              />
              <Text
                title='Robust content management'
                styleP='xl:pr-10'
                paragraph='Flexible content management enables users to easily move through posts. Increase the usability of your blog
                              by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.'
              />
            </div>
          </div>
        </article>

      <article className='W-full h-auto state flex flex-col xl:flex-row items-center text-center pb-32 mt-52 xl:mt-0 xl:pb-0  xl:mb-28 rounded-tr-[120px] rounded-bl-[120px]'>
        <img
          data-aos='fade-right'
          data-aos-duration='1500'
          className='-mt-44 xl:-mt-16 xl:-mb-24 xl:mr-20  ' src="/images/illustration-phones.svg" alt="Phone-illustrations" />
        <div data-aos='fade-left'
             data-aos-duration='1500'>
            <Text
              title='State of the Art Infrastructure'
              styleP='text-white text-lg xl:pr-40'
              styleT='text-white'
              paragraph='With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
                          This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.'
            />
           </div>
         </article>

      <article className='text-center relative mb-32'>
        <div className='flex flex-col  xl:flex-row-reverse'>
          <div className="w-full xl:w-3/5  xl:mt-28 xl:px-32 flex flex-col  gap-14 ">
            <picture
              data-aos='fade-down'
              data-aos-easing='linear'
              data-aos-duration='1500'
              className='h-auto my-10 xl:mt-0 xl:absolute -left-56 -top-10'>
              <source media='(max-width: 465px)' srcSet='/images/illustration-laptop-mobile.svg' />
              <img src='/images/illustration-laptop-desktop.svg' width={800} alt='Illustration' />
            </picture>
            <div
              data-aos='fade-left'
              data-aos-duration='1500'>
              <Text
                title='Free, open, simple'
                styleP='xl:pr-4'
                paragraph='Blogr is a free and open source application backed by a large community of helpful developers. It supports
                            features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
                            and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.'
              />
              <Text
                title='Powerful tooling'
                styleP='xl:pr-10'
                paragraph='Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                            capable of producing even the most complicated sites.'
              />
            </div>
          </div>
        </div>
      </article>
      </section>
  )
}
export default Body
