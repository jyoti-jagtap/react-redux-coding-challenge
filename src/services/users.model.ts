export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar?: Image;
}
interface Image {
  hash: string;
  link: string;
  size: string;
}
export interface IUsers extends Array<IUser> {
  [index: number]: IUser;
}
