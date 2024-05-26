'use server'

import Link from 'next/link'

import { NavbarItems } from './items'
import { ProfileOfNavbar } from './profile'

export const Navbar = () => {
  return (
    <nav className="w-full flex flex-row items-center container py-4 gap-x-4">
      <Link href={'/'}>
        <h1 className="font-semibold font-mono text-xl">GLABS</h1>
      </Link>

      <NavbarItems />

      <ProfileOfNavbar />
    </nav>
  )
}
