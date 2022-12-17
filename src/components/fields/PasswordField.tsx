import { JSX } from "solid-js";
import { LabelledField } from "./LabelledField";
import "../../styles/components/fields/textField.scss";

export interface PasswordFieldProperties {
    onInput?: JSX.EventHandlerUnion<HTMLInputElement, InputEvent>
    name: string;
    placeholder?: string;
    lightness?: number;
    min?: number;
    max?: number;
}

export function PasswordField(props: PasswordFieldProperties) {
    return <LabelledField name={props.name}>
        <input class="_text-field" style={`background: var(--hsl-dark${props.lightness ?? 15})`} type="password" {...props} />
    </LabelledField>;
}