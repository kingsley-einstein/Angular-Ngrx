import { createSelector } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { UserState } from '../states/user.state';

const selectUsers = (state: AppState) => state.users;

export const selectAllUsers = createSelector(
    selectUsers, 
    (state: UserState) => state.users
);

export const selectUser = createSelector(
    selectUsers,
    (state: UserState) => state.user
);