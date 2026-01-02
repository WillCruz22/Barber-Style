import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./buttonStyles";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    icon?: React.ReactNode;
}

export default function Button({ title, style, icon, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={[styles.container, style]} {...rest}>
            {icon}
            <Text style={styles.title}> {title} </Text>
            
            
        </TouchableOpacity>
    );
}