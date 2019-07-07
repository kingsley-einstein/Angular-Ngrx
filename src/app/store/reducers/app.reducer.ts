import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { AppState } from '../states/app.state';
import { userReducers } from '../reducers/user.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
    router: routerReducer,
    users: userReducers
}