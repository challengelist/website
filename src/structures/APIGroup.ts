export interface APIGroup {
    id: number;
    background_color: string;
    color: string;
    icon: string | null;
    name: string;
    permissions_grant: number;
    permissions_revoke: number;
    priority: number;
    short_name: string | null;
    visible: boolean;
}