'use client'

import Link from 'next/link'

import { useUser } from '@auth0/nextjs-auth0/client'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '~/shared/ui'

export const ProfileOfNavbar = () => {
  const { user, error, isLoading } = useUser()

  if (!user) {
    return (
      <Link href={'/api/auth/login'}>
        <Button>Войти</Button>
      </Link>
    )
  }

  if (isLoading) return <div>loading...</div>
  if (error) return <div>{error.message}</div>

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.picture!} />
          <AvatarFallback>{`${user?.nickname}`}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>@{user?.nickname}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Профиль</DropdownMenuItem>
        <DropdownMenuItem>Отчет</DropdownMenuItem>
        <DropdownMenuItem>Настройки</DropdownMenuItem>
        <DropdownMenuSeparator />
        <Link href={'/api/auth/logout'}>
          <DropdownMenuItem>
            Выйти
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
