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
          <img src='src/assets/images/illustration-editor-mobile.svg' alt='mobileIllustration' />
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
      <section className='w-full h-[600px] rounded-tr-[84px] rounded-bl-[84px]  bg-gradient-to-t from-Verydarkdesaturatedblue to-Verydarkgrayblue'>
        <img src='' alt='' />
      </section>
      <section className='flex flex-col justify-center gap-6 items-center p-4'>

        <div>
          <img src='src/assets/images/illustration-laptop-mobile.svg' alt='mobileIllustration' />
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
