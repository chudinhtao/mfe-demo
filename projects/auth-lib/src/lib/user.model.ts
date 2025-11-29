export interface User {
  username: string;
  role: 'ADMIN' | 'USER';
  token: string;
}
