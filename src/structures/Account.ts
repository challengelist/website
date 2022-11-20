import { RestClient } from "../util/RestClient";

/**
 * A generic representation of a Challenge List account use for all site actions.
 */
export class Account {
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