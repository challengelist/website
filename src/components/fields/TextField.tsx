import { LabelledField } from "./LabelledField";
import "../../styles/components/fields/textField.scss";

interface TextFieldProperties {
    id: string;
    name: string;
    placeholder?: string;
    lightness?: number;
    min?: number;
    max?: number;
}

export function TextField(props: TextFieldProperties) {
    return <LabelledField name={props.name}>
        <input class="_text-field" style={`background: var(--hsl-dark${props.lightness ?? 15})`} type="text" {...props} />
    </LabelledField>;
}