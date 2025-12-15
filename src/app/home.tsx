import { View, ScrollView } from "react-native";
import Textall from "@/src/components/Text/Text"
import InputText from "../components/inputs/InputText";
import { styles } from "../styles/cadastroStyles";
import { MaterialIcons } from "@expo/vector-icons";
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function Home (){
    return(
        <View>
            <InputText 
                
                placeholder="Informe uma senha"
                secureTextEntry
                icon={<FontAwesome name="lock" size={24} color="black" />}
                />
        </View>
    )
}