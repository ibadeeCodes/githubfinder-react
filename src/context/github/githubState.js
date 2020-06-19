import React, { useReducer } from 'react'
import Axios from 'axios'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  GET_USERS,
} from '../types'

let githubClientId
let githubClientSecret

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GH_CLIENT_ID
  githubClientSecret = process.env.REACT_APP_GH_CLIENT_SECRET
} else {
  githubClientId = process.env.GH_CLIENT_ID
  githubClientSecret = process.env.GH_CLIENT_SECRET
}

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  //Get Users..

  const getUsers = async () => {
    setLoading()

    const res = await Axios.get(
      `https://api.github.com/users?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    )

    dispatch({ type: GET_USERS, payload: res.data })
  }

  //Search Users

  const searchUsers = async (search) => {
    setLoading()

    const res = await Axios.get(
      `https://api.github.com/search/users?q=${search}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    )

    dispatch({ type: SEARCH_USERS, payload: res.data.items })
  }

  //Get Single User

  const GetSingleUser = async (username) => {
    setLoading()
    const res = await Axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    )

    dispatch({ type: GET_USER, payload: res.data })
  }

  //Get repos

  const GetUserRepos = async (username) => {
    const res = await Axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    )

    dispatch({ type: GET_REPOS, payload: res.data })
  }

  //Clear users

  const clearUsers = () => dispatch({ type: CLEAR_USERS })

  //Set Loading

  const setLoading = () => {
    dispatch({ type: SET_LOADING })
  }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        GetSingleUser,
        GetUserRepos,
        getUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubState
