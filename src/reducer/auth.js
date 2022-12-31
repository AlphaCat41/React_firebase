const auth = (user={data: [], isSignedin: false}, action) => {
  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      user.data = action.user;
      user.isSignedin = true
      return user
      
    case 'SIGNUP_SUCCESS':
      user.data = action.user;
      user.isSignedin = true
      return user
    default:
      return user
  }
};

export default auth