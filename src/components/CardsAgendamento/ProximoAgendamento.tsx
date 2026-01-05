import ActionModal from "@/components/ActionModal/ActionModal";
import AppointmentCard from "@/components/Appointments/Appointments";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native";
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
  const [visibleModal, setVisibleModal] = useState(false)
  
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
      <TouchableOpacity style={styles.footer} onPress={() => setVisibleModal(true)}>
        <Text style={styles.footerText}>Ver todos os agendamentos</Text>
        <MaterialIcons name="chevron-right" size={20} color="#2563EB" />
      </TouchableOpacity>
      
<Modal
  visible={visibleModal}
  transparent
  animationType="slide"
  onRequestClose={() => setVisibleModal(false)}
>
  {/* Backdrop */}
  <TouchableOpacity
    style={{
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.4)",
      justifyContent: "flex-end",
    }}
    activeOpacity={1}
    onPress={() => setVisibleModal(false)}
  >
    {/* Conteúdo do modal */}
    <TouchableOpacity activeOpacity={1}>
      <ActionModal
        handleClose={() => setVisibleModal(false)}
        agendamentos={agendamentos}
      />
    </TouchableOpacity>
  </TouchableOpacity>
</Modal>

        
    </View>

  
  );
}
