import { Button } from "@/components/ui/button"
import React from "react"

interface GradientButtonProps {
  href: string
  children: React.ReactNode
}

const GradientButton = ({ href, children }: GradientButtonProps) => {
  return (
    <div className="relative rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 animate-border [background-size:300%]">
      <Button
        asChild
        className="relative z-10 w-full h-full rounded-full px-4 py-2 bg-white dark:bg-gray-950 text-gray-800 dark:text-white border border-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
      >
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </Button>
    </div>
  )
}

export default GradientButton
