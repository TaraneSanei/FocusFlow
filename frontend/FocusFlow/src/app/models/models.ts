export interface User{
    username:string;
}

export interface JournalEntry{
    Date: Date;
    Time: Time;
    Note: string;
}

export interface Time {
    hour: number;
    minutes:number;
}