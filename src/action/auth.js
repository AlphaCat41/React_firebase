export const signinSuccess = (res) => ({
    type: 'SIGNIN_SUCCESS',
    res
  });
  
export const signupSuccess = (res) => ({
    type: 'SIGNUP_SUCCESS',
    res
});

export const signoutSuccess = () => ({
    type: 'SIGNOUT_SUCCESS',
});
  