import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Language = 'en' | 'es'

interface LanguageState {
  current: Language
}

const getInitialLanguage = (): Language => {
  const stored = localStorage.getItem('language')
  if (stored === 'en' || stored === 'es') return stored
  return 'es'
}

const initialState: LanguageState = {
  current: getInitialLanguage(),
}

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.current = action.payload
      localStorage.setItem('language', action.payload)
    },
    toggleLanguage: (state) => {
      const newLang = state.current === 'en' ? 'es' : 'en'
      state.current = newLang
      localStorage.setItem('language', newLang)
    },
  },
})

export const { setLanguage, toggleLanguage } = languageSlice.actions
export default languageSlice.reducer
