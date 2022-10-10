export enum RouterLinks {
  termsAndConditions = 'terms_and_conditions',
  start = 'start',
  signUp = 'sign_up',
  signIn = 'sign_in',
  authorization = 'authorization',
  resetPass = 'reset_password',
  confirmReset = 'confirm-reset',
  gameRoom = 'game_room',
  botConfrontation = 'bot_confrontation'
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

export enum ButtonName {
  toGame = 'To Game',
  backToHome = 'Back to Home'
}
