import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import {styles} from "./styles"


export default function ProximoAgendamento() {
    return (
        <View style={styles.container}>
            <View style={styles.headerCard}>
                <Text>Proximos Agendamentos</Text>
                <MaterialIcons name="schedule" size={20} color={"black"} />
            </View>

            <View style={styles.list}>
                <ItensDoAgendamento
                    initials="CS"
                    name="Carlos Silva"
                    service="Corte + Barba"
                    time="14:30"

                />
            </View>
            <TouchableOpacity style={styles.footer}>
                <Text style={styles.footerText}>Ver todos os agendamentos</Text>
                <MaterialIcons name="chevron-right" size={20} color="#2563EB" />
            </TouchableOpacity>

        </View>
    )
}


type ItensDoAgendamentoProps = {
    initials: string;
    name: string;
    service: string;
    time: string;
}

function ItensDoAgendamento({ initials, name, service, time }: ItensDoAgendamentoProps) {
    return (
        <View style={styles.item}>

            <View style={styles.left}>
                <View style={styles.avatar}>
                    <Text>{initials}</Text>
                </View>

                <View>
                    <Text>{name}</Text>
                    <Text>{service}</Text>
                </View>
            </View>
            <Text>{time}</Text>
        </View>
    )
}
