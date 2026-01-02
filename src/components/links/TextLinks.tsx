import { TouchableOpacity, Text, TouchableOpacityProps} from "react-native";
import {styles} from "./TextLinksStyles"

interface ButtonProps extends TouchableOpacityProps {
    title: string;

}


export default function TextLinks({title, ...rest}: ButtonProps){
    return(
        <TouchableOpacity style={styles.container}{...rest}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}