import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)
  const [searchUser, setSearchUser] = useState('')

  const onChangeHandler = (e) => {
    setSearchUser(e.target.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (searchUser === '') {
      alertContext.showAlert('Please enter a name', 'light')
    } else {
      githubContext.searchUsers(searchUser)
      // setSearchUser('')
    }
  }

  return (
    <div>
      <form className='form' onSubmit={onSubmitHandler}>
        <input
          type='text'
          name='searchUser'
          value={searchUser}
          placeholder='Search Users...'
          onChange={onChangeHandler}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  )
}

export default Search
