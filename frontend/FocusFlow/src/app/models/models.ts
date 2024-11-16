export interface User{
    username:string;
}

export interface JournalEntry{
    id?: number;
    DateTime: Date;
    Note: string;
}

export interface Time {
    hour: number;
    minutes:number;
}
