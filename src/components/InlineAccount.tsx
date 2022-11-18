import { APIAccount } from "../structures/APIAccount";
import { Avatar } from "./Avatar";
import "../styles/components/inlineAccount.scss";

export interface InlineAccountProperties {
    apiAccount: APIAccount;
    showRole?: boolean;
}

export function InlineAccount({ apiAccount, showRole }: InlineAccountProperties) {
    return <a href={`/user/${apiAccount.id}`} class="inline_account">
        <div class="inline_account--group">
            <div class="inline_account--avatar">
                <Avatar url={apiAccount.profile || "https://alten.s-ul.eu/muXCiSTJ.png"} />
            </div>
            <div class="inline_account--username">{apiAccount.username}</div>
        </div>
        {showRole ? <div class="inline_account--badge">{apiAccount.badges[0]?.name}</div> : null}
    </a>;
}