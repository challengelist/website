import { APIBadge } from "./APIBadge";
import { APIGroup } from "./APIGroup";

export interface APIAccount {
    id: number;
    badges: APIBadge[];
    created_at: Date;
    updated_at: Date;
    flags: number;
    groups: APIGroup[]; // todo
    permissions: number;
    profile: string | null;
    username: string;
}