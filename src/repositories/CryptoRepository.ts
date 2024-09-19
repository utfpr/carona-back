import { ICryptoRepository } from "../interfaces/ICryptoRepository";
import * as crypto from 'crypto'
import config from "../config/config";
import { IUser } from "../interfaces/IUserInterface";
import { getUserKeys } from "../utils/getKeys";

export class CryptoRepository implements ICryptoRepository {
    async encrypt(text: string): Promise<string> {
      if (!config.security.key || !config.security.iv || !config.security.method) {
        throw new Error('secretKey, secretIV, and ecnryptionMethod are required')
      }
  
      const key = crypto.createHash('sha512').update(config.security.key).digest('hex').substring(0, 32)
      const encryptionIV = crypto.createHash('sha512').update(config.security.key).digest('hex').substring(0, 16)
  
      const cipher = crypto.createCipheriv(config.security.method, key, encryptionIV)
      return Buffer.from(cipher.update(text, 'utf8', 'hex') + cipher.final('hex')).toString('base64')
    }
  
    async decrypt(encryptedData: string): Promise<string> {
      if (!config.security.key || !config.security.iv || !config.security.method) {
        throw new Error('secretKey, secretIV, and ecnryptionMethod are required')
      }
  
      const key = crypto.createHash('sha512').update(config.security.key).digest('hex').substring(0, 32)
      const encryptionIV = crypto.createHash('sha512').update(config.security.key).digest('hex').substring(0, 16)
  
      const buff = Buffer.from(encryptedData, 'base64')
      const decipher = crypto.createDecipheriv(config.security.method, key, encryptionIV)
      return (decipher.update(buff.toString('utf8'), 'hex', 'utf8') + decipher.final('utf8'))
    }
  
    async useDecryptoUser(props: IUser): Promise<IUser> {
      for (const prop of getUserKeys()) {
        if(prop === 'createdAt' || prop === 'updatedAt' || prop === 'haveCar' || prop === 'active') continue;
        else props[prop] = await this.decrypt(props[prop] as string);
      }
      return props;
    }
  
    async useEncryptoUser(props: IUser): Promise<IUser> {
      for (const prop of getUserKeys()) {
        if(prop === 'createdAt' || prop === 'updatedAt' || prop === 'haveCar' || prop === 'active') continue;
        props[prop] = await this.encrypt(props[prop] as string);
      }
  
      return props;
    }
  }