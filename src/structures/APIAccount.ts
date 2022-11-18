import { APIGroup } from "./APIGroup";

export interface APIAccount {
    id: number;
    badges: any[];
    created_at: Date;
    updated_at: Date;
    flags: number;
    groups: APIGroup[]; // todo
    permissions: number;
    profile: string | null;
    username: string;
}