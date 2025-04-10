import React, { useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '@/store/themeSlice'
import { AppDispatch, RootState } from '@/store'

const ThemeToggle: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const theme = useSelector((state: RootState) => state.theme.mode)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <Button onClick={() => dispatch(toggleTheme())} variant="outline">
      {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  )
}

export default ThemeToggle
