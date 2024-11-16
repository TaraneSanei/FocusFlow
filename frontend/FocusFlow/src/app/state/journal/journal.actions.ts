import { createAction, props } from "@ngrx/store";
import { JournalEntry } from "../../models/models";

export const LoadJournal = createAction(
    '[backend] load journal',
    props<{ url: string | null}>()
);

export const LoadJournalSuccess = createAction(
    '[backend] Journal loaded successfully',
    props<{ journalEntries: JournalEntry[], next: string, previous: string }>()
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

export const EditJournalEntry = createAction(
    '[Journal] edit an Entry',
    props<{journalEntry: JournalEntry}>()
)

export const EditJournalEntrySuccess = createAction(
    '[backend] Journal Entry edit success',
    props<{journalEntry: JournalEntry}>()
)

export const EditJournalEntryFailure = createAction(
    '[backend] Journal Entry edit failure',
    props<{error: string}>()
)

export const DeleteJournalEntry = createAction(
    '[Journal] delete an Entry',
    props<{journalEntry: JournalEntry}>()
)

export const DeleteJournalEntrySuccess = createAction(
    '[backend] Journal Entry delete success',
    props<{journalEntry: JournalEntry}>()
)

export const DeleteJournalEntryFailure = createAction(
    '[backend] Journal Entry delete failure',
    props<{error: string}>()
)