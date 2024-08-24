import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export interface IUser {
    id: number,
    name: string,
    email: string,
    address: {
        street: string,
        city: string,
    },
    phone: string,
}

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (buider) => ({
            fetchAllUsers: buider.query<IUser[], number>({
                query: (limit: number ) => ({
                    url: `/users`,
                    params : {
                        _limit: limit
                    }
                })
            })
    })

})

export const { useFetchAllUsersQuery} = userApi