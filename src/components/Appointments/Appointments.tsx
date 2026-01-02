import { styles } from "@/components/Appointments/styeles";
import { Text, View } from "react-native";

type AppointmentItem = {
  name: string;
  service: string;
  time: string;
};

type AppointmentProps = {
  item: AppointmentItem;
};

export default function AppointmentCard({ item }: AppointmentProps) {
  return (
    <View style={styles.item}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {item.name.charAt(0)}
        </Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.service}>{item.service}</Text>
      </View>

      <Text style={styles.time}>{item.time}</Text>
    </View>
  );
}
