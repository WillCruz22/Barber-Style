import { View, ScrollView, } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../components/Button/Button";
import { styles } from "@/src/styles/homeStyles";
import Header from "../components/Header/Header";
import Cards from "../components/Cards/Cards";
import ProximoAgendamento from "../components/CardsAgendamento/ProximoAgendamento";


export default function Home() {
    return (
        <>

            <Header />

            <ScrollView style={styles.scrollContainer} >
            <View style={styles.cardsContainer}>
                <Cards
                    title="Faturamento hoje"
                    value="R$0,00"
                    icon={<MaterialIcons name="attach-money" size={18} color="green" />}
                />

                <Cards
                    title="Clientes hoje"
                    value="6"
                    icon={<MaterialIcons name="people" size={22} color="blue" />}
                />


                <Cards
                    title="Agendamentos"
                    value="12"
                    icon={<MaterialIcons name="event" size={22} color="red" />}
                />

                <Cards
                    title="Taxa de ocupação"
                    value="50%"
                    icon={<MaterialIcons name="attach-money" size={18} color="" />}
                />

                <ProximoAgendamento/>
                


                </View >
                <View style={styles.container}>

                    <Button
                        title="Registro de venda"
                        style={styles.buttonHome}
                        icon={<MaterialIcons name="attach-money" size={22} color="#fff" />}
                    />

                    <Button
                        title="Novo Agendamento"
                        icon={<MaterialIcons name="event" size={22} color="#fff" />}
                        style={styles.buttonHome}
                    />

                    <Button
                        title="Gerenciar clientes"
                        icon={<MaterialIcons name="people" size={22} color="#fff" />}
                        style={styles.buttonHome}
                    />

                    <Button
                        icon={<MaterialIcons name="trending-up" size={22} color="#fff" />}
                        title="Taxa de ocupação"
                        style={styles.buttonHome}
                    />


                </View>




            </ScrollView>
        </>
    )
}