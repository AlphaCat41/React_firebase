const auth = (
  user={
    data: {
      email: '',
      accessToken: '',
      expirationTime: ''
    }, 
    isSignedin: false
  }, 
  action
  ) => {
  switch (action.type) {
    case 'SIGNIN_SUCCESS' || 'SIGNUP_SUCCESS':
      user.data.email = action.res.user.email
      user.data.accessToken = action.res.user.accessToken
      user.data.expirationTime = action.res.user.stsTokenManager.expirationTime
      user.isSignedin = true
      localStorage.setItem('user', JSON.stringify(user))
      return user

    case 'SIGNOUT_SUCCESS':
      localStorage.removeItem('user')
      return user

    default:
      return user
  }
};

export default auth