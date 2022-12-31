const auth = (user={data: [], isSignedin: false}, action) => {
  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      user.data = action.user;
      user.isSignedin = true
      localStorage.setItem('user', JSON.stringify(user))
      return user

    case 'SIGNUP_SUCCESS':
      user.data = action.user;
      user.isSignedin = true
      localStorage.setItem('user', JSON.stringify(user))
      return user

    default:
      return user
  }
};

export default auth