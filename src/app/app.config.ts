export enum RouterLinks {
  termsAndConditions = 'terms_and_conditions',
  start = 'start',
  signUp = 'sign_up',
  signIn = 'sign_in',
  authorization = 'authorization',
  resetPass = 'reset_password',
  confirmReset = 'confirm-reset'
}

export enum PasswordInputTitle {
  createPassword = 'Create a password',
  password = 'Password'
}

export enum Request_Url {
  signUp = 'api/SignUp',
  signIn = 'api/SignIn',
  resetPass = 'api/InitResetPassword'
}

export const minimumPasswordLength = 8;

export const passwordPattern = '/(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[!@#$%^&*a-zA-Z]{8,}/g';
