import { View, Text } from "react-native";
import { styles } from "./styles";
type CardsProps = {
    icon: React.ReactNode;
    title: string;
    value: string;
}

export default function Cards({ icon, title, value }: CardsProps) {


    return (
        <View style={styles.card}>
            <View style={styles.top}>
                <View style={styles.icon}>{icon}</View>
                <Text style={styles.title}>{title}</Text>

            </View>

            <Text style={styles.value}>{value}</Text>

        </View>
    )
}