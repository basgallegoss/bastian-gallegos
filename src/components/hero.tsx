import { useTranslation } from 'react-i18next'
import GradientButton from './ui/gradientButton'



const Hero = () => {
  const { t } = useTranslation()
  return (
    <section className="py-16 md:py-36 container mx-auto lg:max-w-4xl md:max-w-2xl">
      <div className="max-w-xl">
        <div className="flex gap-4 mb-4">
          <img className="rounded-full shadow-lg w-25 h-25" src="/yo-avatar.png" alt="Bastián Gallegos" />
          <a
            href="https://linkedin.com/in/bastian-andres-gallegos-sepulveda"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center transition hover:scale-105"
          >
            <div className="relative inline-flex overflow-hidden rounded-full p-1">
              <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer">
                {t('available')}
              </div>
            </div>
          </a>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-white">
          Bastián Andrés Gallegos Sepúlveda
        </h1>

        <p className="mt-6 text-gray-800 dark:text-gray-300">
          {t('aboutMe')}
        </p>

        <nav className="flex flex-row gap-4 mt-8 ">
          <GradientButton href="mailto:basgallegoss@gmail.com">
            {t('contact')}
          </GradientButton>

          <GradientButton href="https://linkedin.com/in/bastian-andres-gallegos-sepulveda">
            LinkedIn
          </GradientButton>
        </nav>
      </div>
    </section>
  )
}

export default Hero
