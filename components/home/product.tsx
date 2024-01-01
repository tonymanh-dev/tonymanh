import { products } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const ArrowIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Product() {
  return (
    <section className="w-full pt-16 sm:pt-24">
      <h4 className="text-2xl font-medium mb-8">⭐️My products</h4>
      <div className="space-y-10">
        {products.map((product, i) => (
          <div key={i}>
            <div className="flex items-center space-x-2 mb-2">
              <span>
                <Image
                  src={product.icon}
                  alt="Product image"
                  width={30}
                  height={30}
                  className="rounded-full object-contain"
                />
              </span>
              <h4 className="font-medium">{product.name}</h4>
            </div>

            <p className="text-muted-foreground">{product.description}</p>
            <div className="-ml-3 mt-4 flex items-center space-x-4">
              <Button
                variant="link"
                asChild
                size="sm"
                className="text-muted-foreground hover:text-primary"
              >
                <Link
                  href={product.phLink}
                  rel="noreferrer"
                  target="_blank"
                  className="flex items-center justify-between"
                >
                  product hunt
                  <ArrowIcon className="ml-2" />
                </Link>
              </Button>

              <Button
                variant="link"
                asChild
                size="sm"
                className="text-muted-foreground hover:text-primary"
              >
                <Link
                  href={product.link}
                  rel="noreferrer"
                  target="_blank"
                  className="flex items-center justify-between"
                >
                  visit website
                  <ArrowIcon className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
