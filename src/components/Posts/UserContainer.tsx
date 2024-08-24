import React from 'react'
import { userApi } from '../../store/UserService'

const UserContainer = () => {

    const { data: users, isLoading, error } = userApi.useFetchAllUsersQuery(15)

    return (
        <div>
            {error && <h2 style={{color: 'red'}}>Error</h2>}
            {isLoading ? <h1>Loading...</h1> :
                users?.map(user => (
                    <div key={user.id}>
                        <p>{user.id}</p>
                        <h1>{user.name}</h1>
                    </div>

                ))

            }
        </div>
    )
}

export default UserContainer