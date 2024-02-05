import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

//TODO replace with right methods
export abstract class UserRepository {
  abstract login(params: {
    username: string;
    password: string;
  }): Observable<UserModel>;

  abstract register(params: {
    phoneNumber: string;
    password: string;
  }): Observable<UserModel>;

  abstract getUserProfile(): Observable<UserModel>;
}
