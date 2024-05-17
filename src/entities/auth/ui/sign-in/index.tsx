'use server'

import { type FC } from 'react'

import { signInAction } from '~/entities/auth/api'
import { Button, Input } from '~/shared/ui'

export const AuthSignInForm: FC = () => {
  return (
    <form
      action={signInAction}
      className="max-w-sm mx-auto flex flex-col items-center gap-y-4 my-14"
    >
      <h1 className="font-semibold text-xl">Авторизация</h1>
      <p className="font-mono text-center text-md">
        Для продолжения использования сервиса необходимо авторизоваться в учётную
        запись.
      </p>
      <Input name="username" placeholder="Имя пользователя" type="text" />
      <Input name="password" placeholder="Пароль" type="password" />
      <Button>Продолжить</Button>
    </form>
  )
}
