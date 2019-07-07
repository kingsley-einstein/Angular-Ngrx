import { User } from '../../models/user.model';

export interface UserState {
    user: User;
    users: User[];
}

export const initialUserState: UserState = {
    user: null,
    users: null
};