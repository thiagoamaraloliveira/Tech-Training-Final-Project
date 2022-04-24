export interface IUser {
  id: number;
  user: string;
  iat: number;
  exp: number;
  token: string;
}

export interface IUserLogin {
  user: string;
  password: string;
}
