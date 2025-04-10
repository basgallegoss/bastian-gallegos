// src/components/i18n/LanguageToggle.tsx
import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLanguage } from '@/store/languageSlice'
import { AppDispatch, RootState } from '@/store'
import { useTranslation } from 'react-i18next'

const LanguageToggle: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const language = useSelector((state: RootState) => state.language.current)
  const { i18n } = useTranslation()

  useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language)
    }
  }, [language, i18n])

  return (
    <Button onClick={() => dispatch(toggleLanguage())} variant="outline">
      {language === 'en' ? '🇪🇸' : '🇺🇸'}
    </Button>
  )
}

export default LanguageToggle
