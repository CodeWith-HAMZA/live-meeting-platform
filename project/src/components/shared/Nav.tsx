import { cn } from '@/lib/utils'
import { Camera, CameraIcon, Menu, Video } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

export default function Nav() {
  return (
    <nav className='flex-between fixed  bg-secondary z-50 w-full px-6 py-4 lg:px-10'>
      <Link href={'/'} className='flex items-center gap-3'>
        <Video size={30} />
        <p className='text-2xl font-bold '>Casual Meet</p>
      </Link>

      <div className="ico flex-center">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  )
}
