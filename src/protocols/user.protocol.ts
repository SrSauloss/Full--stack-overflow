export interface user {
    name: string;
    class: string;
}

export interface db_user extends user{
    id: number;
}
