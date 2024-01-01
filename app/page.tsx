import Header from '@/components/home/header'
import Product from '@/components/home/product'
import Socials from '@/components/home/socials'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full max-w-2xl mx-auto flex-col items-center justify-between px-4 pb-24">
      <Header />
      <Product />
      <Socials />
    </main>
  )
}
