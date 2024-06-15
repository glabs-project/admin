'use server'

import { UsersList } from '../../model'

import { apiConfig } from '~/shared/configs'

export const getUsersList = async () => {
  const response = await apiConfig
    .get('user', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJvd25lciIsImlhdCI6MTcxODQzMTMyNSwiZXhwIjoxNzE4NTE3NzI1fQ.Gio8MapuO7GBAUSNAQDpAv1Ptmf70rUe4qXelGSiAKw'
      }
    })
    .json<UsersList[]>()

  return response
}
