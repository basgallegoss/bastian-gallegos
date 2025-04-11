import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

export const useSyncThemeColor = () => {
  const theme = useSelector((state: RootState) => state.theme.mode)

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]')
    if (!meta) return

    const light = '#d9d8ff'
    const dark = '#1b1b3a'

    meta.setAttribute('content', theme === 'dark' ? dark : light)
  }, [theme])
}
