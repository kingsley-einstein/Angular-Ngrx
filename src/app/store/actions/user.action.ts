import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export enum UserActions {
    GetUser = '[User] Get User',
    GetUsers = '[User] Get Users',
    GetUserSuccess = '[User] Get User Success',
    GetUsersSuccess = '[User] Get Users Success'
}

export class GetUser implements Action {
    public readonly type = UserActions.GetUser;
    constructor(public payload: number) {}
}

export class GetUsers implements Action {
    public readonly type = UserActions.GetUsers;
    // constructor(public payload: User[]) {}
}

export class GetUserSuccess implements Action {
    public readonly type = UserActions.GetUserSuccess;
    constructor(public payload: User) {}
}

export class GetUsersSuccess implements Action {
    public readonly type = UserActions.GetUsersSuccess;
    constructor(public payload: User[]) {}
}

export type AllUserActions = GetUser | GetUsers | GetUserSuccess | GetUsersSuccess;