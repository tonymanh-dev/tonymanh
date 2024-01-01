import Link from 'next/link'
import React, { ReactNode } from 'react'
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa6'

export default function Socials() {
  const Social = ({
    link,
    title,
    children,
  }: {
    link: string
    title: string
    children: ReactNode
  }) => (
    <Link
      href={link}
      rel="noreferrer"
      target="_blank"
      className="flex items-center text-muted-foreground hover:text-primary hover:underline transition-colors"
    >
      {children}
      <span className=" ml-2">{title}</span>
    </Link>
  )
  return (
    <section className="w-full pt-24">
      <h4 className="text-2xl font-medium mb-8">🍻Connect with me</h4>
      <div className="w-fit flex flex-col gap-y-4">
        <Social link="" title="Twitter">
          <FaXTwitter className="h-5 w-5" />
        </Social>
        <Social link="" title="Instagram">
          <FaInstagram className="h-5 w-5" />
        </Social>
        <Social link="" title="Github">
          <FaGithub className="h-5 w-5" />
        </Social>
        <Social link="" title="LinkedIn">
          <FaLinkedinIn className="h-5 w-5" />
        </Social>
      </div>
    </section>
  )
}
