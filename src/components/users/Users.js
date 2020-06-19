import React, { useContext, useEffect, useMemo } from 'react'
import Snipper from '../layouts/Snipper'
import { Link } from 'react-router-dom'
import GithubContext from '../../context/github/githubContext'
import Search from '../layouts/Search'

function ListItemComponent({ user: { login, avatar_url } }) {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt='img'
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className='btn btn-green btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  )
}

const Users = () => {
  const githubContext = useContext(GithubContext)

  const { users, loading, getUsers, searchUsers } = githubContext

  const searchName = useMemo(() => {
    return Search.searchUser
  }, [Search.searchUser])

  useEffect(() => {
    // Fetching random users for home page using useEffect..
    getUsers(searchName)
  }, [searchName])

  const listItem = users.map((user) => {
    return <ListItemComponent key={user.id} user={user}></ListItemComponent>
  })
  if (loading) {
    return <Snipper />
  } else {
    return <div style={userStyle}>{listItem}</div>
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
}

export default Users
