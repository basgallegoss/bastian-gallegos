
import React from 'react'
import ThemeToggle from './themeToggle'
import LanguageToggle from '../i18n/LanguageToggle'


const ThemeSettings: React.FC = () => {
  return (
    <div className="flex gap-2 ml-auto">
      <ThemeToggle />
      <LanguageToggle />
    </div>
  )
}

export default ThemeSettings
