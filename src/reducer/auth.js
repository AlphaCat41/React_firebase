const auth = (user=[], action) => {
  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      user = action.user;
      return user
    case 'SIGNUP_SUCCESS':
      user = action.user;
      return user
    default:
      return user
  }
};

export default auth