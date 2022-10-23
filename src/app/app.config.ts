import { GameField, GameResult } from './core/models/game.models';

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

export enum Player {
  player1 = 'player1',
  player2 = 'player2'
}

export const GameFieldStartState: GameField = [
  {
    id: 0,
    sign: ''
  },
  {
    id: 1,
    sign: ''
  },
  {
    id: 2,
    sign: ''
  },
  {
    id: 3,
    sign: ''
  },
  {
    id: 4,
    sign: ''
  },
  {
    id: 5,
    sign: ''
  },
  {
    id: 6,
    sign: ''
  },
  {
    id: 7,
    sign: ''
  },
  {
    id: 8,
    sign: ''
  }
]

export const gameResultInitValue: GameResult = {
  isP1Win: false,
  isP2Win: false,
  isDraw: false,
};
