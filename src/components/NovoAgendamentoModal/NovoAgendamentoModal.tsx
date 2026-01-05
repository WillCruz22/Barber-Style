import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";


type Props = {
    onClose: () => void;
    onSave: (data: {
        name: string;
        service: string;
        time: string;
    }) => void;
};

export default function NovoAgendamentoModal({ onClose, onSave }: Props) {

    const [name, setName] = useState("");
    const [service, setService] = useState("");
    const [time, setTime] = useState("");


    return (
        <SafeAreaView style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Novo Agendamento</Text>
                <TouchableOpacity onPress={onClose}>
                    <Text style={styles.close}>Cancelar</Text>
                </TouchableOpacity>
            </View>

            {/* Form */}
            <TextInput
                placeholder="Nome do cliente"
                style={styles.input}
                onChangeText={setName}
            />

            <TextInput
                placeholder="Serviço"
                style={styles.input}
                onChangeText={setService}
            />

            <TextInput
                placeholder="Horário"
                style={styles.input}
                onChangeText={setTime}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    onSave({
                        name,
                        service,
                        time,
                    })
                }
            >
                <Text style={styles.buttonText}>Salvar agendamento</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
