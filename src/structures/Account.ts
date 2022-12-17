import { RestClient } from "../util/RestClient";
import { APIAccount } from "./APIAccount";

/**
 * A generic representation of a Challenge List account use for all site actions.
 */
export class Account {
    /**
     * An {@link APIAccount} that represents the user.
     */
    public apiAccount?: APIAccount;

    /**
     * The token to use in web requests if the user is {@link loggedIn}
     */
    public token?: string;

    /**
     * Whether this account is logged in to use the {@link RestClient}. If set to true, {@link apiAccount} should have data filled in to use.
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