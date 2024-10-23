import { createReducer, on } from "@ngrx/store";
import { JournalEntry } from "../../models/models";
import { LoadJournal, LoadJournalFailure, LoadJournalSuccess } from "./journal.actions";


export interface JournalState {
    journalEntries: JournalEntry[];
    error: string;
    status: "pending" | "loading" | "error" | "success";
}

export const initialJournalState: JournalState = {
    journalEntries: [],
    error: "",
    status: 'pending',
};

export const JournalReducer = createReducer(
    initialJournalState,
on(LoadJournal, (state) => ({
    ...state,
    status: "loading" as "loading"
})),
on(LoadJournalSuccess, (state, { JournalEntries }) => ({
    ...state,
    status: "success" as "success",
    journalEntries: JournalEntries
})),
on(LoadJournalFailure, (state, { error }) =>({
...state,
status: "error" as "error",
error: error
})))
