import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { FocusFlowService } from "../../focus-flow.service";
import { Login, LoginFailure, LoginSuccess } from "./user.actions";
import { catchError, from, map, mergeMap, of } from "rxjs";


@Injectable()
export class UserEffects {

    user$ = createEffect(() => 
        this.actions$.pipe(
        ofType(Login),
        mergeMap((action)=>
        from(this.focusflowService.login(action.email, action.password)).pipe(
            map((user)=> LoginSuccess({user:user})),
            catchError((error) => of(LoginFailure({error})))
        ))
    ))

    constructor(
        private actions$: Actions, 
        private focusflowService: FocusFlowService
    ){}

}