const AUTH_URL = process.env.REACT_APP_AUTH_URL;

const authUser = token => {
  return {
    type: 'AUTH_USER',
    token
  }
}

const authError = error => {
  return {
    type: 'AUTH_ERROR',
    error
  }
}

export const signup = (user, callback) => {
  return dispatch => {
    return fetch(`${AUTH_URL}signup`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        username: user.username,
        email: user.email,
        password: user.password}),
    })
      .then(response => response.json())
      .then(response => {
        if (response.error) {
          dispatch(authError(response.error))
        } else {
          const token = response.token
          dispatch(authUser(token))
          localStorage.setItem('token', token);
          callback();
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const login = (user, callback) => {
  return dispatch => {
    return fetch(`${AUTH_URL}login`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        username: user.username,
        password: user.password}),
    })
      .then(response => response.json())
      .then(response => {
        const token = response.token
        dispatch(authUser(token))
        localStorage.setItem('token', token);
        callback();
      })
      .catch(error => {
        console.log(error)
        dispatch(authError("Invalid log in"))
      })
  }
}

export const logout = () => {
  return dispatch => {
    localStorage.removeItem('token')
    dispatch(authUser(""))
  }
}
