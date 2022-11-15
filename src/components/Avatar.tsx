import "../styles/components/avatar.scss";

export interface AvatarProperties {
    url: string;
}

// TODO: Replace with Account structure.
export function Avatar({ url }: AvatarProperties) {
    return <div class="avatar">
        <img src={url} alt="" class="avatar--front"/>
        <img src={url} alt="" class="avatar--blur"/>
    </div>;
}