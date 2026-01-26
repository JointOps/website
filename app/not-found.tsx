import Link from 'next/link'

import { Button } from '@/components/ui'
import { Logo } from '@/components/icons'
import { Footer } from '@/components/sections'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="text-center">
          <div className="flex justify-center">
            <Logo className="text-2xl" animate={false} />
          </div>

          <h1 className="mt-12 font-display text-6xl font-bold text-foreground md:text-7xl">
            This page doesn&apos;t exist.
          </h1>

          <p className="mx-auto mt-6 max-w-md text-lg text-muted">
            But we can build whatever you&apos;re looking for.
          </p>

          <div className="mt-10">
            <Link href="/">
              <Button variant="primary">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
