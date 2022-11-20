import { RestClient } from "../util/RestClient";
import { APIAccount } from "./APIAccount";
import { APIBadge } from "./APIBadge";
import { APIGroup } from "./APIGroup";

/**
 * A generic representation of a Challenge List account use for all site actions.
 */
export class Account implements APIAccount {
    badges!: APIBadge[];
    created_at!: Date;
    flags!: number;
    groups!: APIGroup[];
    id!: number;
    permissions!: number;
    profile!: string | null;
    updated_at!: Date;
    username!: string;

    /**
     * Whether this account is logged in to use the {@link RestClient}.
     */
    public loggedIn: boolean = false;

    /**
     * A {@link RestClient} used to access the Challenge List API.
     */
    public client: RestClient;

    constructor() {
        this.client = new RestClient(this);
    }
}