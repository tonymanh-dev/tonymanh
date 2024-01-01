import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <section className="w-full sm:pt-24">
      <div className="mb-4">
        <Image
          src="/profile.jpeg"
          alt="profile"
          width={80}
          height={80}
          className="object-contain rounded-full"
        />
      </div>

      <div>
        <h4 className="text-xl sm:text-2xl mb-4">
          Hello, I&apos;m Tony Manh👋
        </h4>
        <p className="text-muted-foreground">
          I&apos;m an indie hacker from Vietnam 🇻🇳. I&apos;m currently working
          in Japan. <br />I started how to code in 2021 and fell in love with it
          since. I enjoyed figuring out the logic behind building applications,
          but I was more attracted to how to make it look delightful to users.
          That&apos;s how I started my career in front end development.
        </p>
      </div>
    </section>
  )
}
