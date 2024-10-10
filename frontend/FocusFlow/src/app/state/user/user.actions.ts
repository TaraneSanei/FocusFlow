import { createAction, props } from "@ngrx/store";
import { User } from "../../models/models";


export const Login = createAction(
    '[Auth] login',
    props<{email:string, password: string}>()
);

export const LoginSuccess = createAction(
    '[Auth] login successful',
    props<{user: User}>()
);

export const LoginFailure = createAction(
    '[Auth] login failed',
    props<{error: string}>()
);