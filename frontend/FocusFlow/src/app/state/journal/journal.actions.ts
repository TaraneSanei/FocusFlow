import { createAction, props } from "@ngrx/store";
import { JournalEntry } from "../../models/models";

export const LoadJournal = createAction(
    '[backend] load journal',
);

export const LoadJournalSuccess = createAction(
    '[backend] Journal loaded successfully',
    props<{ JournalEntries: JournalEntry[] }>()
);

export const LoadJournalFailure = createAction(
    '[backend] Journal load failure',
    props<{ error: string }>()
);

export const AddJournalEntry = createAction(
    '[Journal] add an Entry',
    props<{journalEntry: JournalEntry}>()
)

export const AddJournalEntrySuccess = createAction(
    '[backend] Journal Entry added success',
    props<{journalEntry: JournalEntry}>()
)

export const AddJournalEntryFailure = createAction(
    '[backend] Journal Entry added failure',
    props<{error: string}>()
)