export const signinSuccess = (user) => ({
    type: 'SIGNIN_SUCCESS',
    user
  });
  
export const signupSuccess = (user) => ({
    type: 'SIGNUP_SUCCESS',
    user
});

export const signoutSuccess = () => ({
    type: 'SIGNOUT_SUCCESS',
});
  