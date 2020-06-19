import React, { Fragment, useEffect, useState, useContext, useRef } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/layouts/Navbar'
import Alert from './components/layouts/Alert'
import About from './components/layouts/About'
import SingleUser from './components/users/SingleUser'
import GithubState from './context/github/githubState'
import AlertState from './context/alert/AlertState'
import Home from './components/layouts/Home'
import notFound from './components/layouts/notFound'
import GithubContext from './context/github/githubContext'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [alert, setAlert] = useState(null)

  const githubContext = useContext(GithubContext)

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route
                  exact
                  path='/user/:login'
                  render={(props) => (
                    <SingleUser {...props} user={user} loading={loading} />
                  )}
                />
                <Route component={notFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  )
}

export default App
