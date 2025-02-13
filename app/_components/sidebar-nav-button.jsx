// components/sidebar-nav-button.tsx
"use client"

import { Button } from '@/components/ui/button'

export function SidebarNavButton({
  children,
  ...props
}) {
  return (
    <Button 
      variant="ghost" 
      className="w-full justify-start hover:bg-lightgray transition-colors"
      {...props}
    >
      {children}
    </Button>
  )
}