import Footer from './components/Footer'
import Head from './components/Head'
import Text from './components/Text'

function App () {
  return (
    <main className='w-auto h-auto  text-Overpass '>
      <Head />
      <section className='w-full xl:h-screen p-4 xl:my-28 relative overflow-hidden '>
        <h2 className='subTitle xl:text-4xl pb-20 '>Designed for the future</h2>
        <div className='xl:w-4/5 xl:flex xl:justify-center'>
          <picture className=' xl:absolute top-0 -right-56  '>
            <source media='(max-width: 465px)' srcSet='/assets/images/illustration-editor-mobile.svg' />
            <img src='/assets/images/illustration-editor-desktop.svg' width={800} alt='Illustration' />
          </picture>
          <div className='flex flex-col gap-12 xl:mr-96 xl:pt-16 xl:w-[520px]'>
            <Text
              title='Introducing an extensible editor'
              text='Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
                    The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
                    videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
                    change the looks of a blog.'
            />
            <Text
              title='Robust content management'
              text='Flexible content management enables users to easily move through posts. Increase the usability of your blog
                    by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.'
            />
          </div>
        </div>
      </section>
      <section className='w-full h-auto xl:h-[430px] z-30 flex flex-col  xl:flex-row  items-center state rounded-tr-[84px] rounded-bl-[84px] pb-28 xl:pb-0 mt-44 xl:mt-0'>
        <img className='xl:mt-10 -mt-32' src='/assets/images/illustration-phones.svg' alt='' />
        <div className='text-center xl:text-left text-White-text mt-9 px-10 xl:px-20  xl:w-2/4  h-auto'>
          <h2 className='text-3xl '>State of the Art Infrastructure</h2>
          <p className='my-7 '> With reliability and speed in mind, worldwide data centers provide the backbone
            for ultra-fast connectivity.
            This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
          </p>
        </div>
      </section>
      <section className='w-full h-screen flex flex-col justify-center gap-6 items-center p-4 xl:mt-44 relative'>
        <picture className=' xl:absolute top-6 -left-56  '>
          <source media='(max-width: 465px)' srcSet='/assets/images/illustration-laptop-mobile.svg' />
          <img src='/assets/images/illustration-laptop-desktop.svg' width={800} alt='Illustration' />
        </picture>
        <div className='flex flex-col gap-12 xl:ml-96 xl:w-[520px]'>
          <Text
            title='Free, open, simple'
            text=' Blogr is a free and open source application backed by a large community of helpful developers. It supports
          features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
          and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.'
          />
          <Text
            title='Powerful tooling'
            text='Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
          capable of producing even the most complicated sites.'
          />
        </div>

      </section>
      <Footer />
    </main>
  )
}
export default App
