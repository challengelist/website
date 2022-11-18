import { APIAccount } from "../structures/APIAccount";
import { Avatar } from "./Avatar";
import "../styles/components/inlineAccount.scss";

export interface InlineAccountProperties {
    apiAccount: APIAccount;
}

export function InlineAccount({ apiAccount }: InlineAccountProperties) {
    return <a href={`/user/${apiAccount.id}`} class="inline_account">
        <div class="inline_account--avatar">
            <Avatar url={apiAccount.profile || "https://alten.s-ul.eu/muXCiSTJ.png"} />
        </div>
        <div class="inline_account--username">{apiAccount.username}</div>
    </a>;
}