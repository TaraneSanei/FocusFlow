import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { JournalState } from "./journal.reducer";

export const Selectjournal = (state: AppState) => state.journal;
export const selectJournal = createSelector(
    Selectjournal,
    (state: JournalState) => state.journalEntries
);
export const selectNext = createSelector(
    Selectjournal,
    (state: JournalState) => state.next
);
export const selectPrevious = createSelector(
    Selectjournal,
    (state: JournalState) => state.previous
);