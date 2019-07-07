import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
   
    private users: User[] = [];
    private id: number = 0;

    createUser$ = (user: User): Observable<User> => {
        this.id++;
        user.id = this.id;
        this.users.push(user);
        return of(user);
    }
    deleteUser$ = (user: User): Observable<string> => {
        const index: number = this.users.findIndex(
            u => u.id === user.id
        );
        this.users.splice(index, 1);
        return of('Successfully Deleted');
    }
    getUser$ = (id: number): Observable<User> => {
        const user: User = this.users.find(
            u => u.id == id
        );
        return of(user);
    }
    getUsers$ = (): Observable<User[]> => {
        return of(this.users);
    }
}