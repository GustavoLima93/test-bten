export interface User {
  id: string;
  homeTeam: string;
  name: string;
  username: string;
  password?: string;
  age: number;
  height: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Sessions {
  user: User;
  token: string;
}