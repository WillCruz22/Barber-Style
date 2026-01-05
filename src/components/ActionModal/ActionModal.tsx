import AppointmentCard from "@/components/Appointments/Appointments";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

type Appointment = {
  id: string;
  name: string;
  service: string;
  time: string;
};

type ActionModalProps = {
  handleClose: () => void;
  agendamentos: Appointment[];
};

export default function ActionModal({
  handleClose,
  agendamentos,
}: ActionModalProps) {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* Header do modal */}
      <View style={styles.header}>
        <Text style={styles.title}>Todos os agendamentos</Text>
        <TouchableOpacity onPress={handleClose}>
          <Text style={styles.close}>Fechar</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de todos os agendamentos */}
      <FlatList
        data={agendamentos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AppointmentCard item={item} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}
