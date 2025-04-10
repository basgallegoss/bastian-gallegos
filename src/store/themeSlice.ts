import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ThemeMode = 'light' | 'dark'

interface ThemeState {
  mode: ThemeMode
}

const getInitialTheme = (): ThemeMode => {
  const stored = localStorage.getItem('theme') as ThemeMode | null
  if (stored === 'light' || stored === 'dark') return stored

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

const initialState: ThemeState = {
  mode: getInitialTheme(),
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload
      localStorage.setItem('theme', action.payload)
    },
    toggleTheme: (state) => {
      const newTheme = state.mode === 'light' ? 'dark' : 'light'
      state.mode = newTheme
      localStorage.setItem('theme', newTheme)
    },
  },
})

export const { setTheme, toggleTheme } = themeSlice.actions
export default themeSlice.reducer
