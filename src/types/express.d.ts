import { SessionUserType } from '../app';

declare global {
  namespace Express {
    interface User extends SessionUserType {}
    interface Request {
      user?: User;
    }
  }
}
