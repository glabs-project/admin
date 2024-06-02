import { UsersTable } from '~/entities/users'
import { getUsersList } from '~/entities/users/api'

export default async function Home() {
  const users = await getUsersList()

  return (
    <main>
      <UsersTable users={users} />
    </main>
  )
}
