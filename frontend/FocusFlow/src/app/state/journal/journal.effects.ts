import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FocusFlowService } from "../../focus-flow.service";
import { LoadJournal, LoadJournalFailure, LoadJournalSuccess } from "./journal.actions";
import { catchError, from, map, mergeMap, of } from "rxjs";


@Injectable()
export class JournalEffects {
    constructor(
        private Actions$: Actions,
        private focusflowService: FocusFlowService 
    ){}

    loadJournal$ = createEffect(() =>
    this.Actions$.pipe(
        ofType(LoadJournal),
        mergeMap((action) =>
            from(this.focusflowService.getJournal()).pipe(
                map((JournalEntries) => LoadJournalSuccess({JournalEntries:JournalEntries})),
                catchError((error) => of(LoadJournalFailure({error})))
        ))));
}