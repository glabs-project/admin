'use server'

import { cookies } from 'next/headers'
import Link from 'next/link'

import { NavbarItems } from './items'

export const Navbar = () => {
  const username = cookies().get('username')

  return (
    <nav className="w-full flex flex-row items-center container py-4 gap-x-2">
      <Link href={'/'}>
        <h1 className="font-semibold font-mono text-xl">GLABS</h1>
      </Link>

      <NavbarItems />

      {username?.value && <div>{username?.value}</div>}
    </nav>
  )
}
