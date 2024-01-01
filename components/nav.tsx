import React from 'react'

import Link from 'next/link'
import { navLinks } from '@/lib/constants'

export default function Nav() {
  return (
    <nav className="w-full max-w-3xl mx-auto bg-background">
      <div className="w-full h-14 flex justify-between items-center px-4">
        <div className="w-full h-full flex items-center space-x-2 -ml-2">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className=" p-2 transition-colors text-muted-foreground hover:text-primary"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
