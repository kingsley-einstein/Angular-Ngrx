import { UserActions, AllUserActions, GetUserSuccess, GetUsersSuccess } from '../actions/user.action';
import { initialUserState, UserState } from '../states/user.state';

export const userReducers = (
    state = initialUserState, 
    action: AllUserActions
    ): UserState => {
        switch (action.type) {
            case UserActions.GetUserSuccess: {
                return {
                    ...state,
                    user: action.payload
                };
            }
            case UserActions.GetUsersSuccess: {
                return {
                    ...state,
                    users: action.payload
                };
            }
            default:
                return state;
        }
    };