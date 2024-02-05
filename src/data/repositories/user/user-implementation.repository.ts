import { Injectable } from '@angular/core';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { Observable, map } from 'rxjs';
import { UserModel } from '../../../domain/models/user.model';
import { UserImplementationRepositoryMapper } from './entities/user-repository.mapper';
import { HttpClient } from '@angular/common/http';
import { UserEntity } from './entities/user-entity';

@Injectable({ providedIn: 'root' })
export class UserImplementationRepository extends UserRepository {
  userMapper = new UserImplementationRepositoryMapper();

  constructor(private http: HttpClient) {
    super();
  }

  override login(params: {
    username: string;
    password: string;
  }): Observable<UserModel> {
    return this.http
      .post<UserEntity>('https://example.com/login', { params })
      .pipe(map(this.userMapper.mapFrom));
  }

  override register(params: {
    phoneNumber: string;
    password: string;
  }): Observable<UserModel> {
    return this.http
      .post<UserEntity>('https://example.com/register', { params })
      .pipe(map(this.userMapper.mapFrom));
  }

  override getUserProfile(): Observable<UserModel> {
    return this.http
      .get<UserEntity>('https://example.com/user')
      .pipe(map(this.userMapper.mapFrom));
  }
}
