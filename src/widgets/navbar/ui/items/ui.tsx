import Link from 'next/link'

import { NAVBAR_LINKS } from '~/widgets'

export const NavbarItems = () => {
  return (
    <ul className="flex flex-row items-center gap-x-2 mr-0 ml-auto">
      {NAVBAR_LINKS.map(({ id, name, href }) => (
        <Link href={href} key={id}>
          <li className="font-medium">{name}</li>
        </Link>
      ))}
    </ul>
  )
}
