import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { AppState } from '../states/app.state';
import { selectAllUsers } from '../selectors/user.selector';
import { GetUser, UserActions, GetUsers, GetUsersSuccess, GetUserSuccess } from '../actions/user.action';
import { User } from '../../models/user.model';

@Injectable()
export class UserEffects {
    constructor(
        private _actions$: Actions, 
        private _store$: Store<AppState>, 
        private _userService: UserService
    ) {}

    @Effect()
    getUsers$ = this._actions$.pipe(
        ofType<GetUsers>(UserActions.GetUsers),
        switchMap(() => this._userService.getUsers$()),
        switchMap((users) => of(new GetUsersSuccess(users)))
    );

    @Effect()
    getUser$ = this._actions$.pipe(
        ofType<GetUser>(UserActions.GetUser),
        switchMap((action) => this._userService.getUser$(action.payload)),
        switchMap((user) => of(new GetUserSuccess(user)))
    );

    // @Effect()
    // getUserById$ = (id: number) => this._actions$.pipe(
    //     ofType<GetUser>(UserActions.GetUser),
    //     switchMap(() => this._userService.getUser$(id))
    // );

    // @Effect()
    // addUser$ = (obj: User) => this._actions$.pipe(
    //     ofType<AddUser>(UserActions.AddUser),
    //     switchMap(() => this._userService.createUser$(obj))
    // )
}