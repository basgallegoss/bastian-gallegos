
import React from 'react'
import LanguageToggle from '../i18n/LanguageToggle'
import ThemeToggle from './ThemeToggle'


const ThemeSettings: React.FC = () => {
  return (
    <div className="flex gap-2 ml-auto">
      <ThemeToggle />
      <LanguageToggle />
    </div>
  )
}

export default ThemeSettings
