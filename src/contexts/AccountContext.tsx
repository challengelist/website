import { Context, ParentProps, createContext, createSignal, useContext } from "solid-js";
import { Account } from "../structures/Account";

const AccountContext: Context<Account> = createContext(new Account());

export function AccountProvider({ children }: ParentProps) {
    const [account] = createSignal(new Account());

    return <AccountContext.Provider value={account()}>
        {children}
    </AccountContext.Provider>;
}

export function useAccount() {
    return useContext(AccountContext);
}