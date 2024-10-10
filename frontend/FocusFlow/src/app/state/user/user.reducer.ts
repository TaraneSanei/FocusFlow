import { createReducer, on } from "@ngrx/store";
import { User } from "../../models/models";
import { Login, LoginSuccess, LoginFailure } from "./user.actions";
import { state } from "@angular/animations";

export interface UserState {
    user: User | null;
    error: string;
    isAuthenticated: boolean;
}


export const initialUserState: UserState = {
    user: null,
    error: "",
    isAuthenticated: false
}

export const UserReducer = createReducer(
    initialUserState,
    on(LoginSuccess, (state, {user}) => ({
        ...state,
        user: user,
        isAuthenticated: true
    })),

    on(LoginFailure, (state, {error}) => ({
        ...state,
        error:error
    }))
)
