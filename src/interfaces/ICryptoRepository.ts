import { IUser } from "./IUserInterface";

export interface ICryptoRepository {
  encrypt(text: string): Promise<string>;
  decrypt(text: string): Promise<string>;
  // For entities
  useDecryptoUser(props: IUser): Promise<IUser>
  useEncryptoUser(props: IUser): Promise<IUser>
}