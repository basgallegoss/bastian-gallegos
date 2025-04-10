
import ThemeSettings from '@/components/theme/ThemeSettings'
import Hero from '@/components/hero'


function Home() {
  return (
    <>
      <header className="fixed top-4 right-4 md:right-20 lg:right-40 z-50">
        <ThemeSettings />
      </header>
      <div className="relative min-h-screen flex flex-col">
        <div className="absolute inset-0 -z-10 w-full h-full bg-gray-50 dark:bg-gray-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

        <main className="flex-grow pt-24 px-4">
          <div className="max-w-4xl mx-auto w-full">
            <Hero />
          </div>
        </main>

        <footer className="mt-8 text-center py-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Bastián Gallegos.
          </p>
        </footer>
      </div>
    </>
  )
}

export default Home
