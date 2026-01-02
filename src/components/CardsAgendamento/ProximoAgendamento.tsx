import AppointmentCard from "@/components/Appointments/Appointments";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const agendamentos = [
  {
    id: "1",
    name: "Carlos Silva",
    service: "Corte + Barba",
    time: "14:30",
  },
  {
    id: "2",
    name: "João Santos",
    service: "Corte",
    time: "15:00",
  },
];

export default function ProximoAgendamento() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerCard}>
        <Text>Próximos Agendamentos</Text>
        <MaterialIcons name="schedule" size={20} color="black" />
      </View>

      
      <FlatList
        data={agendamentos}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <AppointmentCard item={item} />
        )}
      />

      {/* Footer */}
      <TouchableOpacity style={styles.footer}>
        <Text style={styles.footerText}>Ver todos os agendamentos</Text>
        <MaterialIcons name="chevron-right" size={20} color="#2563EB" />
      </TouchableOpacity>
    </View>
  );
}
