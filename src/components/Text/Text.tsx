
import { TextProps, Text, } from "react-native";
import { styles } from "./textStyles";


interface TextallProps extends TextProps {
    text: string;                  
    variant?: "default" | "title"; 
}

export default function Textall({ text, style, variant = "default", ...rest }: TextallProps) {
    return (
        <Text style={styles.textoPrincipal} {...rest}> {text} </Text>
    );
}