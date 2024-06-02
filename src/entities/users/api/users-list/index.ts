'use server'

import { apiConfig } from '~/shared/configs'

import { UsersList } from '../../model'

export const getUsersList = async () => {
  const response = await apiConfig
    .get('user', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrYWJhbjRpayIsImlhdCI6MTcxNzA4MDg1OSwiZXhwIjoxNzE3MTY3MjU5fQ.1oq6T8DKl3iUWu-R8XAsG2obVqnV2EzJI2-_Vou4jJ8'
      }
    })
    .json<UsersList[]>()

  return response
}
