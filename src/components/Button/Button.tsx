import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./buttonStyles";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export default function Button({ title, style, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={[styles.container, style]} {...rest}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}