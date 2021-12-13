export interface auth {
    user_id: string;
    token: string;
}

export interface db_auth extends auth{
    id: number;
}
