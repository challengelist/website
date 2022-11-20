import { children } from "solid-js";
import "../../styles/components/fields/labelled.scss";

export interface LabelledFieldProperties {
    name: string;
    children: any;
}

export function LabelledField(props: LabelledFieldProperties) {
    const c = children(() => props.children);

    return <div class="_labelled">
        <div class="_labelled--name">{props.name}</div>
        <div class="_labelled--children">{c()}</div>
    </div>;
}