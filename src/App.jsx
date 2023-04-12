import Footer from './components/Footer'
import Head from './components/Head'
import Text from './components/Text'

function App () {
  return (
    <main className='w-[375px] h-screen  text-Overpass'>
      <Head />
      <section className='flex flex-col justify-center gap-6 items-center p-4'>
        <h2 className='subTitle'>Designed for the future</h2>
        <div>
          <img src='/assets/images/illustration-editor-mobile.svg' alt='mobileIllustration' />
        </div>
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
      </section>
      <section className=' w-full h-auto pb-16 mt-48 z-50 rounded-tr-[84px] rounded-bl-[84px]  bg-gradient-to-t from-Verydarkdesaturatedblue to-Verydarkgrayblue relative'>
        <img className='absolute -top-44 z-40  ' src='/assets/images/illustration-phones.svg' alt='circle' />
        <div className='relative overflow-hidden w-full h-full'>
          <aside className='StateImg w-full h-full absolute  -top-40  bg-cover bg-center bg-no-repeat' />
          <div className='text-center text-White-text px-8 w-full h-auto  mt-64 '>
            <h2 className='text-3xl '>State of the Art Infrastructure</h2>
            <p className='my-7'> With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
              This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
            </p>
          </div>
        </div>
      </section>
      <section className='flex flex-col justify-center gap-6 items-center p-4'>

        <div>
          <img src='/assets/images/illustration-laptop-mobile.svg' alt='mobileIllustration' />
        </div>
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
      </section>
      <Footer />
    </main>
  )
}
export default App
